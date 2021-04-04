//Annotation with functions

const add =(a:number,b:number) : number =>{
      return (a+b); 
};

//It does not return any thing but it is mistake so thats  why we should always add return .
const subtract = (a:number , b :number)=>{
    a-b;
} 

function divide (a:number ,b :number ) :number {
    return a/b;
}

const multiply = function (a:number ; b:number):number {
    return a*b;
}

const logger = (message :string) :void =>{
    console.log(message)
}

//never for throw error 
const throwError = (message :string ):void =>{
    if (!message){
        throw new Error (message);
    }
}

//destructuring with annotations

const forecast ={
    date :new Date(),
    weather : 'sunny'
}

const logWeather = (forecast :{date :Date ;weather : String}) =>{
    console.log(forecast.date); 
    console.log(forecast.weather);
}

//ES6 Syntax

const logWeatherES6 = ({date,weather}:{date :Date ;weather : String}): void =>{
    console.log(date); 
    console.log(weather);
}

const profile = {
    name :'alex',
    age:20,
    coordinates :{
        lat :0,
        lng :15
    }, 
    setAge (age:number) :void {
        this.age =age;
    }
}

const {age} : {age :number} =profile ;

const {coordinates :{lat, lng}} : {coordinates : {lat :number ; lng :number}} =profile ;

