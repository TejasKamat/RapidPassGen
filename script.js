const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];

const special = ["@", "#", "$", "%", "&",]

const funnyArr = ["password", "incorrect", "hacker", "yourname", "correct", "betterluck", "funnyPassword"]


class PassGenerator {
    weak() {
        for (let i = 0; i < 8; i++) {
            if (weakPass.length >= 8) {
                break
            }
            console.log("less then 9")
            weakPass += lower[Math.floor(Math.random() * lower.length)];
            if (weakPass.length >= 8) {
                break
            }
            weakPass += upper[Math.floor(Math.random() * upper.length)];
            if (weakPass.length >= 8) {
                break
            }
            weakPass += num[Math.floor(Math.random() * num.length)];
        }
        return weakPass;
    }
    strong() {
        for (let i = 0; i <= 16; i++) {
            if (strongPass.length >= 16) {
                break;
            }
            strongPass += lower[Math.floor(Math.random() * lower.length)]
            if (strongPass.length >= 16) {
                break;
            }
            strongPass += upper[Math.floor(Math.random() * upper.length)]
            if (strongPass.length >= 16) {
                break;
            }
            strongPass += num[Math.floor(Math.random() * num.length)]
        }
        return strongPass

    }
    super() {
        for (let i = 0; i <= 16; i++) {
            if (superPass.length >= 16) {
                break;
            }
            superPass += lower[Math.floor(Math.random() * lower.length)]
            if (superPass.length >= 16) {
                break;
            }
            superPass += upper[Math.floor(Math.random() * upper.length)]
            if (superPass.length >= 16) {
                break;
            }
            superPass += num[Math.floor(Math.random() * num.length)]
            if (i % 2 == 0) {
                superPass += special[Math.floor(Math.random() * special.length)]
            }
        }
        return superPass
    }
    funny() {
        funnyPass = funnyArr[Math.floor(Math.random() * funnyArr.length)]
        return funnyPass
    }
}

let selectedValue = "";
const radioButtons = document.querySelectorAll('input[name="vbtn-radio"]');
let copyText = ""
radioButtons.forEach(radio => {
    radio.addEventListener('click', (event) => {
        selectedValue = event.target.value;
    });
});
innerpass = document.getElementById("innerpass")
genPass = new PassGenerator()
gen.addEventListener("click", () => {
    weakPass = strongPass = superPass = funnyPass = "";

    if (selectedValue == "weak") {
        innerpass.innerHTML = copyText = genPass.weak()
    } else if (selectedValue == "strong") {
        innerpass.innerHTML = copyText = genPass.strong()
    } else if (selectedValue == "super") {

        innerpass.innerHTML = copyText = genPass.super()
    } else if (selectedValue == "funny") {
        innerpass.innerHTML = copyText = genPass.funny()
    } else {
        innerpass.innerHTML = `Error: Please select desired password type`
    }
})

const copyToClipboard = () => {
    navigator.clipboard.writeText(copyText).then(() => {
        let message = document.getElementById("message");
        message.classList.remove("hidden")
        message.textContent = "Copied: " + copyText;
        setTimeout(() => {
            message.classList.add("hidden")
        }, 1500);
    });
}
