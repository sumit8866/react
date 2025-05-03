let Name = document.getElementById("Name").value;
let Age = document.getElementById("Age").value;
let SurName = document.getElementById("SurName").value;

let formData = [];

function submit() {
  Name = document.getElementById("Name").value;
  Age = document.getElementById("Age").value;
  SurName = document.getElementById("SurName").value;

  if (Name === "") {
    document.getElementById("Name-error").innerHTML = "Name is required";
  } else {
    document.getElementById("Name-error").innerHTML = "";
  }
  if (SurName === "") {
    document.getElementById("SurName-error").innerHTML = "SurName is required";
  } else {
    document.getElementById("SurName-error").innerHTML = "";
  }
  if (Age === "") {
    document.getElementById("Age-error").innerHTML = "Age is required";
  } else if (isNaN(Age)) {
    document.getElementById("Age-error").innerHTML = "Age must be a number";
  } else if (Age <= 0) {
    document.getElementById("Age-error").innerHTML =
    "Age must be a positive number";
  } else {
    document.getElementById("Age-error").innerHTML = "";
  }
  

//Store Data*****************************************************************************************

  if (Name && SurName && Age) {
    formData.push( {Name, SurName, Age});
    console.log(formData);  
    document.getElementById("Name").value = "";
    document.getElementById("SurName").value = "";
    document.getElementById("Age").value = "";
}

  
//Print Data*****************************************************************************************
 
  let table = document.getElementById("table").innerHTML;
  if (formData.length > 0) {
    table =
      "<tr><th>Name</th><th>SurName</th><th>Age</th><th>DeleteData</th><th>UpdateData</th></tr>";

    formData.map((data , index)=>(
      table += ` <tr>
      <td>${data.Name}</td>
      <td>${data.SurName}</td>
      <td>${data.Age}</td>
      <td><button onclick="DeleteDeta(${index})">DELETE</button></td>
      <td><button onclick="UpdateDeta(${index})">UPDATE</button></td></tr>`
    ))
  }
  table += "</table>";
  document.getElementById("table").innerHTML = table;

}

//Delete Data*****************************************************************************************

function DeleteDeta(index) {
  formData.splice(index , 1);
  if (formData.length > 0) {
    table =
      "<tr><th>Name</th><th>SurName</th><th>Age</th><th>DeleteData</th><th>UpdateData</th></tr>";

    formData.map((data , index)=>(
      table += ` <tr>
      <td>${data.Name}</td>
      <td>${data.SurName}</td>
      <td>${data.Age}</td>
      <td><button onclick="DeleteDeta(${index})">DELETE</button></td>
      <td><button onclick="UpdateDeta(${index})">UPDATE</button></td></tr>`
    ))
  }
  table += "</table>";
  document.getElementById("table").innerHTML = table;

  console.log(index);
  
}


//Update Data*****************************************************************************************
function UpdateDeta(index) {
  document.getElementById("Name").value = formData[index].Name;
  document.getElementById("SurName").value = formData[index].SurName;
  document.getElementById("Age").value = formData[index].Age;
  formData.splice(index, 1);
  if (formData.length > 0) {
    table =
      "<tr><th>Name</th><th>SurName</th><th>Age</th><th>DeleteData</th><th>UpdateData</th></tr>";

    formData.map((data , index)=>(
      table += ` <tr>
      <td>${data.Name}</td>
      <td>${data.SurName}</td>
      <td>${data.Age}</td>
      <td><button onclick="DeleteDeta(${index})">DELETE</button></td>
      <td><button onclick="UpdateDeta(${index})">UPDATE</button></td></tr>`
    ))
  }
  table += "</table>";
  document.getElementById("table").innerHTML = table;
  // displayData();
}
