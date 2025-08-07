import Link from "next/link"
import HomePage from "../pages/HomePage"
export default function Navigation(){
    return(
        <nav className=" inline-flex mt-5 mb-5 w-full">
            <h2 className="ml-12 text-xl font-bold">Book Stay</h2>
            <ul className=" list-none inline-flex ml-24">
                <Link href="/HomePage" className="ml-10 hover:underline hover:underline-offset-8 hover:decoration-gray-500 transition-all duration-200">Home</Link>
                <li className="ml-10">Hotels</li>
                <li className="ml-10">Destinations</li>
                <li className="ml-10">Offers</li>
                <li className="ml-10">Activities</li>
                
            </ul>
            <button style={{marginLeft:"40rem"}}  className="bg-blue-500 rounded-2xl text-white cursor-pointer hover:bg-sky-700 transition-colors  p-1 w-25">Signup</button>
           
        </nav>
    )
}

