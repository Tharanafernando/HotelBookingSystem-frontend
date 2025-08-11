"use client";
import { div } from "framer-motion/client"
import HotelPackagesProp from "./hotelPackagesProp"
import { useEffect, useState } from "react"
import packagesList from "@/Services/HotelPackageService/hotelPackageService"

export default function HotelPackages(){
    // const packages = [
    //     {
    //         "id": 1,
    //         "name": "Ocean Paradise Resort",
    //         "price": "$800",
    //         "location": "Maldivs",
    //         "days": 5,
    //         "nights": 4,
    //         "image": "http://localhost:3000/hotelPackages/ocean paradise resort.jpg"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Alpine Luxury Lodge",
    //         "price": "$649",
    //         "location": "Switzerland",
    //         "days": 5,
    //         "nights": 4,
    //         "image": "http://localhost:3000/hotelPackages/alpine lodge.jpg"
    //     },
    //     {
    //         "id": 3,
    //         "name": "Metropolitan Grand",
    //         "price": "$299",
    //         "location": "New York",
    //         "days": 5,
    //         "nights": 4,
    //         "image": "http://localhost:3000/hotelPackages/metropolitan-palace.jpg"
    //     }
    // ]

    const [packageList,setPackageList] = useState([])

    useEffect(()=>{
        packagesList()
        .then((data)=>{
            setPackageList(data.data);
        }).catch((error)=>{
            console.log(error)
        })
        
    },[])
    return(
        <div id="packagesSection" className="my-8">
            <h2 id="hotelPackages" className=" text-center font-bold">Featured Hotel Packages</h2>
            <h3 className=" text-center font-light">Exclusive deals from our partner hotels</h3>

            <section className="grid grid-cols-3 gap-6">
                {packageList.map((el)=>{
                    return(
                        <div key={el.id} id="packageCard" className="border-gray-300 border shadow-xl rounded-lg m-20">
                           <HotelPackagesProp
                                image={el.image}
                                name={el.name}
                                price={el.price}
                                location={el.location}
                                days={el.days}
                                nights={el.nights}
                            />
                            
                        </div>
                       
                    )
                  
                })}
            </section>
        </div>
    )
}