const carMakers : string []= ['ford' ,'tesla','toyota'];

const dates = [new Date(), new Date()]

const carsByMake : string [] [] =[
    ['f150'] , ['corolla'], ['tesla111'] ,
]

//Help with inference when extracting values

const cars = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatable values

carMakers.push('100')

//Help with map
carMakers.map((car:string): string=>{
      return car.toUpperCase();
})

//Flexible types

const importantDates :(Date |string)[]=[ new Date(), '2030-10-10'];
