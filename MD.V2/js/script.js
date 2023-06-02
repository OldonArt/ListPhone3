


document.getElementById('mainForm').addEventListener('submit', checkFormOne);

//---------------------------------------------------------------------

const delete_button = document.querySelectorAll('.delete_button');
function deleteNumber() {
    console.log('Delete');
};
delete_button.forEach(buttonItem => {
    buttonItem.addEventListener("click", deleteNumber);
});


const heart = document.querySelectorAll('.heart');
function importantNumber() {
    console.log('Heart')
};
heart.forEach(buttonItem =>{
    buttonItem.addEventListener('click', importantNumber);
})

// Атрибут exampleInputEmail1

function checkFormOne(event) {
    event.preventDefault();
    let el = document.getElementById('mainForm');


    let name_id = el.exampleInputEmail1.value;
    let phone_id = el.exampleInputNumber1.value;
    let status_id = el.exampleCheck1.value;

    let fail = '';
    
    if(phone_id == '') 
        fail = 'Enter a number to create a contact'
    else if(name_id.length > 30)
        fail = 'Name too long';
    else if(name_id.split('&').length > 1)
        fail = 'Invalid name';

    if(fail != '') {
        document.getElementById('error').innerHTML = fail;

        return false;
    } else {
        alert('Contact created');
        return false;
    }
}

// code dosn't work
function checkFormTwo(element) {
    let name_class = element.main__title.value;
    let name_id = el.exampleInputNumber1.value;
    if(name_id != '')
        document.getElementsByClassName(main__title).innerHTML = name_id;
    return false
}