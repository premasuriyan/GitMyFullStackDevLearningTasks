var apiURL = "https://restcountries.com/v3.1/all";
var request = new XMLHttpRequest();
request.open("GET",apiURL,true);
request.onreadystatechange = handleRequestStateChange;
request.send(null);
console.clear();
var responseData;
function handleRequestStateChange()
{
    if(request.readyState == 4 && request.status==200){      
        responseData = JSON.parse(this.response); 
        getAllCountriesOfAsiaContinent();
        getAllCountriesLessThan2LakhsPopulation();
        getNameCapitalFlag();
        getTotalPopulation();
        getUnitedStatesDollarCurrencyCountries();
    }
}

function getAllCountriesOfAsiaContinent(){    
    var asianCountries = responseData.filter((element)=>{return (element["region"]=="Asia")});
    //console.log(asianCountries);
    let count = 0;
    asianCountries.forEach((element,index) => {
        count = count+1;
        console.log(`${count}. Country Name:${element.name.common}`);
    });
    
}
function getAllCountriesLessThan2LakhsPopulation(){    
    var allCountries = responseData.filter((element)=>{return (Number(element["population"])<200000)});
    //console.log(asianCountries);
    let count = 0;
    allCountries.forEach((element,index) => {
        count = count+1;
        console.log(`${count}. Country Name:${element.name.common} Population:${element.population}`);
    });
    
}
function getNameCapitalFlag(){    
   responseData.filter((element)=>{return (Number(element["population"])<200000)});
    //console.log(asianCountries);
    let count = 0;
    responseData.forEach((element,index) => {
        count = count+1;
        console.log(`${count}. Country Name:${element.name.common} Capital:${element.capital} Flag:${element.flag}`);
    });    
}
function getTotalPopulation(){
    let population=0; 
    var arrayPopulation = responseData.map((element)=>{return (Number(element["population"])+0)});    
    let totalPopulation = arrayPopulation.reduce((fv,nv)=> {return fv+nv});
    console.log(`Total Population: ${totalPopulation}`);
}


function getUnitedStatesDollarCurrencyCountries(){    
    var usdUsedCountries=responseData.filter((e)=>e.currencies).filter((e)=>{
        return(e.currencies.USD)} ) 
    let count = 0;
    usdUsedCountries.forEach((element,index) => {
        count = count+1;
        console.log(`${count}. Country Name:${element.name.common}     Currency:${element.currencies.USD.name}`);
    });
}
