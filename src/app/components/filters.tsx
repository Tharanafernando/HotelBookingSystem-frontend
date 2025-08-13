"use client";
import countryListService from "@/Services/HotelPackageService/CountryListService";
import { Select } from "antd"
import { useEffect, useState } from "react"
const { Option } = Select
export default function Filters(){
    const [countryList,setCountryList] = useState([])
    useEffect(()=>{
        countryListService()
        .then((data)=>{
            setCountryList(data.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[])

   const handleChange = (value: any) =>{
     console.log(value)
   }
    return(
        <div className=" bg-white w-full my-5">
            <div>
                <span className=" ml-40">Destinations</span>
                <span className=" ml-64">check-in</span>
                <span className=" ml-60">check-out</span>
                <span className=" ml-64">Guests</span>
            </div>
            <div className=" ml-20 block mt-2">
                <Select showSearch onChange={handleChange} placeholder="Select Country" className=" ml-32 px-3 py-1 rounded-xl w-64">
                    {countryList.map((el)=>(<Option key={el.code} value={el.code}>{el.name}</Option>))}
                </Select>
                {/* <Select   id="" placeholder="Search Destination" className=" ml-36 px-3 py-1 rounded-xl border border-gray-400" /> */}
                <input type="date" name="" id="" placeholder="check-in" className=" ml-32 px-3 py-1 rounded-xl border border-gray-400" />
                <input type="date" name="" id="" placeholder="check-out" className=" ml-36 px-3 py-1 rounded-xl border border-gray-400" />
                <input type="number" name="" id="" placeholder="Guests" className=" ml-40 px-3 py-1 rounded-xl border border-gray-400" />
            </div>
            <button id="searchHotels" className="bg-blue-500 rounded-2xl text-white cursor-pointer hover:bg-sky-700 transition-colors text-center w-100 p-2">Search Hotels</button>
            
        </div>
    )
}