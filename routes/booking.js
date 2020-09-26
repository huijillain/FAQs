var express = require('express');
var router = express.Router();
const data = require('../models/mongoose_data');

/* GET home page. */
router.get('/', function(req, res, next) {
    let bookingId=req.query.bookingId;
    console.log(bookingId);
    data.getBooking(bookingId, (error, bookings) => {
        if (error) return res.status(500).send('Error ' + error);
        // Get agents information 
        console.log(bookings)
        res.render('bookings',{ bookings: bookings });
        })
});  


module.exports = router;
