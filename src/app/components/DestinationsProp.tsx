import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function DestinationProps(props: { 
    image: string | Blob | undefined; 
    name: string ;
    availableHotels: string | number ; }){
    return(
         <div>
            <div>
                <div>
                    <img src={props.image} alt="" className="rounded-lg h-72 w-72 bg-cover brightness-50"/>
                    <section id="destinationDetails">
                        <span className="absolute font-bold text-white transform translate-x-5 -translate-y-14  
                            z-0 drop-shadow-2xl" >{props.name}</span>
                        
                        <span id="availableHotels" className="absolute text-white transform translate-x-5 -translate-y-8  
                            z-0 drop-shadow-2xl">{props.availableHotels} Hotels Available</span>
                    
                
                    </section>
                </div>
                
                
               
            </div>
            
        </div>
    )
}