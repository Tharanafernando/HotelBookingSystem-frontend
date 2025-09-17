import { ReactNode } from "react";
import { Input } from "antd";
import Typography from 'antd/es/typography';

const { Text } = Typography;
export default function RoomSectionProp(roomDetailsProp: {
    price_per_night: ReactNode;
    description: ReactNode; 
    image: string | Blob | undefined; 
    name: string
})

{
    return(
        
        
        <section id="roomDetailsPropStyle" className=" flex border border-gray-400 rounded p-5 my-10">
            <img src={roomDetailsProp.image} alt="Room Type Image" height={128} width={225}/>
            <div className=" pl-10">
                <h1 className=" font-bold text-xl">{roomDetailsProp.name}</h1>
                <div className=" flex pt-5" >
                    <h2>
                       {roomDetailsProp.description}
                    </h2>
                    <Text className="pl-5">{`$${roomDetailsProp.price_per_night}`}</Text>
                   
                    
                </div>
                <button className="bg-blue-500 rounded-2xl text-white cursor-pointer hover:bg-sky-700 transition-colors text-center align-items-stretch ml-50  h-10 pt-2 pb-3 px-3 mt-5 translate-x-44 -translate-y-5">Select Room</button>
               
            </div>
            {/* <img src="/icons/guests.png" alt="" height={2} width={30} className=" -translate-x-100 translate-y-5" /> */}

            

        </section>

        
        
    )

}