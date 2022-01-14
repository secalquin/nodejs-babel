const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

//middleware
app.use(express.json());

const InitialValue = {
  msg: "",
  error: false,
};

app.get("/", (_req, res) => {
  const p =
    "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
  console.log(p.replaceAll("dog", "monkey"));

  res.json({ ...InitialValue, msg: "Este es un ejemplo con babel" });
});

app.listen(port, () => {
  console.log(`Ejemplo app Hello World con babel http://localhost:${port}`);
});
