const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", () => {
    // const newReservation = {};
    // do axios request
    // console.log(newReservation);
    axios
        .post("/api/reservations", {
            name: document.getElementById("name").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            numOfPeople: document
                .getElementById("num-of-people")
                .value.trim(),
            dateAndTime: document
                .getElementById("date-and-time")
                .value.trim()
        })
        .then(response => {
            console.log(response);
        });
    alert("You've been put on the list!");
});