const countryListService = async () =>{
    const res = await fetch("http://localhost:5000/api/CountriesFilter",{
        method:"GET"
    })

    const response = await res.json();
    return response;
}

export default countryListService