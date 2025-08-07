import Filters from "../components/filters"
import HotelPackages from "../components/hotelPackages"
import Navigation from "../components/navigation"
export default function HomePage(){
    return(
        <>
        <div className=" relative w-full mb-24">
            <Navigation/>
            
            <img src="/homepage/image1.jpg" alt="A description of image1" width="100%" className=" object-cover" />
            <h1 id="discovertext" className="absolute text-white transform translate-x-40 -translate-y-96  
                            text-5xl  z-0 drop-shadow-2xl">
               Discover Your Perfect Stay
            </h1>
            <h3 id="findText" className="absolute text-white transform translate-x-44 -translate-y-80  
                            text-xl  z-0 drop-shadow-2xl">
                Find amazing hotels, resorts, and unique experiences worldwide
            </h3>
            <section>
                <Filters/>
            </section>
           
            
            
            
        </div>
         <section>
                <HotelPackages/>
            </section>
        </>

        
        
    )
}