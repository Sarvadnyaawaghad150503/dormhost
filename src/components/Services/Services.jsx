// import React from 'react'

// const Services = () => {
//   return (
   
// {/*        
//     <h1><strong><u>OUR SERVICES</u></strong></h1>
//     <div>
//       <i class="fa-solid fa-hotel fa-3x"></i>
//       <h3>Rent/Sell Flats</h3>
//       <p>Explore a wide range of rental apartments on our platform.Simplify your property search today. </p>
//     </div>
//     <div>
//       <i class="fa-solid fa-utensils fa-3x"></i>
//       
//       <p></p>
//     </div>
//     <div >
//       <i></i>
      
//       <h3></h3>
//       <p>Connect with like-minded individuals in need of roommates and secure a harmonious living arrangement</p>
//     </div> */}
// <div>
// <div class="card">
//   <div class="bg"></div>
//   <div class="blob"></div>
// </div>

// </div>
    
//   )
// }

// export default Services
import React from 'react'
import './services.css'
import {RiHotelLine} from 'react-icons/ri'
import {FaUtensils} from 'react-icons/fa'
import {ImUsers} from 'react-icons/im'

const Services = () => {
  return (
    <div >
        <h2>OUR SERVICES</h2>
        <div className='flexy'>
        <div class="card"> 
        <div class="bg"><h3>Rent/Sell Flats</h3>
        <RiHotelLine className='logo'/>
         <h5> Explore a wide range of rental apartments on our platform.Simplify your property search today. </h5>
         </div>
</div>
        <div class="card"> 
        <div class="bg"><h3>Tiffin Services</h3>
        <FaUtensils className='logo' />
         <h5> Explore local tiffin services around you, making mealtime effortless while settling into your new rental. </h5>
         </div>
</div>
        <div class="card"> 
        <div class="bg"><h3>Roommates</h3>
        <ImUsers className='logo' />
         <h5> Connect with like-minded individuals in need of roommates and secure a harmonious living arrangement
             </h5>
         </div>
</div>
</div>
    </div>
  )
}

export default Services