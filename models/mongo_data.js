// install mongoDB to run, copy from w3schools 
// did not setup a separate mongoDB connection, use the next 2 lines
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// This function is retrieving the contact info from the DB
exports.getContactData = (agencyId, callBack) => {
    // let select = "";
    if (!agencyId)
        getData("agencies", [agencyId], callBack);                      //getData(select, [agencyId], callBack);
    else
        getData("agents", [agencyId], callBack);
}
                                                                // function getData(select, arguments, callBack) {
function getData(collection, arguments, callBack) {
                                                                               // Connecting to the Mongo DB
    MongoClient.connect(url, function (err, db) {                              // copy form w3schools
        if (err) throw err;
                                                                               // Specify the targe DB
        var dbo = db.db("travelexperts");
                                                                               // The select query

        dbo.collection(collection).find({}).toArray(function (err, result) {    //use collection to make it genetic
            if (err) throw err;
            console.log(result);
                                                                        // Send the results back to the callback
            callBack(null, result);
            db.close();
        });
    });
}

// using mongdDB to get data from mongo Compass
//getContactData(1, () => { });

// did not change to a new controller