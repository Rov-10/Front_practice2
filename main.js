import searchPeople from "./search.js";
import people from "./list.js";

const CYEAR = 2023
let name = "illya"
let bYear = 2023 
let personInfo = (name , bYear=2023)=>{
    if(bYear==2023){return `Я ${name}`}
    else{return `Я ${name}, мені ${CYEAR-bYear} років`} }
console.log(personInfo(name, bYear))


  searchPeople(people, 'name', 'Nina')
    .then(result => {console.log("Результати пошуку:", result); return result})
    .then(result => result.forEach(element => {
        console.log(element.greeting(), element.getInfo('gender'))}))
    .catch(error => console.error("Помилка:", error));
    searchPeople(people, 'age', 45)
    .then(result => {console.log("Результати пошуку:", result); return result})
    .then(result => result.forEach(element => {
        console.log(element.greeting(), element.getInfo('gender'))}))
    .catch(error => console.error("Помилка:", error));
    searchPeople(people, 'weight', 45)
    .then(result => {console.log("Результати пошуку:", result); return result})
    .then(result => result.forEach(element => {
        console.log(element.greeting(), element.getInfo('gender'))}))
    .catch(error => console.error("Помилка:", error));
    searchPeople(people, 'name', 'Bob')
    .then(result => {console.log("Результати пошуку:", result); return result})
    .then(result => result.forEach(element => {
        console.log(element.greeting(), element.getInfo('gender'))}))
    .catch(error => console.error("Помилка:", error));
    searchPeople(people, 'age', 2)
    .then(result => {console.log("Результати пошуку:", result); return result})
    .then(result => result.forEach(element => {
        console.log(element.greeting(), element.getInfo('gender'))}))
    .catch(error => console.error("Помилка:", error));