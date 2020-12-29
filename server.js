/**
 * API
 * 
 * PUT =>    input {title: 'string'} output {title: 'string', id: 1}
 * GET =>                            output [{title: 'string', id: 1}, ...]
 * DELETE => input {id: 1}           output [{title: 'string', id: 1}, ...]
 */

var items = [
  {id: -2, title: 'example-element 123'},
  {id: -1, title: 'example-element asd'}
]; // [{title: string, id: number}]

var taskId = 0;

var express = require("express");
var app = express();

const jsonParser = express.json();

function resolveCors(res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
}

app.use("/item", jsonParser, function (req, res) {
  resolveCors(res);

  switch (req.method) {
    case "GET":
      break;
    case "PUT":
      taskId++;
      items.push({ title: req.body.title, id: taskId });
      console.log("items: ", items);
      res.json(items[items.length - 1]);
      return;
    case "DELETE":
      items = items.filter((item) => item.id !== req.body.id);
      break;
    default:
      console.log("error request", req.method, req.url);
  }
  console.log("items: ", items);
  res.json(items);
});

app.use(express.static('build'));

// app.listen(process.env.PORT || 3000, function () {
app.listen(3000, function () {
  console.log("ExpressJs server run on 3000 port");
});
