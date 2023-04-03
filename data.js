

// for (let i = 0; true; i++) {
//     console.log(i)

// }

 



async function getapi(url) {
    try {
        let response = await fetch(url);

        console.log(response);

        var data = await response.json();
        console.log(data);

        show(data);
    }

    catch (error) {
        document.getElementById("data-not-found").innerHTML = error;

    }
}



function getname() {

    let api_url = "http://localhost:3000/api/v1/movies";
    let name = document.getElementById("name").value;

    if (name !== "") {

        api_url += "?name="
    }
    api_url += name

    getapi(api_url);
}

function show(data) {
    let tab =
        `<thead class="table-dark"><tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">Genres</th>
        <th scope="col">Companies</th>
        </tr></thead>`;

    document.getElementById("data-not-found").innerHTML = ""
    // Loop to access all rows 
    if (data.data !== null) {

        document.getElementById("employees").innerHTML = tab;
        const tbody = document.createElement("tbody");
        let x = document.getElementById("employees");
        for (let r of data.data) {

            const tr = document.createElement("tr");
            const th = document.createElement("th");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            const td4 = document.createElement("td");

            th.scope = "row";

            th.textContent = r.id;
            tr.appendChild(th);
            td2.textContent = r.original_title;
            tr.appendChild(td2);
            td3.textContent = r.genres;
            tr.appendChild(td3);
            td4.textContent = r.production_companies;
            tr.appendChild(td4);

            tbody.appendChild(tr);


        }
        x.appendChild(tbody);
    } else {
        document.getElementById("data-not-found").innerHTML = "data not found"
        document.getElementById("employees").innerHTML = ""
    }

}
//----------------------------------------------------------------------------------------------------------------------

let person = {
    name: "chintan",
    surname: "sakhiya"
}

let x = ["a", "b", "c", 2]
let y = x
y[0] = "change"
console.log(x)



function Car(id) {
    this.carId = id;
    this.start = function () {
        console.log('start:' + this.carId);
    }
}
let car = new Car(123);
car.start();

let jsonIn =`[
{"carId" : 456},
{"carId" : 789}]`

let carIds = JSON.parse(jsonIn);
console.log(carIds);


let xyz= function xy(){
    let person = {
        name: "chintan",
        surname: "sakhiya",
        pr: ()=> {
            console.log("name")
            
        }
    }
    person.pr()
    
}
xyz()