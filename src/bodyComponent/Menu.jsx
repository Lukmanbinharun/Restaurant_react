import React, { useState } from 'react'
import MenuItem from './MenuItem'
import DISHES from '../data/dishes'
import DishDetail from './DishDetail'


const Menu = () => {
  // const [dishes] = useState(DISHES)
  const dishes = DISHES
  const [selectedDesh, setSeclectedDesh] = useState(null)

  const handalClick = (dish)=>{
    setSeclectedDesh(dish)
  }
  const item = dishes.map((dish)=> <MenuItem handalClick = {handalClick} dish = {dish} key={dish.id} ></MenuItem>)
    return (
    <div className=' container'>
        <div className="row ">
            <div className="col-5">
                {item}
            </div>
            {selectedDesh && <div className=' col-7'> <DishDetail  dish = {selectedDesh}>  </DishDetail> </div>}



            {/* <div className=' col-7  '> <DishDetail  dish = {selectedDesh}>  </DishDetail> </div> */}
        </div>
        
    </div>
  )
}

export default Menu


// import React from 'react'
// import MenuItem from './MenuItem'
// import DISHES from dishes



//   const item = DISHES.map(()=> )
//   return (
//     <div className=' container'>
//         <div className="row ">
//             <div className="col-5">
//                 <MenuItem></MenuItem>
//             </div>

//         </div>
        
//     </div>
//   )
// }

// export default Menu


