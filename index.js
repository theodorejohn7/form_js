window.addEventListener('DOMContentLoaded', (event) => {
    displayNull(first_name_error);
    displayNull(last_name_error);
    displayNull(username_error);
    displayNull(email_error);
    displayNull(inputPassword_1_error);
    displayNull(inputPassword_2_error);
    displayNull(address_1_error);
    displayNull(country_error);
    displayNull(state_error);
    displayNull(pincode_error);
});

const displayNull = param => param.style.display = "none";

const nullCheck = (tocheck, id, error) => {
    if (tocheck === "") {
        id.style.display = "inline";
        // document.getElementById("first_name_error").innerText = error;
        id.innerText = error;

    }

}



const emailCheck = (toCheck, id, error) => {
    let b = toCheck.indexOf('@');
    if ((toCheck != "") && (b < 0)) {
        id.style.display = "inline";

        id.innerText = error;
    }

}



const equalCheck = (check_1, check_2, id, error) => {
    if (check_1 !== check_2) {
        id.style.display = "inline";
        id.innerText = error;

    } else if (check_1 === check_2) {
        id.style.display = "none";
        id.innerText = "";

    }

}

function validate() {

    //storing data from form
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let inputPassword_1 = document.getElementById("inputPassword_1").value;
    let inputPassword_2 = document.getElementById("inputPassword_2").value;
    let address_1 = document.getElementById("address_1").value;
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let pincode = document.getElementById("pincode").value;

    //validating and displaying error message
    nullCheck(first_name, first_name_error, "Kindly enter First Name");
    nullCheck(last_name, last_name_error, "Kindly enter Last Name");
    nullCheck(username, username_error, "Kindly enter Username");
    nullCheck(email, email_error, "Kindly enter e-Mail address");
    nullCheck(inputPassword_1, inputPassword_1_error, "Kindly enter Password");
    nullCheck(inputPassword_2, inputPassword_2_error, "Kindly enter Re-Password");
    nullCheck(address_1, address_1_error, "Kindly enter Address");
    nullCheck(country, country_error, "Kindly select a Country");
    nullCheck(state, state_error, "Kindly select a State");
    nullCheck(pincode, pincode_error, "Kindly Enter a Pincode");




    //check for @ in email
    emailCheck(email, email_error, "Enter a valid e-Mail address with @ symbol");

    //password equality check
    equalCheck(inputPassword_1, inputPassword_2, inputPassword_1_error, "Password mismatch");



}