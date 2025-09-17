import { Layout } from "antd";
import { useEffect, useState } from "react";
import RoomSectionProp from "./RoomSectionProp";
import { data, div } from "framer-motion/client";
import roomServiceSection from "@/Services/HotelTabService/roomDetailsService";
import { error } from "console";

export interface Room{
    
    "id": number,
    "name": string,
    "description": string,
    "price_per_night": number,
    "max_guests": number,
    "image": string
  
}





function RoomSection(){
    const[passRoomDetails,setPassRoomDetails] = useState<Room[]>([])
    useEffect(()=>{
        roomServiceSection().then((data)=>{
            setPassRoomDetails(data);
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    
    return(
        <Layout id="roomDetails" className=" rounded-2xl min-h-screen w-2xl shadow-2xl m-20 ">
                <h2 className=" font-bold text-xl mt-5 ml-5">Choose Your Room</h2>
                <div className=" grid-rows-3 gap-3 my-10 mx-5">
                    {passRoomDetails.map((data)=>(
                       <RoomSectionProp
                         image = {data.image}
                         name = {data.name}
                         description = {data.description}
                         price_per_night = {data.price_per_night}

                       />
                    ))}
                   
                </div>
                
                
        </Layout>
    )
}


export default RoomSection;