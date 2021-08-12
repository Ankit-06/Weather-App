const APIKey = "fksfrOOC2NQOxxXbjRlL2fX2DIGnU9w6";

//getting weather details
const getWeather = async(id)=>{

    const base =`https://dataservice.accuweather.com/currentconditions/v1/${id}`;

    const query = `?apikey=${APIKey}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];
}

//getting city details
const getCity = async(cityName)=>{
    
    const base ="https://dataservice.accuweather.com/locations/v1/cities/search";

    const query = `?apikey=${APIKey}&q=${cityName}`;

    const response = await fetch(base+query);
    const data = await response.json();
    
    console.log(data);
    return data[0];
};
