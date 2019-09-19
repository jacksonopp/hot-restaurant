
const express = require("express");
const path = require("path");
const id = require("uniqid");
const mysql = require("mysql");
const sqlConfig = require("./public/config/mySqlConfig");

const reservations = require("./assets/api/reservations");
const waitlist = require("./assets/api/waitlist");

const app = express();
const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection(sqlConfig);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"))
})

// app.post("/tables", (req, res) => {
//     const newReservation = req.body;
//     console.log(newReservation);

//     newReservation.routeName = newReservation.test.replace(/\s+/g, "").toLowerCase();

//     console.log(newReservation);

//     reservations.push(newReservation);

//     res.json(newReservation);

// })

app.get("/reservations", (req, res) => {
    res.sendFile(path.join(__dirname, "reservations.html"))
})
//-----------------------API---------------------------------
// reservatios
app.get("/api/reservations", (req, res) => {
    console.log(reservations.length);
    return res.json(reservations);
})


app.get("/api/reservations/:routename", (req, res) => {
    const chosen = req.params.routename;

    console.log(chosen);

    reservations.forEach((item) => {
        if (chosen === item.routeName) {
            return res.json(item);
        }
    })
})
app.post("/api/reservations", (req, res) => {
    const newReservation = req.body;
    const resLength = reservations.length;

    console.log(newReservation);

    if (resLength < 5) {
        newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
        newReservation.unique_id = id();
        console.log(reservations.length);

        reservations.push(newReservation);
    } else {
        newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
        newReservation.unique_id = id();
        console.log(reservations.length);

        waitlist.push(newReservation);
    }
    res.json(newReservation);

})
//waitlist

app.get("/api/waitlist", (req, res) => {
    return res.json(waitlist);
})

//================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
