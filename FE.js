function validation() {
    var username = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    // var agree = document.getElementById('agree');

    var usercheck = /^[A-Za-z. ]{3,30}$/;
    var usercheck2 = /^[A-Za-z. ]{3,30}$/;
    var usercheck9 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var usercheck10 = /^\S[0-9]{0,3}$/;

    if (usercheck.test(username)) {
        document.getElementById('usererror').innerHTML = " ";
    } else {
        document.getElementById('usererror').innerHTML = " **Firstname is Invalid ";

        return false;
    }

    if (usercheck2.test(lname)) {
        document.getElementById('lnameerror').innerHTML = " ";
    } else {
        document.getElementById('lnameerror').innerHTML = " **Lastname is Invalid ";

        return false;
    }
    if (usercheck9.test(email)) {
        document.getElementById('emailerror').innerHTML = " ";
    } else {
        document.getElementById('emailerror').innerHTML = " ** Please enter a valid Email id ";

        return false;
    }
    if (usercheck10.test(age)) {
        document.getElementById('ageerror').innerHTML = " ";
    } else {
        document.getElementById('ageerror').innerHTML = " ** Please enter a valid age ";

        return false;

    }

}
function Activeer(agree) {
    var elements = document.querySelectorAll(".checkboxes");
    if (agree.checked) for (var i = 0; i < elements.length; i++) {
        agree[index].removeAttribute("disabl‌​ed");
    }
}

function Enableddl(terms) {
    var toi = document.getElementById("title");
    toi.disabled = terms.checked ? false : true;
    if (!toi.disabled) {
        toi.focus();
    }

}
function Enable(tue) {
    var task = document.getElementById("tuetry");
    task.disabled = tue.checked ? false : true;
    if (!task.disabled) {
        task.focus();
    }

}
function E(wed) {
    var task1 = document.getElementById("wedtry");
    task1.disabled = wed.checked ? false : true;
    if (!task1.disabled) {
        task1.focus();
    }

}
function ok(thurs) {
    var task2 = document.getElementById("thurstry");
    task2.disabled = thurs.checked ? false : true;
    if (!task2.disabled) {
        task2.focus();
    }

}
function well(fri) {
    var task3 = document.getElementById("fritry");
    task3.disabled = fri.checked ? false : true;
    if (!task3.disabled) {
        task3.focus();
    }

}
function welltry(sat) {
    var task4 = document.getElementById("sattry");
    task4.disabled = sat.checked ? false : true;
    if (!task4.disabled) {
        task4.focus();
    }

}
function Enabled(harsh) {
    var toin = document.getElementById("raj");
    toin.disabled = harsh.checked ? false : true;
    if (!toin.disabled) {
        toin.focus();
    }

}





