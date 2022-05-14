function createDiv() {
    var div = document.createElement('div');
    div.classList.add("cars_field");
    div.innerHTML = document.getElementById('getText').innerHTML;
    let removeBtn = document.createElement('span');
    removeBtn.innerHTML = '<i class="far fa-times-circle"></i>';  
    div.appendChild(removeBtn);
    let addblock = document.querySelector('.addblock');
    addblock.appendChild(div);
    removeCar();
}

function removeCar() {
    let carblock = document.querySelectorAll(".cars_field");
    carblock.forEach(function (item) {
        item.addEventListener('click', function(e){   
            if(e.target.classList.contains("fa-times-circle")){
                this.parentNode.removeChild(this);
            }
        })
    });
}
removeCar();

var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
    var formData = readFormData();
    if (selectedRow == null)
    insertNewRecord(formData);
    else
    updateRecord(formData);
    resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["FirstName"] = document.getElementById("FirstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["Date"] = document.getElementById("Date").value;
    formData["Cars"] = document.getElementById("Cars").value;
    formData["mark"] = document.getElementById("mark").value;
    formData["model"] = document.getElementById("model").value;
    formData["year"] = document.getElementById("year").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("carList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.FirstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Date;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Cars;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.mark;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.model;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.year;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a class="click" onClick="onEdit(this)"><i class="far fa-edit"></i>Edit</a>
                       <a class="click" onClick="onDelete(this)"><i class="far fa-trash-alt"></i>Delete</a>`;                      
}

function resetForm() {
    document.getElementById("FirstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("Date").value = "";
    document.getElementById("Cars").value = "";
    document.getElementById("mark").value = "";
    document.getElementById("model").value = "";
    document.getElementById("year").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("FirstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Date").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Cars").value = selectedRow.cells[3].innerHTML;
    document.getElementById("mark").value = selectedRow.cells[4].innerHTML;
    document.getElementById("model").value = selectedRow.cells[5].innerHTML;
    document.getElementById("year").value = selectedRow.cells[6].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.FirstName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.Date;
    selectedRow.cells[3].innerHTML = formData.Cars;
    selectedRow.cells[4].innerHTML = formData.mark;
    selectedRow.cells[5].innerHTML = formData.model;
    selectedRow.cells[6].innerHTML = formData.year;
}

function onDelete(td) {
    if (confirm('are you sure to delete this recors?')) {
        row = td.parentElement.parentElement;
        document.getElementById("carList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("FirstName").value == "") {
        isValid = false;
        document.getElementById("FirstNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("FirstNameValidationError").classList.contains("hide"))
        document.getElementById("FirstNameValidationError").classList.add("hide");
    }
    return isValid;
}



