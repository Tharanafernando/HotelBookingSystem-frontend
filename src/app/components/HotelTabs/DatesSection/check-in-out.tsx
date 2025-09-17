import RoomAvailability from "@/app/Models/RoomAvailabilty";
import checkInOutService from "@/Services/HotelTabService/checkInOutService"
import { Select } from "antd";
import { label } from "framer-motion/client";
import { useEffect, useState } from "react"


interface dates{
    
    "available_dates":string[],
    "max_guests":number
}

const { Option } = Select;

function CheckInOut(){
    
    const[selectedValue,setSelectedValue] = useState();
    const[selectedGuest,setSlectedGuest] = useState<number>(1);

    const [data,setData] = useState<RoomAvailability | null>();

    useEffect(()=>{
        checkInOutService().then((data)=>{
            // setCheckDates(data.available_dates);
            // setCheckOutDateList(data.available_dates);
            // setNoOfGuests(data.max_guests);

            setData(data);
            // setNoOfGuests(data.max_guests);
            
        })

    },[])

    
    const options = Array.from({length:data?.max_guests!},(_,i)=>({
         label:`${i+1}`,
         value: i+1
    
       
    }))

    const handleChange = (value:any)=>{
        setSelectedValue(value)
    }

    // const handleCheckOutDate = (value:any)=>{
    //     if(selectedValue != null){
    //         setCheckOutDateList(prev => prev.filter(item => item !== value))
    //     }
    // }

    return(
        <div style={{display:"flex"}}>
        <section id="dateSection" className="shadow-2xl m-20 rounded-2xl p-5">
            <h1 id="selectGuestTitle"  className=" mb-5 mx-5 font-bold text-xl">Select Dates & Guests</h1>
            <div style={{ display: "flex", gap: "5.5rem", marginLeft: "5rem" }}>
                <span>check-in</span>
                <span>check-out</span>
                <span>Guests</span>
            </div>
            <div style={{ display: "flex", gap: "1rem", marginLeft: "5rem" }}>
                <Select showSearch onChange={handleChange} placeholder="Check In Date" className=" px-3 py-1 rounded-xl ">
                    {data?.available_dates.map((el)=>(<Option key={el.id} value={el.id}>{el.date}</Option>))}
                   
                </Select>

                 <Select showSearch onChange={handleChange} placeholder="Check Out Date" className=" px-3 py-1 rounded-xl ">
                    {data?.available_dates.map((el)=>(
                        
                        <Option key={el.id} value={el.id}>
                            {el.date}
                        </Option>))}
                   
                </Select>

                 <Select
                   value={selectedGuest}
                   onChange={(value)=>{setSlectedGuest(value)}}
                   options={options}
                   style={{width:120}}
                 />

                 
            </div>
        </section>

        {/* <section id="paymentDetails">
            <h1>Payment Section</h1>
        </section> */}

        </div>
    )

}
export default CheckInOut