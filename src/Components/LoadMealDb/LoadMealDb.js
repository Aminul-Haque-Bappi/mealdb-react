import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import DisplayMealDb from '../DisplayMealDb/DisplayMealDb';
import './LoadMealDb.css'

const LoadMealDb = () => {
    const[mealDb,setMealDb]=useState([])
    const [cart,setCart]=useState([])
    const handleCart = (meal) =>{
        const newCart=[...cart,meal]
        setCart(newCart)
        console.log(meal);
    }
    console.log(mealDb);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chi')
        .then(res=>res.json())
        .then(data=>setMealDb(data.meals))
    },[])

// this code is from support session
//     const [name, setName] = useState("");
//     // const [mealDb, setMealDb] = useState([]);
    
//     useEffect(() => {
//       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
//         .then((res) => res.json())
//         .then((data) => console.log('this are data',data.meals));
//     }, [name]);
//  <input
//           type="text"
//           name="firstName"
//           onBlur={(event) => setName(event.target.value)}
//         />



    return (
        <div className='card-container-parent'>
            <div className='card-container'>
            {
               mealDb.map(meal=><DisplayMealDb key={meal.idMeal} handlecart={handleCart} meal={meal}></DisplayMealDb>) 
            }
            </div>
           
          <div >
              {/* <h1>summery</h1>
             
               <p>name:{cart.length}</p> */}
            <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default LoadMealDb;