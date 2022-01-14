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
  res.json({ ...InitialValue, msg: "Este es un ejemplo con babel" });
});

app.listen(port, () => {
  console.log(`Ejemplo app Hello World con babel http://localhost:${port}`);
});
