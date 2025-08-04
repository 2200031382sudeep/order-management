import express from 'express';
import multer from 'multer';
import { uploadToS3 } from './s3Service.js';
import { saveMetadata } from './dynamoService.js';
import { sendNotification } from './snsService.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    const s3Response = await uploadToS3(file);

    const metadata = {
      fileName: file.originalname,
      fileUrl: s3Response.Location,
      uploadDate: new Date().toISOString(),
    };
    await saveMetadata(metadata);

    await sendNotification(`File uploaded: ${file.originalname}`);

    res.json({ message: 'File uploaded successfully!', data: metadata });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'File upload failed' });
  }
});

export default router;
