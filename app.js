const output = document.querySelector("#output");
const btnGenerate = document.querySelector("#btnGenerate");

btnGenerate.addEventListener("click", () => {
    let password = "";
    let randomPassword = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%*_~?".split("");
    let passwordLength = 12;
    for (let i = 0; i < passwordLength; i++) {
        password += randomPassword[Math.floor(Math.random() * randomPassword.length )]
    }
    output.innerHTML = password;
})