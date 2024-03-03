const app = require("express")();

app.get("/", (req, res) => {
  console.log(req.headers);
  console.log(req.url);
  res.send(req.url);
});

app.listen(8080, () => {
  console.log("server on 8080");
});
