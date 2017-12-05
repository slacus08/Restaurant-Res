//Linking our routes to series of "data"
//These data sources hold arrays of information as table-data,
//and waiting list data

var tableData = require("../data/tableData");
var waitListData = require("../data/waitingListData");

// ROUTING //

module.exports = function(app) {
  //API GET Requests
  //Below handles when users visit each page
  //In each of these cases when a user visits
  //(ex. localhost: PORT/api/admin) they are shown a JSON of the data in the tableData

  app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(waitListData);
  });

  app.post("/api/tables", function(req, res) {
    //Note the code here. Our "server" will respond to requests and let users know if
    //they have a table or not.
    //It will do this by sending out the value "true" have a tables
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  //I added this below code so you could clear out the table while working with the functionability
app.post("/api/clear", function() {
  tableData = [];
  waitListData = [];
  console.log(tableData);
});

}
