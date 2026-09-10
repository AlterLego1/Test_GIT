const arr1 = [
    {id: 1, name: "Кинаман", status: "Дод"},
    {id: 2, name: "Кулхард", status: "Дод"},
    {id: 3, name: "Шляпник", status: "Дод"},
    {id: 4, name: "Пыч", status: "Черван"},
    {id: 5, name: "Дундяев", status: "Черван"}
];
const arr2 = ["Нил", "Кроп", "Пиксель"];
const arr3 = ["Жолонбиков", "КинБейс", "Пыч"];
const arr4 = [55, 12, 24, 1];


const array = arr4.reduce((res, val) => res + val, 0);

const allRetro = arr1.reduce((res, person) => {
    if(person.status in res){
         res[person.status]++;
    }
    else{
        res[person.status] = 1;
    }
    return res;
},{})

console.log(allRetro);