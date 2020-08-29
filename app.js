var side_panel = document.querySelector('.side-panel-container');
const side_panel_btn = document.querySelector('#side-panel-btn');

const table_body = document.querySelectorAll('#table-body');
const table_rows = document.querySelectorAll('tr');
const table_data = document.querySelectorAll('td');

function toggleSidePanel() {

    if (side_panel.style.width != "0px") {
        side_panel.style.width = "0px";
    } else {
        side_panel.style.width = "15%";
    }
}

function addMaterial () {
    const table_body = document.querySelector('#table-body')
    var newMat = document.createElement('tr');
    newMat.innerHTML = `<td>##</td>
    <td>Material Name</td>
    <td>##</td>
    <td>$$$$.$$</td>
    <td>$$$$.$$</td>
    <td><button class="edit-btn"><i class="far fa-edit"></i></button>
    <button class="delete-btn"><i class="fas fa-trash-alt"></i></button></td>`
    table_body.appendChild(newMat);
    edit_btn = document.querySelectorAll('.edit-btn');
    let new_edit_btn = edit_btn[edit_btn.length - 1];

    addEvent([new_edit_btn]);
}

function addEvent(edit_btn) {
    edit_btn.forEach(element => {
    element.addEventListener('click', (event) => {
        console.log(event.target);
        let table_body = event.target.parentElement.parentElement.parentElement.parentElement;
        let table_rows = table_body.querySelectorAll('tr');
        let wasEditing = false;
        let table_row = event.target.parentElement.parentElement.parentElement;
        table_row.getAttribute('editing') == 'true' ? 
        wasEditing = true : 
        wasEditing = false;

        table_rows.forEach(element => {
            element.setAttribute("editing", "false");
            let table_columns = element.querySelectorAll('td');
            for (var i = 1; i < table_columns.length - 1; ++i) {
                let current_column = table_columns[i];
                current_column.setAttribute("contenteditable", "false");
            }
        });

        !wasEditing ? table_row.setAttribute("editing", "true") : '';

        if (wasEditing) {
            table_rows.forEach(element => {
                element.removeAttribute("editing")
            });
        } else {
            let table_columns = table_row.querySelectorAll('td');
            for (var i = 1; i < table_columns.length - 1; ++i) {
                let current_column = table_columns[i];
                current_column.setAttribute("contenteditable", "true");
            }
        }
    })
});
}
let edit_btn = document.querySelectorAll('.edit-btn');
addEvent(edit_btn);


// edit_btn.forEach(parentElement.parentElement, addEventListener('click', (e) => {
//     console.log("PUSSY");
//     console.log(e.target);
// }))


