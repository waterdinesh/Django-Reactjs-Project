// import React, { useState } from 'react';
// import './excercise.css'
// import { discover2 } from '../../Data.js';
// import { Link } from "react-router-dom";

// const Excercise = () => {
//     const [apio2, setApio] = useState(discover2);

//     return (
//       <div className="card-container2">
//         {apio2.map((dta) => (
//           <div key={dta.title} className="card2">
//             <Link to={`/classview/${dta.id}`}>
//               <div className='card2img'>
//               <img src={dta.cover} alt={dta.title} />
//               </div>
           
//             <div className="card-body2">
//               <h3>{dta.title}</h3>
//               <h6>{dta.cover2}</h6>
//               <p className='excercisep'>LEARN MORE</p> 
             
//             </div>
//             </Link>
           
//           </div>
//         ))}
//       </div>
//     );
// }

// export default Excercise

//link code django+reactjs

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './excercise.css'
import { Link } from "react-router-dom";

const Excercise = () => {
  const [apio2, setApio] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/discover2/')
      .then(response => {
        console.log('API response:', response.data);
        if (response.data) {
          const updatedData = response.data.discover2.map(item => ({
            ...item,
            cover: `http://127.0.0.1:8000/${item.cover}` // Append base URL to the image path
          }));
          setApio(updatedData);
        } else {
          console.error('API response is not an array:', response.data);
          // Handle non-array response accordingly
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log('apio2:', apio2);

  return (
    <div className="card-container2">
      {apio2.map((dta) => (
        <div key={dta.id} className="card2">
          <Link to={`/classview/${dta.id}`}>
            <div className='card2img'>
              <img src={dta.cover} alt={dta.title} />
            </div>
          </Link>
          <div className="card-body2">
            <h3>{dta.title}</h3>
            <h6>{dta.cover2}</h6>
            <p className='excercisep'>LEARN MORE</p> 
          </div>
        </div>
      ))}
    </div>
  );
}

export default Excercise;


