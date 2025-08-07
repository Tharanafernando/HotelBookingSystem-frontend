export default function Filters(){
    return(
        <div className=" bg-white w-full my-5">
            <div>
                <span className=" ml-40">Destinations</span>
                <span className=" ml-64">check-in</span>
                <span className=" ml-60">check-out</span>
                <span className=" ml-64">Guests</span>
            </div>
            <div className=" ml-5 block mt-2">
                <input type="text" name="" id="" placeholder="Search Destination" className=" ml-36 px-3 py-1 rounded-xl border border-gray-400" />
                <input type="date" name="" id="" placeholder="check-in" className=" ml-32 px-3 py-1 rounded-xl border border-gray-400" />
                <input type="date" name="" id="" placeholder="check-out" className=" ml-36 px-3 py-1 rounded-xl border border-gray-400" />
                <input type="number" name="" id="" placeholder="Guests" className=" ml-40 px-3 py-1 rounded-xl border border-gray-400" />
            </div>
            <button id="searchHotels" className="bg-blue-500 rounded-2xl text-white cursor-pointer hover:bg-sky-700 transition-colors text-center w-100 p-2">Search Hotels</button>
            
        </div>
    )
}