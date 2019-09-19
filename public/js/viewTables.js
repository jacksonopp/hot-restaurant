//array to store titles
const tableHeadTitles = ["Name", "Date", "ReservationID"];
//DOM element
const tableDiv = document.getElementById("tables"); // DOM element
//Creating <table>
const tableTable = document.createElement("table");
tableTable.classList.add("table");
tableDiv.append(tableTable);
//creating <thead>
const tableThead = document.createElement("thead");
tableTable.append(tableThead);
//creating <tr> for the headers
const tableRowHead = document.createElement("tr");
tableThead.append(tableRowHead);

//creating the content for the tables
tableHeadTitles.forEach(item => {
    const tableHead = document.createElement("th");
    tableHead.setAttribute("scope", "col");
    tableHead.innerText = item;
    tableThead.append(tableHead);
});

const tableBody = document.createElement("tbody");
tableTable.append(tableBody);

axios.get("/api/reservations").then(response => {
    const data = response.data;
    console.log(data);
    data.forEach(item => {
        const tableRow = document.createElement("tr");
        tableBody.append(tableRow);
        const tableDname = document.createElement("td");
        tableDname.innerText = item.name;

        const tableDdate = document.createElement("td");
        tableDdate.innerText = moment(item.dateAndTime).format("LLL");

        const tableDid = document.createElement("td");
        tableDid.innerText = item.unique_id;

        tableRow.append(tableDname);
        tableRow.append(tableDdate);
        tableRow.append(tableDid);
    });
});
