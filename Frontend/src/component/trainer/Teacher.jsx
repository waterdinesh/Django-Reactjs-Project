// import React, { useState } from 'react';
// import '../trainer/teacher.css';
// import { discover } from '../../Data.js';
// import { Link } from "react-router-dom";

// const Teacher = () => {
//   const [apio, setApio] = useState(discover);

//   return (
//     <div className="card-container">
//       {apio.map((dta) => {
//         return (
//           <div key={dta.title} className="card">
//             <Link to={`/teacherview/${dta.id}`}> {/* Fix: Use dta.id instead of apio.id */}
//             <div className='cardimg'>
//             <img src={dta.cover} alt={dta.title} />
//             </div>
             
//               <div className="card-body">
//                 <h3>{dta.title}</h3>
//               </div>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Teacher;



//link code django+reactjs


import React, { useState, useEffect } from 'react';
import '../trainer/teacher.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Teacher = () => {
  const [apio, setApio] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/discover/')
      .then(response => {
        console.log('API response:', response.data);
        if (response.data) {
          const updatedData = response.data.discover.map(item => ({
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

  console.log('apio:', apio);

  return (
    <div className="card-container">
      {apio.map((dta) => {
        return (
          <div key={dta.id} className="card"> {/* Fix: Use dta.id instead of dta.title */}
            <Link to={`/teacherview/${dta.id}`}>
              <div className='cardimg'>
                <img src={dta.cover} alt={dta.title} />
              </div>
              <div className="card-body">
                <h3>{dta.title}</h3>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Teacher;





