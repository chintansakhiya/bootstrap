



// Defining async function
async function getapi(url) {
    // Storing response
    let response = await fetch(url);


    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);

    show(data);
}
// Calling that async function

function getname() {


    let api_url = "http://localhost:3000/api/v1/movies/";
    let name = document.getElementById("name").value;

    if (name !== "") {

        api_url += "?name="
    }
    api_url += name

    getapi(api_url);
}


// Function to define innerHTML for HTML table
function show(data) {
    let tab =
        `<thead class="table-dark"><tr>
          <th scope="col">ID</th>
          <th scope="col">original_title</th>
          <th scope="col">genres</th>
          <th scope="col">production_companies</th>
         </tr></thead>`;

    // Loop to access all rows 
    if (data.data !== null) {

        document.getElementById("employees").innerHTML = tab;
        const tbody = document.createElement("tbody");
        let x = document.getElementById("employees");
        for (let r of data.data) {
            //         tab += `<tr> 
            //     <th scope="row">${r.id} </th>
            //     <td>${r.original_title}</td>
            //      <td>${r.genres}</td> 
            //      <td>${r.runtime}</td>          
            // </tr>`;
            const tr = document.createElement("tr");
            const th = document.createElement("th");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            const td4 = document.createElement("td");
            // element.classList.add("my-class");
            th.scope="row";
            
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
    }
    tab += `</tbody>`
    // Setting innerHTML as tab variable
}
