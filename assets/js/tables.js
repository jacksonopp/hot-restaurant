const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", () => {
    const newReservation = {
        name: document.getElementById("name"),
        phone: document.getElementById("phone"),
        numOfPeople: document.getElementById("num-of-people"),
        dateAndTime: document.getElementById("date-and-time")
    };
    // do axios request
    // console.log(newReservation);
    axios
        .get("/api/reservations", {
            method: "POST",
            body: JSON.stringify(newReservation),
            headers: { "Content-Type": "application/json" }
        })
        .then(data => {
            console.log(data.data[0]);
        });
});
