
let enterAge = document.getElementById("enterAge");
let res = document.getElementById("res");
let myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function () {

    let birthday = enterAge.value;

    if (birthday == "") {
        alert("Please enter your date of birth");
    }
    else {
        birthday = new Date(birthday);

        let current = new Date();

        let age = current.getFullYear() - birthday.getFullYear();

        let month = current.getMonth() - birthday.getMonth();

        let day = current.getDate() - birthday.getDate();

        if (month < 0 || (month == 0 && day < 0)) {
            age--;
        }

        res.textContent = "Your age is: " + age;

        console.log(age);
    }

});
