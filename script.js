var selectedRow = null

function onFormSubmit(e) {
    console.log("hg")
	Event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["first_name"] = document.getElementById("first_name").value;
    formData["contact"] = document.getElementById("contact").value;
    formData["addres"] = document.getElementById("address").value;
    formData["product"] = document.getElementById("product").value;
     return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.first_name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.contact;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;

}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("first_name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[1].innerHTML;
    document.getElementById("address").value = selectedRow.cells[2].innerHTML;
    document.getElementById("product").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.first_name;
    selectedRow.cells[1].innerHTML = formData.contact;
    selectedRow.cells[2].innerHTML = formData.addres;
    selectedRow.cells[3].innerHTML = formData.product;
}

//Delete the data
function onDelete(td) {
    if (confirm('You want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('List').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("first_name").value = '';
    document.getElementById("contact").value = '';
    document.getElementById("address").value = '';
    document.getElementById("product").value = '';
    selectedRow = null;
}