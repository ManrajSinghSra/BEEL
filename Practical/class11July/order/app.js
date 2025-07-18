const http = require("http");
const json = require("./o.json");
const fs = require("fs");

const path = require("path");
const { log } = require("console");

function handle() {
  const fileter = json.filter((curr) => curr.status === "delivered");

  fileter["deliveredAt"] = new Date(Date.now()).toLocaleDateString();

  console.log(fileter);

  fs.mkdir(path.join(__dirname, "archive"), (err) => {
    if (err) {
      console.log(err);
    }
    console.log("done");
  });

  fs.writeFile(
    path.join(__dirname, "archive", "delivered-orders.json"),
    fileter,
    (err) => {
      if (err) {
        console.log(err);
        console.log(err);
      }
    }
  );

  console.log(
    fileter.length + " delivered orders to archive/delivered-orders.json"
  );
}

handle();
