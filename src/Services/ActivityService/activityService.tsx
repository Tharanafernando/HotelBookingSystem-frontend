const actitvityService = async()=>{
    const res = await fetch("http://localhost:5000/api/activities",{
        method:"GET"
    })
    const response = await res.json();
    return response;
}

export default actitvityService;