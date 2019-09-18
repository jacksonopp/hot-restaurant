
const express = require("express");
const path = require("path");

const reservations = require("./assets/api/reservations");
const waitlist = require("./assets/api/waitlist");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"))
})

app.get("/reservation", (req, res) => {
    res.sendFile(path.join(__dirname, "reservation.html"))
})
//-----------------------API---------------------------------
// reservatios
app.get("/api/reservations", (req, res) => {
    return res.json(reservations);
})
app.post("/api/reservations", (req, res) => {
    const newReservation = req.body;
    console.log(newReservation);

    newReservation.routeName = newReservation.test.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);

})
//waitlist
app.get("/api/waitlist", (req, res) => {
    return res.json(waitlist);
})
app.post("/api/waitlist", (req, res) => {
    const newWait = req.body;
    console.log(newWait);

    newWait.routeName = newWait.test.replace(/\s+/g, "").toLowerCase();

    console.log(newWait);

    waitlist.push(newWait);

    res.json(newWait);

})






//================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
