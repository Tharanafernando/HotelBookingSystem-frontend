const roomServiceSection = async()=>{
    const res = await fetch("http://localhost:5000/api/hotel/rooms",{
        method:"GET"
    })

    const response = await res.json();
    return response;
}

export default roomServiceSection;