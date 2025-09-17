import ExternalAPI from "@/API_URLS";
import RoomAvailability from "@/app/Models/RoomAvailabilty";

const checkInOutService = async(): Promise<RoomAvailability>=>{
    const res = await fetch(ExternalAPI.RESPONSE_ROOM_AVAILABILTY,{
        method:"GET"
    })
    

    if(!res.ok) throw new Error(`Error: ${res.status}`)
    

    const response = await res.json();
    return response;
}

export default checkInOutService;

