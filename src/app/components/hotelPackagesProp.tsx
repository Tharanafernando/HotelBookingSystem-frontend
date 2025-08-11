import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";



export default function HotelPackagesProp(prop: {
    nights: ReactNode;
    days: ReactNode;
    location: ReactNode;
    price: ReactNode; 
    image: string | Blob | undefined; 
    name: string;
}){
    return(
        <div>
            <div>
                <div>
                    <img src={prop.image} alt="" id="packageImage" className="rounded-t-lg h-50"/>
                </div>
                
                <section className=" px-10 py-5">
                    <span className=" font-bold" id="packageListName">{prop.name}</span>
                    <div className=" flex">
                        <span>{prop.location}</span>
                        <div className=" ml-3">
                            <span className=" text-gray-500"> {prop.days} days</span>
                        <span className=" text-gray-500 ml-0.5">  {prop.nights} nights</span>
                        </div>
                        
                    </div>
                    
                    <span>{prop.price}</span>
                    <div>
                        <button className="bg-blue-500 rounded-2xl text-white cursor-pointer hover:bg-sky-700 transition-colors text-center align-items-stretch ml-50 pt-2 pb-3 px-3 h-10 mt-5">Book Now</button>

                    </div>
                    
 
                
                </section>
               
            </div>
            
        </div>
    )
}