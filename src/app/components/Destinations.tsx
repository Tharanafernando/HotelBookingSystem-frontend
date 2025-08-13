"use client";
import destinationService from "@/Services/PopularDestinationsService/DestinationService";
import { useEffect, useState } from "react";
import DestinationProps from "./DestinationsProp";

interface Locations {
    id:Number,
    image:String,
    name:String,
    availableHotels:Number

}
export default function Destinations(){
    const [locations,setIsLocations] = useState<Locations[]>([]);
    useEffect(()=>{
        destinationService().then((data)=>{
            setIsLocations(data.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    return(
        <div id="packagesSection" className="my-8">
                    <h2 id="hotelPackages" className=" text-center font-bold">Popular Destinations</h2>
                    <h3 className=" text-center font-light">Explore the world's most sought-after locations</h3>
        
                    <section className="grid grid-cols-4 mx-10">
                        {locations.map((el)=>{
                            return(
                                <div key={el.id} className="border-gray-300 border h-72 w-72 shadow-xl rounded-lg m-20">
                                   <DestinationProps
                                        image={el.image}
                                        name={el.name}
                                        availableHotels = {el.availableHotels}
                                    />
                                    
                                </div>
                               
                            )
                          
                        })}
                    </section>
                </div>
    )
}