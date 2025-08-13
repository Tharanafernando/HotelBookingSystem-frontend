const destinationService = async()=>{
    const res = await fetch("http://localhost:5000/api/PopularDestinations",{
        method:"GET"
    })

    const response = await res.json();
    return response;
}

export default destinationService;