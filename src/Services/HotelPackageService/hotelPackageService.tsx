const packagesList = async()=>{
    const response = await fetch("http://localhost:5000/api/hotelPackages",{
        method : "GET"
    })
    const res = await response.json()
    return res;
}

export default packagesList;