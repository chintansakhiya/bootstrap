

 
const api_url ="http://localhost:3000/api/v1/movies";
  
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
getapi(api_url);
  
 
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<thead class="table-dark"><tr>
          <th scope="col">Name</th>
          <th scope="col">original_title</th>
          <th scope="col">genres</th>
          <th scope="col">production_companies</th>
         </tr></thead><tbody>`;
    
    // Loop to access all rows 
    for (let r of data.data) {
        tab += `<tr> 
    <th scope="row">${r.id} </th>
    <td>${r.original_title}</td>
     <td>${r.genres}</td> 
     <td>${r.production_companies}</td>          
</tr>`;

// document.getElementById("employees").innerHTML = r;
    }
    tab+=`</tbody>`
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}