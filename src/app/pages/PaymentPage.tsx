'use client'
import { Table } from "antd";
import { useState } from "react";
export default function PaymentPage(){
    const [monthYear,setMonthYear] = useState();
    const handleChange = (e:any) =>{
        let input = e.target.value.replace(/\D/g,"")
        if(input.length >= 4){
            input = input.slice(1,2)+"/"+input.slice(3,4);
        }
        setMonthYear(input)
        

    }
    const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];


    return(
        <>
        <div className=" mb-20 flex ">
        <section className=" border border-gray-300 rounded-xl min-h-screen w-2xl bg-white mt-20 ml-20 mr-32">
            <h2 id="paymentCompleteText" className=" pt-3 text-xl ml-8">Complete Your Payment</h2>
            <h4 id="securePaymentText" className="text-xs pt-1 text-gray-500 font-extralight ml-8">Secure your reservation with our trusted payment partners</h4>
            <div>
                <h3 id="paymentMethod" className=" pt-5 text-xl ml-8">Payment Method</h3>
                <section className=" flex m-6">
                    <button className=" border border-gray-300 rounded-xl h-10 w-75 cursor-pointer hover:bg-sky-50 hover:border-blue-900 hover:border-2 transition-colors"> 
                        <div className=" flex ">
                         <img src="/PaymentPage/image.png" alt="paypal icon" className="h-5 w-5 my-2 ml-3" /> 
                         <span className="mx-5 my-2 ">PayPal</span>
                         </div> 
                    </button>
                    <button className=" ml-20 border border-gray-300 rounded-xl h-10 w-75  cursor-pointer hover:bg-sky-50 hover:border-blue-900 hover:border-2 transition-colors"> 
                       <div className=" flex ">
                         <img src="/PaymentPage/visa.png" alt="paypal icon" className="h-5 w-5 my-2 ml-5" /> 
                         <img src="/PaymentPage/mastercard.png" alt="paypal icon" className="h-5 w-5 my-2 ml-3" /> 
                         <span className="mx-5 my-2 ">Visa/Mastercard</span>
                    </div> 
                    </button>
                    
                    
                </section>
                <section>
                    <h3 id="cardNumber">Card Number</h3>
                    <input type="text" placeholder="Card number" className="w-xl h-10 mt-3 ml-5 border border-gray-300 pl-3 rounded-lg" />
                </section> 

                <section className=" ml-5">
                     <div className=" flex mt-2">
                        <h3 >Expiary Date</h3>
                        <h3 id="cvv">CVV</h3>
                    </div>

                    <div className=" flex mt-3">
                        <input type="text" placeholder="MM/YY" value={monthYear} onChange={handleChange} className="w-75 h-10 border border-gray-300 pl-3 rounded-lg" />
                        <input type="text" placeholder="cvv"  className="w-75 h-10 border border-gray-300 pl-3 rounded-lg ml-5" maxLength={3} />
                    </div>
                </section>
                <section>
                    <h3 id="cardNumber" className=" mt-5">Card Holder's Name</h3>
                    <input type="text" placeholder="Card holder's name" className="w-xl h-10 mt-3 ml-5 border border-gray-300 pl-3 rounded-lg" />
                </section>
            </div>

            <div className=" my-20">
                <h3 id="paymentMethod" className=" pt-5 text-xl m-5">Billing Address</h3>
                 <section className=" ml-5">
                     <div className=" flex mt-2">
                        <h3>First Name</h3>
                        <h3 id="cvv">Last Name</h3>
                    </div>

                    <div className=" flex mt-3">
                        <input type="text" placeholder="First Name" className="w-75 h-10 border border-gray-300 pl-3 rounded-lg" />
                        <input type="text" placeholder="Last Name"  className="w-75 h-10 border border-gray-300 pl-3 rounded-lg ml-5"/>
                    </div>
                    <div className="mt-5">
                        <h3>Email Address</h3>
                        <input type="text" placeholder="Email Address" className="w-xl h-10 mt-3 border border-gray-300 pl-3 rounded-lg" />
                    </div>
                     <div className="mt-5">
                        <h3>Address</h3>
                        <input type="text" placeholder="Email Address" className="w-xl h-10 mt-3 border border-gray-300 pl-3 rounded-lg" />
                    </div>

                    <div className=" flex mt-5">
                        <h3>City</h3>
                        <h3 id="zip">Zip Code</h3>
                    </div>

                    <div className=" flex mt-3">
                        <input type="text" placeholder="City" className="w-75 h-10 border border-gray-300 pl-3 rounded-lg" />
                        <input type="text" placeholder="Zip Code"  className="w-75 h-10 border border-gray-300 pl-3 rounded-lg ml-5"/>
                    </div>
                </section>
            </div>

         </section>
         <section className=" border border-gray-300 w-xl h-1/3 mt-20 mr-5">
            {/* <Table dataSource={dataSource} columns={columns} />; */}
          

         </section>
        </div>
       
        </>
       
    )
}

