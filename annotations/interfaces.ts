//Defining an interface

interface Reportable{
    // name: string,
    // year :number,
    // broken :boolean,
    summary () : string,

}



const oldCivic ={
    name:'civic',
    year: 2000,
    broken : true,
    summary(): string {
        return 'This is summary'
    }
};

const drink ={
    color:'brown',
    brand: 'Pepsi',
    sugar : 20,
    summary(): string {
        return 'This is grams of sugar'
    }
};


const printSummary =(vehicle:Reportable) : void=>{
      console.log(vehicle.summary());
    //   console.log(`Year old is ${vehicle.year}`)   
    //   console.log(`Is working  ${vehicle.broken}`)   
}




printVehicle(oldCivic)