"use client";

import { useEffect, useState } from "react";
import ActivityProp from "./ActivityProp";
import actitvityService from "@/Services/ActivityService/activityService";


interface Activityinterface{
    id:Number,
    title:String,
    icon:String,
    description:String,
    price:String,
    image:String,
    catergory:String

}
export default function Activity(){
 const [activity,setActivity] = useState<Activityinterface[]>([]);

 useEffect(()=>{
    actitvityService().then((data)=>{
        setActivity(data.activities || []);
    }).catch((er)=>{console.log(er)});
 },[])

    return(
        <div id="packagesSection" className="my-8">
            <h2 id="hotelPackages" className=" text-center font-bold">Activities & Adventures</h2>
            <h3 className=" text-center font-light">Make your stay unforgettable with exciting experiences</h3>
        
            <section className="grid grid-cols-3 gap-6">
                        {activity.map((el)=>{
                            return(
                                <div key={el.id} id="packageCard" className="border-gray-300 border shadow-xl rounded-lg m-20">
                                <ActivityProp
                                        image={el.image}
                                        icon={el.icon}
                                        title={el.title}
                                        desctiption={el.description}
                                        price={el.price}
                                        
                                    />
                                    
                                </div>
                            
                            )
                        
                        })}
            </section>
        </div>
    )
}