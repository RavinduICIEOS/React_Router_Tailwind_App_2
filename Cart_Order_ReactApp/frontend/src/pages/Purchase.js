
import Button from '../UI/Button';
import { currencyFormatter } from "../util/formatting";
import { useLocation, useNavigate } from 'react-router-dom';



function Purchase() {
       const navigate = useNavigate(); 
       const location = useLocation();
       const { shippingType, subtotal, total, items, cc, cp } = location.state || {};

       
  

    function handleCloseCart() {
        navigate('/merchandise');
      }

          return (    
            <div  className='relative top-60 left-40  font-josefin'>
                <h2 className="text-3xl mb-4">
                <span className="text-[50px] leading-[1.1]">Thank You for your</span> <br />
                <span className="text-[50px] text-skyblue leading-[1.5] "> purchase !</span> </h2>
                
                <p className="text-lg text-gray-900 mb-4 pt-2">Your order will be processed within 24 hours during working 
                    days. We will notify<br /> you by email once your order has been shipped.</p>

                <p className='text-[28px] pt-8'>Billing Address</p>
                {/* Embed Google Map below the Billing Address */}
            <div className="mt-6 mb-6">
                <iframe 
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093413!2d144.9537363153166!3d-37.81720997975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e4e2c05c5d0!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1615493621441!5m2!1sen!2sau"
                    width="652" 
                    height="269" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy">
                </iframe>
                <div className='mt-8 border border-gray-300 inline-block w-[653px] items-center p-4'>
                    <p>
                      <span className='mr-16'>Contact</span>
                      <span>rumandasenanayake@gmail.com</span>  </p>
                    <p className=' flex mt-2 mb-2'>
                        <span className=' mr-16'>Address</span>
                            <span>
                                <p>No:28,</p>   
                                <p>Mugalan Road,</p> 
                                <p>Nugegoda, Colombo</p></span></p>
                    <p>
                      <span className='mr-20'>Date</span>
                      <span> Estimated delivery, Oct 13</span>  </p>
                </div>
            </div>

      <div className=" flex justify-center mt-6">    
      <div className='border relative left-[250px] top-[-790px] p-3 pr-[27px] pl-6 border-gray-300  w-[508px] h-[606px] '>
        <span className='text-[28px]'>Your Order - No. 00283957 </span> 
        <div className='overflow-y-auto max-h-[296px] ' >
        <ul>
                {items.map(item => (
                    <li key={item.id} className=' mt-10'>
                      <div className='flex'>
                        
                      <img 
                            src={`http://localhost:3000/${item.image}`} // Use the image URL as needed
                            alt={item.name}
                            className="w-20 h-24 object-cover mr-4 felx " // Adjust width and height as needed
                        />
                        <div className='text-[14px]'>       
                          <h4 className='mr-[136px]'>{item.description}</h4>
                          <p className='text-[12px] mb-2 mt-2'>Color: {item.color}</p>
                          <p className='text-[12px] border-[1px] border-[#A2A3B1] inline-flex items-center w-[55px] h-[32px] pl-4 px-2 py-3  gap-[10px]'>x   {item.quantity}</p>
                        </div>

                          <p className='text-[14px] '  >{currencyFormatter.format(item.price)}</p>
                        </div>
                    </li>
                ))}
            </ul>
       </div>
                    
                    <div className="flex justify-between mb-[27px] mt-[53px] text-base">
                        <span>{cc}</span>
                        <span>{currencyFormatter.format(cp)}</span>
                    </div>
                    <div className="flex justify-between mb-[27px] text-[16px]">
                        <span>Shipping</span>
                        <span>{shippingType}</span>
                    </div>
                    <div className="flex justify-between mb-[27px] text-base">
                        <span>Subtotal</span>
                        <span>{currencyFormatter.format(subtotal)}</span>
                    </div>
                    <div className="flex justify-between mb-[27px] text-[20px]">
                        <span>Total</span>
                        <span>{currencyFormatter.format(total)}</span>
                    </div>
                 </div>   
                 <Button className="relative top-[-420px] left-[-125px] border-none  inline-block text-[20px]  "
                        textOnly onClick={handleCloseCart}>
                    ⬅ Continue Shopping
                 </Button> 
            </div>
        </div> 
        );
    }

export default Purchase;