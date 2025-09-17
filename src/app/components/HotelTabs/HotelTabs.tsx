"use client";
import hotelTabService from "@/Services/HotelTabService/hotelTabService";
import { Button, Divider, Layout, Tabs } from "antd";

import { useEffect, useState } from "react";
import RoomSection from "./RoomSection/RoomSection";
import CheckInOut from "./DatesSection/check-in-out";


interface Overview{
    title:String,
    description:String
}

interface Reviews{
    user:String,
    rating:number,
    comment:String

}


export default function HotelTabs(){
    const[hotelTabOverviewDetails,setHotelTabOverviewDetails] = useState<Overview[]>([]);
    const[hotelTabReviewDetails,setHotelTabReviewDetails] =  useState<Reviews[]>([]);
    const[hotelTabAmenitiesDetails,setHotelTabAmenitiesDetails] = useState<string[]>([]);


    useEffect(()=>{
        hotelTabService().then((data)=>{
             setHotelTabOverviewDetails(data.overview);
             setHotelTabAmenitiesDetails(data.amenities || []);
             setHotelTabReviewDetails(data.reviews || []);      
        }).catch((error)=>{
            console.log(error);
        })
    },[])

    

    // const paymentDetails = [
    //     {
    //         key:"room type",
    //         label:"Room Type",
            
    //     },
    //     {
    //         key:"dates",
    //         label:"Dates"
    //     },
    //     {
    //         key:"nights",
    //         label:"Nights"
    //     },
    //     {
    //         key:"guests",
    //         label:"Guests"
    //     },
    //     {
    //         key:"room rate",
    //         label:"Room Rate"
    //     },
    //     {
    //         key:"taxes",
    //         label:"Taxes & Fees"
    //     },

    // ]


    const item = [
                {
                    key: "overview",
                    label:"Overview",
                    children:(
                    <div >{hotelTabOverviewDetails.map((data,index)=>(
                        <div key={index}>
                            <h1 className=" font-bold text-xl">{data.title}</h1>
                            <p className="pt-6">{data.description}</p>
                        </div>
                        
                    ))}
                    </div>
                    )
                },
                {
                    key:"amenities",
                    label:"Amenities",
                    children:(
                        <ul>
                            {hotelTabAmenitiesDetails.map((amenities,index)=>(
                                <li key={index}>
                                    {amenities}
                                </li>
                            ))}
                        </ul>
                    )
                },
                {
                    key:"reviews",
                    label:"Reviews",
                    children:(
                        <div>
                            {hotelTabReviewDetails.map((data,index)=>(
                                <div key={index}>
                                    <strong>{data.user}</strong>{"⭐".repeat(data.rating)}
                                    <p>
                                        {data.comment}
                                    </p>

                                </div>
                            ))}
                        </div>
                    )
                }
            ]
    
    return(
        <div>
            <div>
                <div className="flex gap-20">
                    <div id="tabDetails" className="shadow-2xl m-20 rounded-2xl p-5">
                       <Tabs defaultActiveKey="overview" items={item}/>
                    </div>
                     <Layout id="PaymentSection" className=" rounded-2xl min-h-screen shadow-2xl mt-20 mx-10 p-10 ">
                        <h1 className=" font-bold text-xl">Booking Summary</h1>
                        <section className=" pt-5">
                        <h2 className=" mt-5">Room Type</h2>
                        <h2 className=" mt-4">Dates</h2>
                        <h2 className=" mt-4">Nights</h2>
                        <h2 className=" mt-4">Guests</h2>
                        <h2 className=" mt-4">Room Rate</h2>
                        <h2 className=" mt-4">Taxes & Fees</h2>
                        </section>
                        <Divider className=" mt-5"/>
                        <label className=" text-lg mb-5">Total : </label>
                        <Button style={{background:"#2563EB", color:"white", paddingTop:5, paddingBottom:5}} id="Proceed-Button">Proceed to Payment</Button>
                        
                        
                    </Layout>
                </div>
                

                <RoomSection/>
                <CheckInOut/>
            </div>
            
        </div>
        
       
    )
}