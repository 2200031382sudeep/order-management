useEffect(() => {
  fetch('http://localhost:5000/orders')
    .then((res) => res.json())
    .then((data) => setMessage(JSON.stringify(data)))
    .catch((err) => {
      console.error("Error connecting to backend:", err);
      setMessage("Could not connect to backend");
    });
}, []);
useEffect(() => {
  fetch('http://localhost:5000/orders')
    .then((res) => res.json())
    .then((data) => setMessage(JSON.stringify(data)))
    .catch((err) => {
      console.error("Error connecting to backend:", err);
      setMessage("Could not connect to backend");
    });
}, []);
