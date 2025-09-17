import ExternalAPI from "@/API_URLS";

const hotelTabService = async () => {
    const res = await fetch(ExternalAPI.RESPONSE_HOTEL_DETAILS,{
        method:"GET"
    })

    const response = await res.json();
    return response;
}

export default hotelTabService;