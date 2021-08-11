const APIKey = "Q4ETOpqTAHJVchpue9IojTrdG7pEvmzF";

//getting weather details
const getWeather = async(id)=>{

    const base =`http://dataservice.accuweather.com/currentconditions/v1/${id}`;

    const query = `?apikey=${APIKey}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];
}

//getting city details
const getCity = async(cityName)=>{
    
    const base ="http://dataservice.accuweather.com/locations/v1/cities/search";

    const query = `?apikey=${APIKey}&q=${cityName}`;

    const response = await fetch(base+query);
    const data = await response.json();
    
    return data[0];
};
