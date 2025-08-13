import { ReactNode } from "react";
import Link from "next/link"
export default function ActivityProp(prop:{ 
    title: String;
    desctiption: ReactNode;
    price: ReactNode; 
    image: string | Blob | undefined;
    icon:string;
    category: string;}){
    return(
        <div>
            <div>
                <div>
                    <img src={prop.image} alt="" id="packageImage" className="rounded-t-lg h-50"/>
                </div>
                
                <section className=" px-10 py-5">
                    <div className=" flex">
                        <span>{prop.icon}</span>
                        <span className=" font-bold" id="packageListName">{prop.title}</span>
                    </div>
                    
                    <div>
                        <span>{prop.desctiption}</span>
                        
                    </div>
                    
                    <span>{prop.price}</span>

                    <div>
                        {/* <button className="bg-blue-500 rounded-2xl text-white cursor-pointer hover:bg-sky-700 transition-colors text-center align-items-stretch ml-50 pt-2 pb-3 px-3 h-10 mt-5">Book Now</button> */}
                        <Link href="/LearnMore" className="ml-50 text-blue-500">Learn More</Link>

                    </div>
                    
 
                
                </section>
               
            </div>
            
        </div>
    )
}