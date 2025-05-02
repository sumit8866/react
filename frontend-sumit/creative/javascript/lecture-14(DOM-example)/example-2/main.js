

let Name = document.getElementById("Name").value;
let Age = document.getElementById("Age").value;
let SurName = document.getElementById("SurName").value;

let formData = []

function submit() {
    Name = document.getElementById("Name").value;
    Age = document.getElementById("Age").value;
    SurName = document.getElementById("SurName").value;

    let object = {Name,SurName,Age}
    if (Name === '') {
       document.getElementById("Name-error").innerHTML = "Name is required";
    }else{
        document.getElementById("Name-error").innerHTML = "";
    }
    if (SurName === '') {
       document.getElementById("SurName-error").innerHTML = "SurName is required";
    }
    else{
        document.getElementById("SurName-error").innerHTML = "";
    }
    if( Age === '') {
       document.getElementById("Age-error").innerHTML = "Age is required";
    }else if (isNaN(Age)) {
        document.getElementById("Age-error").innerHTML = "Age must be a number";
    }
    else if (Age <= 0) {

        document.getElementById("Age-error").innerHTML = "Age must be a positive number";
    }
    else{
    document.getElementById("Age-error").innerHTML = "";
    }
    

    if (Name && SurName && Age) {
      // alert("Form submitted successfully!");
      formData.push(object)
      console.log(formData)
      // document.getElementById("Name-error").innerHTML = "";
      // document.getElementById("SurName-error").innerHTML = "";
      // document.getElementById("Age-error").innerHTML = "";
      document.getElementById("Name").value = "";
      document.getElementById("SurName").value = "";
      document.getElementById("Age").value = "";
    }

    let table =document.getElementById("table").innerHTML;
    if (formData.length > 0) {
      table = "<tr><th>Name</th><th>SurName</th><th>Age</th></tr>";
      for (let i = 0; i < formData.length; i++) {
        table += "<tr><td>" + formData[i].Name + "</td><td>" + formData[i].SurName + "</td><td>" + formData[i].Age + "</td></tr>";
      }
      table += "</table>";
      document.getElementById("table").innerHTML = table;
    }
    
  }
  
  function DeleteData(){
      formData.pop();
      let table =document.getElementById("table").innerHTML;
      if (formData.length >= 0) {
        table = "<tr><th>Name</th><th>SurName</th><th>Age</th></tr>";
        for (let i = 0; i < formData.length; i++) {
          table += "<tr><td>" + formData[i].Name + "</td><td>" + formData[i].SurName + "</td><td>" + formData[i].Age + "</td></tr>";
        }
        table += "</table>";
        document.getElementById("table").innerHTML = table;
      }
      
  }
