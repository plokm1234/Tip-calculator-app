let bill
let numberOfPeople
let tipPercent = 0

document.getElementsByClassName("form")[0].addEventListener("click", e => e.preventDefault())

document.getElementsByClassName("bill")[0].addEventListener("change", () => {
    bill = document.getElementsByClassName("bill")[0].value
    document.getElementsByClassName("dollar")[0].textContent = (bill * tipPercent / numberOfPeople).toFixed(2)
    if(tipPercent)document.getElementsByClassName("dollar")[1].textContent = (bill / numberOfPeople + bill * tipPercent / numberOfPeople).toFixed(2)
})
document.getElementsByClassName("numberOfPeople")[0].addEventListener("change", () => {
    numberOfPeople = document.getElementsByClassName("numberOfPeople")[0].value
    document.getElementsByClassName("dollar")[0].textContent = (bill * tipPercent / numberOfPeople).toFixed(2)
    if(tipPercent)document.getElementsByClassName("dollar")[1].textContent = (bill / numberOfPeople + bill * tipPercent / numberOfPeople).toFixed(2)
})

document.getElementById("1").addEventListener("click", (e) => {
    resetBtn()
    document.getElementById("1").classList.add("clicked")
    tipPercent = document.getElementById("1").value
    document.getElementsByClassName("dollar")[0].textContent = (bill * tipPercent / numberOfPeople).toFixed(2)
    if(tipPercent)document.getElementsByClassName("dollar")[1].textContent = (bill / numberOfPeople + bill * tipPercent / numberOfPeople).toFixed(2)
})
document.getElementById("2").addEventListener("click", (e) => {
    resetBtn()
    document.getElementById("2").classList.add("clicked")
    tipPercent = document.getElementById("2").value
    document.getElementsByClassName("dollar")[0].textContent = (bill * tipPercent / numberOfPeople).toFixed(2)
    if(tipPercent)document.getElementsByClassName("dollar")[1].textContent = (bill / numberOfPeople + bill * tipPercent / numberOfPeople).toFixed(2)
})
document.getElementById("3").addEventListener("click", (e) => {
    resetBtn()
    document.getElementById("3").classList.add("clicked")
    tipPercent = document.getElementById("3").value
    document.getElementsByClassName("dollar")[0].textContent = (bill * tipPercent / numberOfPeople).toFixed(2)
    if(tipPercent)document.getElementsByClassName("dollar")[1].textContent = (bill / numberOfPeople + bill * tipPercent / numberOfPeople).toFixed(2)
})
document.getElementById("4").addEventListener("click", (e) => {
    resetBtn()
    document.getElementById("4").classList.add("clicked")
    tipPercent = document.getElementById("4").value
    document.getElementsByClassName("dollar")[0].textContent = (bill * tipPercent / numberOfPeople).toFixed(2)
    if(tipPercent)document.getElementsByClassName("dollar")[1].textContent = (bill / numberOfPeople + bill * tipPercent / numberOfPeople).toFixed(2)
})
document.getElementById("5").addEventListener("click", (e) => {
    resetBtn()
    document.getElementById("5").classList.add("clicked")
    tipPercent = document.getElementById("5").value
    document.getElementsByClassName("dollar")[0].textContent = (bill * tipPercent / numberOfPeople).toFixed(2)
    if(tipPercent)document.getElementsByClassName("dollar")[1].textContent = (bill / numberOfPeople + bill * tipPercent / numberOfPeople).toFixed(2)
})
document.getElementById("6").addEventListener("change", (e) => {
    resetBtn()
    document.getElementById("6").classList.add("clicked")
    tipPercent = document.getElementById("6").value / 100
    document.getElementsByClassName("dollar")[0].textContent = (bill * tipPercent / numberOfPeople).toFixed(2)
    if(tipPercent)document.getElementsByClassName("dollar")[1].textContent = (bill / numberOfPeople + bill * tipPercent / numberOfPeople).toFixed(2)
})

const resetBtn = () => {
    document.getElementById("1").classList.remove("clicked")
    document.getElementById("2").classList.remove("clicked")
    document.getElementById("3").classList.remove("clicked")
    document.getElementById("4").classList.remove("clicked")
    document.getElementById("5").classList.remove("clicked")
    document.getElementById("6").classList.remove("clicked")
}

document.getElementsByClassName("reset")[0].addEventListener("click", (e) => {

    document.getElementsByClassName("bill")[0].value = 0
    document.getElementsByClassName("numberOfPeople")[0].value = 0
    document.getElementsByClassName("dollar")[0].textContent = 0
    document.getElementsByClassName("dollar")[1].textContent = 0
    resetBtn()
})

