// import React, { useEffect, useState } from 'react';
// import '../bookclass/slotbook.css';
// import { FaShoppingBag } from 'react-icons/fa';
// import { IconName } from "react-icons/ai";
// import { AiFillGoogleCircle } from 'react-icons/ai';
// import { FaCcVisa } from 'react-icons/fa';
// import { FaHackerNewsSquare } from 'react-icons/fa';
// import { FaOpera } from 'react-icons/fa';
// // import { FaSellcast } from 'react-icons/fa';
// // import { FaSellsy } from 'react-icons/fa';
// import { FaCalendarDay } from 'react-icons/fa';
// import { FaUserAlt } from 'react-icons/fa';
// import { FaAmazonPay } from 'react-icons/fa';
// import { MdCelebration } from "react-icons/md";
// // import Datetime from 'react-datetime';
// import Calendar from 'react-calendar';
// import Moment from 'moment';

// import 'react-calendar/dist/Calendar.css';
// import dateFormat from 'dateformat';


// // import 'react-datetime/css/react-datetime.css';
// // import { TiTick } from "react-icons/ti";





// const SlotBook = () => {
//   const [selectedService, setSelectedService] = useState(null);
//   const [employees, setEmployees] = useState([]);
//   const [price, setPrice] = useState(0);

//   const [currentStage, setCurrentStage] = useState(1);

//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNo, setPhoneNo] = useState('');
//   const [formErrors, setFormErrors] = useState({});
//   const [selectedValue, setSelectedValue] = useState("");
//   const steps = ["", "", "", ""];
//   // const steps = ["", "", "", " "];
//   const [currentStep, setCurrentStep] = useState(1);
//   const [date, setDate] = useState(new Date());

//   const [complete, setComplete] = useState(false);
//   // const date = new Date();
//   const formattedDate = date.toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata' });
//   const formattedTime = date.toLocaleTimeString();
//   const [finalvalue,setFinalvalue] = useState({}

//   )
//   // useEffect(()=>{
//   //   console.log(finalvalue,"final")

//   // },[finalvalue])

//   const handleSelect = (value) => {
//     setSelectedValue(value);
//   };

//   const validateSelection = () => {
//     console.log(selectedService,'sele')
//     if (!selectedService) {
//       // alert('Please select a service option');  
      

//     } else {
//       const selectedOption = document.querySelector(`[value="${selectedService}"]`);
//       if (selectedOption) {
//         const selectedText = selectedOption.textContent;
//         document.querySelector('.servicetype').textContent = selectedText;
//       }
//       const selectedEmployee = document.getElementById('cars').value;
//       document.querySelector('.person').textContent = selectedEmployee;

//       // setIsClicked(true);
//     }
//   };

  

//   const handleNext = () => {
//     if (currentStep === steps.length) {
//       setComplete(true);
//     } else {
//       setCurrentStep((prev) => prev + 1);
//     }
//   };

//   const handleBack = () => {
//     if (currentStep === 1) {
//       if (currentStage > 1) {
//         setCurrentStage(currentStage - 1);
//       }
//     } else {
//       setCurrentStep((prev) => prev - 1);
//     }
//   };

//   const handleContinue3 = () => {
//     const errors = {};
//     if (!firstName) {
//       errors.firstName = 'Please enter your first name';
//     }
//     if (!lastName) {
//       errors.lastName = 'Please enter your last name';
//     }
//     if (!email) {
//       errors.email = 'Please enter your email';
//     }
//     if (!phoneNo) {
//       errors.phoneNo = 'Please enter your phone number';
//     }

//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     // proceed to next step
//     console.log('Continue to next step...');
//   };

// console.log(selectedValue,"selected")
//   const handleContinue = () => {
//     if (currentStage === 1) {
//       validateSelection();
//       handleNext();
//     } else if (currentStage === 3) {
//       handleContinue3();
//       // return; // stop here if there are form errors
//     }

//     setCurrentStage(currentStage + 1);
//   };

//   console.log(currentStage)

//   //   const handleBack = () => {
//   //     setCurrentStage(currentStage - 1);
//   //   };
//   // const handleRefresh = () => {
//   //   window.location.reload();
//   // };


//   const onChange = date => {
//     setDate(date);
//   };

//   const calendarStyle = {
//     width: "250px",
//     fontFamily: "Arial, sans-serif",
//     fontSize: "14px",
//   };

  


//   const prices = {
//     'Box with Alec Whitten': 10,
//     'Box with Tyrone Lowe': 12,
//     'Cardio with Alexa Rollins': 15,
//     'Meditation with Kasey Burt': 8,
//     'Crossfit with Raymond Atkins': 20,
//     'Yoga with Kasey Burt': 10,
//   };




//   function handleServiceChange(event) {

//     const selectedOption = event.target.value;
//     setSelectedService(selectedOption);
//     setPrice(prices[selectedOption] || 0);





//     const service = event.target.value;
//     setSelectedService(service);

//     // Set the options for the employees dropdown based on the selected service
//     let options = [];
//     switch (service) {
//       case 'Box with Alec Whitten':
//         options = ['Alec Whitten'];
//         break;
//       case 'Box with Tyrone Lowe':
//         options = ['Tyrone Lowe'];
//         break;
//       case 'Cardio with Alexa Rollins':
//         options = ['Alexa Rollins'];
//         break;
//       case 'Meditation with Kasey Burt':
//         options = ['Kasey Burt'];
//         break;
//       case 'Crossfit with Raymond Atkins':
//         options = ['Raymond Atkins'];
//         break;
//       case 'Yoga with Kasey Burt':
//         options = ['Kasey Burt'];
//         break;
//       default:
//         options = [];
//     }
//     setEmployees(options);
//   }
//   const [appointmentId, setAppointmentId] = useState(1);
//   // Rest of the code...

//   const handleRefresh = () => {
//     // Increment the appointment ID counter
//     window.location.reload();
//     setAppointmentId((prevId) => prevId + 1);
//     localStorage.setItem('data',JSON.stringify({
//       "Appointment ID": `Appointment ${appointmentId}`,
//       "Date:Time": formattedDate,
//       "Local Time": selectedValue,
//       "Service": selectedService,
//       "Employee": employees,
//       "Payment": price,
//       "Your Name": firstName,
//       "Last Name":lastName,
//       "Email Address": email,
//       "Phone Number": phoneNo,
//     }))
//   };
//   console.log(currentStage,'current')

//   return (
//     <div className='slotbookall'>
//       {
//         (currentStage === 5)? <div className='cardleft'>
//           <h3 style={{textAlign:"center"}}>Add To Calender</h3>
//           <div className='wrapperdiv'>
//           <div className='innerdiv'> <AiFillGoogleCircle/></div>
//           <div className='innerdiv'> <FaCcVisa/> </div>
//           <div className='innerdiv'> <FaHackerNewsSquare/></div>
//           <div className='innerdiv'> <FaOpera/></div>

//           </div>



//         </div> : <div className='cardleft'>
//         <div className="stepper">
//           <div className={`step ${currentStage >= 1 ? "active" : ""}`}>
//             {/* <p>Stage 1</p> */}
//             <div className='cardleftone'>
//               <div className='cardleftonet'>
//                 <h5><FaShoppingBag /></h5>
//                 <h5>service selection</h5>
//                 <span>1</span>
//               </div>
//               <div className='cardleftonet1'>
//                 <p className='servicetype'></p>
//                 <p className='person'></p>
//               </div>
//             </div>
//           </div>
//           <div className={`step ${currentStage >= 2 ? "active" : ""}`}>
          
//             {/* <p>Stage 2</p> */}
//             <div className='cardleftone'>
//               <div className='cardleftonet'>
//                 <h5><FaCalendarDay /></h5>
//                 <h5>Date & Time</h5>
//                 <span>2</span>
//               </div>
//               <div>

//                 <p className='servicetype'> {formattedDate}</p>
//                 <p className='person'>{selectedValue}</p>
//               </div>
//             </div>
//           </div>
//           <div className={`step ${currentStage >= 3 ? "active" : ""}`}>
          
//             {/* <p>Stage 3</p> */}
//             <div className='cardleftone'>
//               <div className='cardleftonet'>
//                 <h5>< FaUserAlt /></h5>
//                 <h5>Your Information</h5>
//                 <span>3</span>
                
//               </div>
//               <div>
//                 <p className='infoname'>{firstName}</p>
//                 <p className='infolastname'>{lastName}</p>
//                 <p className='infoemail'>{email}</p>
//                 <p className='infonumb'>{phoneNo}</p>
//               </div>
//               <div>
//                 <p className='servicetype'></p>
//                 <p className='person'></p>
//               </div>
//             </div>
//           </div>
//           <div className={`step ${currentStage >= 4 ? "active" : ""}`}>
         
//             {/* <p>Stage 4</p> */}
//             <div className='cardleftone'>
//               <div className='cardleftonet'>
//                 <h5><FaAmazonPay /></h5>
//                 <h5>Payments</h5>
//                 <span>4</span>
               
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       }
      

//       <div className='cardright'>
//         {currentStage === 1 && (<div className='cardrightone'>
//           <div className='cardrightheader'>
//             <h3>Service Selection:</h3>
//           </div>
//           <div className='cardrightmiddle'>
//             <h4>service*</h4>
//             <select name="select service" id="" placeholder='select service' className='selectedserviceslot' onChange={handleServiceChange} required>
//               <optgroup label="Box">
//                 <option value="select service">select service</option>
//                 <option value="Box with Alec Whitten">Box with Alec Whitten (+10rs)</option>
//                 <option value="Box with Tyrone Lowe">Box with Tyrone Lowe (+12rs)</option>
//               </optgroup>
//               <optgroup label="Cardio">
//                 <option value="Cardio with Alexa Rollins">Cardio with Alexa Rollins (+15rs)</option>
//               </optgroup>
//               <optgroup label="Meditation">
//                 <option value="Meditation with Kasey Burt">Meditation with Kasey Burt (+8rs)</option>
//               </optgroup>
//               <optgroup label="Crossfit">
//                 <option value="Crossfit with Raymond Atkins"> Crossfit with Raymond Atkins (+20rs)</option>
//               </optgroup>
//               <optgroup label="Yoga">
//                 <option value="Yoga with Kasey Burt"> Yoga with Kasey Burt (+10rs)</option>
//               </optgroup>
//             </select>
           
//             <h4>employee*</h4>
//             <select name="cars" id="cars">
//               <option value="select employee">select employee</option>
//               {employees.map((employee) => (
//                 <option key={employee} value={employee}>{employee}</option>
//               ))}
//             </select>
//           </div>
//           <div className='cardrightfoot'>

//           {
            
//              (!selectedService) ? " First Select Field" : 
//             <button className="btn" onClick={handleContinue}>
//              {currentStage === 3 ? "Continue" : "Next"}
//             </button>
            
            

//           }
          
//             {/* <button className="btn" onClick={handleContinue} > */}
//             {/* {  "Select First " : 'null'} */}
//               {/* {currentStage ===  (!selectedValue) ? 0 : 1 ? "Continue" : "Next"} */}
//             {/* </button> */}
//           </div>
//         </div>)}
//         {currentStage === 2 && (<div className='cardrighttwo'>
//           <div className='cardrightheader'>
//             <button className="btn" onClick={handleBack}>
//               Back
//             </button>
//             <h3>Date & Time:</h3>
//           </div>
//           <div className='cardrightmiddle'>
//             {/* <h1>Choose a Date and Times:</h1> */}
//             <div className='slotbokycalendar'>
//             <Calendar
//               showWeekNumbers
//               onChange={onChange}
//               value={date}
//               style={calendarStyle}
//             />
          
//             </div>
//             {formattedDate}
            
//             <div className="ptagy">
//       <h6>Selected Value: {selectedValue}</h6>
//       <p className='ptime' onClick={() => handleSelect("09:00")}>09:00 - 10:00</p>
//       <p className='ptime' onClick={() => handleSelect("09:30")}>09:30 - 10:30</p>
//       <p className='ptime' onClick={() => handleSelect("10:00")}>10:00 - 11:00</p>
//       <p className='ptime' onClick={() => handleSelect("10:30")}>10:30 - 11:30</p>
//       <p className='ptime' onClick={() => handleSelect("11:00")}>11:00 - 12:00</p>
//       <p className='ptime' onClick={() => handleSelect("11:30")}>11:30 - 12:30</p>
//       <p className='ptime' onClick={() => handleSelect("12:00")}>12:00 - 13:00</p>
//       <p className='ptime' onClick={() => handleSelect("12:30")}>12:30 - 13:30</p>
//       <p className='ptime' onClick={() => handleSelect("13:00")}>13:00 - 14:00</p>
//       <p className='ptime' onClick={() => handleSelect("13:30")}>13:30 - 14:30</p>
//       <p className='ptime' onClick={() => handleSelect("14:00")}>14:00 - 15:00</p>
//       <p className='ptime' onClick={() => handleSelect("14:30")}>14:30 - 15:30</p>
//       <p className='ptime' onClick={() => handleSelect("15:00")}>15:00 - 16:00</p>
//       <p className='ptime' onClick={() => handleSelect("15:30")}>15:30 - 16:30</p>
//       <p className='ptime' onClick={() => handleSelect("16:00")}>16:00 - 17:00</p>
//     </div>
//           </div>
//           <div className='cardrightfoot'>
// {/*           
//             <button className="btn" onClick={handleContinue}>
//               {currentStage === 2 ? "Continue" : "Next"}
//             </button> */}

// {
//             (!selectedValue) ? " First Select Field" : 
//             <button className="btn" onClick={handleContinue}>
//              {currentStage === 3 ? "Continue" : "Next"}
//             </button>

//           }
//           </div>
//         </div>)}
//         {currentStage === 3 && (<div className='cardrightthree'>
//           <div className='cardrightheader'>
//             <button className="btn" onClick={handleBack}>
//               Back
//             </button>
//             {/* <button onClick={handleContinue3} >continue</button> */}
//             <h3>Your Information:</h3>
//           </div>
//           <div className='cardrightmiddle'>
//             <h4>First Name:</h4>
//             <input type="text" value={firstName} required onChange={(e) => setFirstName(e.target.value)} placeholder='enter first name' />
//             {formErrors.firstName && <p className="error">{formErrors.firstName}</p>}

//             <h4>Last Name:</h4>
//             <input type="text" value={lastName} required onChange={(e) => setLastName(e.target.value)} placeholder='enter last name' />
//             {formErrors.lastName && <p className="error">{formErrors.lastName}</p>}

//             <h4>Email:</h4>
//             <input type="text" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder='enter email' />
//             {formErrors.email && <p className="error">{formErrors.email}</p>}

//             <h4>Phone No:</h4>
//             <input type="number" value={phoneNo} required onChange={(e) => setPhoneNo(e.target.value)} placeholder='enter phone no' />
//             {formErrors.phoneNo && <p className="error">{formErrors.phoneNo}</p>}
//           </div>

//           <div className='cardrightfoot'>
          
//           {
//             ( firstName == "" ||  lastName == "" || email == "" || phoneNo == "") ? " First Select Field" : 
//             <button className="btn" onClick={handleContinue}>
//              {currentStage === 3 ? "Continue" : "Next"}
//             </button>

//           }
            
//           </div>
//         </div>)}
//         {currentStage === 4 && (<div className='cardrightfour'>
//           <div className='cardrightheader'>
//             <button className="btn" onClick={handleBack}>
//               Back
//             </button>
//             <h3>Payments:</h3>
//           </div>
//           <div className='cardrightmiddle'>
//             <h3>sumary</h3>
//             <div className='contentcenter'>
//               <div className='contentcentertop'>
//                 <p>Services</p>
//                 <div className='contentcentertop1'>
//                   <p>{selectedService}x1person</p>
//                   <p className="price">{price}rs</p>
//                 </div>
//                 <h6>Subtotal:{price}rs</h6>
//               </div>
//               <div className='contentcentertop2'>
//                 <div className='contentcentertop3'>
//                   <p>Coupon:</p>
//                   <p></p>
//                   <button>add</button>
//                 </div>
//                 Total Amount:{price}rs
//               </div>
//             </div>
//             <p>The payment will be done on-site.</p>
//           </div>
//           <div className='cardrightfoot'>
           
//             <button className="btn" onClick={handleContinue}>
//               {currentStage === 1 ? "Continue" : "Next"}
//             </button>
//           </div>
//         </div>)}

//         {currentStage === 5 && (
//           <div className='cardrightfive'>
//             <div className='cardrightheader'>
//               <button className="btn" onClick={handleBack}>
//                 Back
//               </button>
//               <h1><MdCelebration /></h1>
//             </div>
//             <div className='cardrightmiddle'>
//               <h3>Congratulations:</h3>
//               <p>Appointment ID:`{appointmentId}`</p>
//               <p>date:time:{formattedDate}</p>
//               <p>local time:{selectedValue}</p>
//               <p>service:{selectedService}</p>
//               <p>employee:{employees}</p>
//               <p>payment:{price}rs</p>
//               <p>your name:{firstName}</p>
//               <p>email address:{email}</p>
//               <p>phone number:{phoneNo}</p>
//             </div>
//             <div className='cardrightfoot'>
//               <button onClick={handleRefresh}>Finish</button>
//             </div>
//             {/* {setFinalvalue({
//               "Appointment ID": `Appointment ${appointmentId}`,
//               "Date:Time": formattedDate,
//               "Local Time": formattedTime,
//               "Service": selectedService,
//               "Employee": employees,
//               "Payment": price,
//               "Your Name": firstName,
//               "Email Address": email,
//               "Phone Number": phoneNo,
//             })} */}
//           </div>
//         )}



//       </div>
//     </div>
//   )
// }

// export default SlotBook



// //backendconnection but not done properly


import React, { useEffect, useState } from 'react';
import '../bookclass/slotbook.css';
import { FaShoppingBag } from 'react-icons/fa';
import { IconName } from "react-icons/ai";
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FaCcVisa } from 'react-icons/fa';
import { FaHackerNewsSquare } from 'react-icons/fa';
import { FaOpera } from 'react-icons/fa';
// import { FaSellcast } from 'react-icons/fa';
// import { FaSellsy } from 'react-icons/fa';
import { FaCalendarDay } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaAmazonPay } from 'react-icons/fa';
import { MdCelebration } from "react-icons/md";
// import Datetime from 'react-datetime';
import Calendar from 'react-calendar';
import Moment from 'moment';

import 'react-calendar/dist/Calendar.css';
import dateFormat from 'dateformat';
import axios from 'axios';


// import 'react-datetime/css/react-datetime.css';
// import { TiTick } from "react-icons/ti";





const SlotBook = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [price, setPrice] = useState(0);

  const [currentStage, setCurrentStage] = useState(1);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [selectedValue, setSelectedValue] = useState("");
  const steps = ["", "", "", ""];
  // const steps = ["", "", "", " "];
  const [currentStep, setCurrentStep] = useState(1);
  const [date, setDate] = useState(new Date());

  const [complete, setComplete] = useState(false);
  // const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata' });
  const formattedTime = date.toLocaleTimeString();
  const [finalvalue,setFinalvalue] = useState({}

  )
  // useEffect(()=>{
  //   console.log(finalvalue,"final")

  // },[finalvalue])

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const validateSelection = () => {
    console.log(selectedService,'sele')
    if (!selectedService) {
      // alert('Please select a service option');  
      

    } else {
      const selectedOption = document.querySelector(`[value="${selectedService}"]`);
      if (selectedOption) {
        const selectedText = selectedOption.textContent;
        document.querySelector('.servicetype').textContent = selectedText;
      }
      const selectedEmployee = document.getElementById('cars').value;
      document.querySelector('.person').textContent = selectedEmployee;

      // setIsClicked(true);
    }
  };

  

  const handleNext = () => {
    if (currentStep === steps.length) {
      setComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 1) {
      if (currentStage > 1) {
        setCurrentStage(currentStage - 1);
      }
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleContinue3 = () => {
    const errors = {};
    if (!firstName) {
      errors.firstName = 'Please enter your first name';
    }
    if (!lastName) {
      errors.lastName = 'Please enter your last name';
    }
    if (!email) {
      errors.email = 'Please enter your email';
    }
    if (!phoneNo) {
      errors.phoneNo = 'Please enter your phone number';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // proceed to next step
    console.log('Continue to next step...');
  };

console.log(selectedValue,"selected")
  const handleContinue = () => {
    if (currentStage === 1) {
      validateSelection();
      handleNext();
    } else if (currentStage === 3) {
      handleContinue3();
      // return; // stop here if there are form errors
    }

    setCurrentStage(currentStage + 1);
  };

  console.log(currentStage)

  //   const handleBack = () => {
  //     setCurrentStage(currentStage - 1);
  //   };
  // const handleRefresh = () => {
  //   window.location.reload();
  // };


  const onChange = date => {
    setDate(date);
  };

  const calendarStyle = {
    width: "250px",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
  };

  


  const prices = {
    'Box with Alec Whitten': 10,
    'Box with Tyrone Lowe': 12,
    'Cardio with Alexa Rollins': 15,
    'Meditation with Kasey Burt': 8,
    'Crossfit with Raymond Atkins': 20,
    'Yoga with Kasey Burt': 10,
  };




  function handleServiceChange(event) {

    const selectedOption = event.target.value;
    setSelectedService(selectedOption);
    setPrice(prices[selectedOption] || 0);





    const service = event.target.value;
    setSelectedService(service);

    // Set the options for the employees dropdown based on the selected service
    let options = [];
    switch (service) {
      case 'Box with Alec Whitten':
        options = ['Alec Whitten'];
        break;
      case 'Box with Tyrone Lowe':
        options = ['Tyrone Lowe'];
        break;
      case 'Cardio with Alexa Rollins':
        options = ['Alexa Rollins'];
        break;
      case 'Meditation with Kasey Burt':
        options = ['Kasey Burt'];
        break;
      case 'Crossfit with Raymond Atkins':
        options = ['Raymond Atkins'];
        break;
      case 'Yoga with Kasey Burt':
        options = ['Kasey Burt'];
        break;
      default:
        options = [];
    }
    setEmployees(options);
  }
  const [appointmentId, setAppointmentId] = useState(1);
  // Rest of the code...

  const handleRefresh = () => {
    // Increment the appointment ID counter
    setAppointmentId((prevId) => prevId + 1);
  
    const data = {
      appointmentId: appointmentId,
      formattedDate: formattedDate,
      selectedValue: selectedValue,
      selectedService: selectedService,
      employees: employees,
      price: price,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNo: phoneNo
    };

  
  
    // Store data in local storage
    localStorage.setItem('data', JSON.stringify(data));
  
    // Refresh the page
    // window.location.reload();
  
    // Send data to Django backend
    const formData = new FormData();
    // formData.append('appointmentId', appointmentId);
    formData.append('LocalTime', formattedDate);
    // formData.append('selectedValue', selectedValue);
    formData.append('Service', selectedService);
    formData.append('Employee', employees);
    formData.append('Payment', price);
    formData.append('YourName', firstName);
    formData.append('LastName', lastName);
    formData.append('EmailAddress', email);
    formData.append('PhoneNumber', phoneNo);
  
    fetch('http://127.0.0.1:8000/bookclass/', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        window.location.reload();
        // Request was successful
        return response.json();
        console.log(response)
        
      } else {
        // Request failed
        throw new Error('Request failed');
      }
    })
    .then(data => {
      // Handle the response data
      console.log(data); // Log the response data
      // Perform any additional actions, such as showing a success message or redirecting to another page
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error(error); // Log the error
      // Perform any additional error handling, such as displaying an error message to the user
    });
  };
  
  
  console.log(currentStage,'current')

  return (
    <div className='slotbookall'>
      {
        (currentStage === 5)? <div className='cardleft'>
          <h3 style={{textAlign:"center"}}>Add To Calender</h3>
          <div className='wrapperdiv'>
          <div className='innerdiv'> <AiFillGoogleCircle/></div>
          <div className='innerdiv'> <FaCcVisa/> </div>
          <div className='innerdiv'> <FaHackerNewsSquare/></div>
          <div className='innerdiv'> <FaOpera/></div>

          </div>



        </div> : <div className='cardleft'>
        <div className="stepper">
          <div className={`step ${currentStage >= 1 ? "active" : ""}`}>
            {/* <p>Stage 1</p> */}
            <div className='cardleftone'>
              <div className='cardleftonet'>
                <h5><FaShoppingBag /></h5>
                <h5>service selection</h5>
                <span>1</span>
              </div>
              <div className='cardleftonet1'>
                <p className='servicetype'></p>
                <p className='person'></p>
              </div>
            </div>
          </div>
          <div className={`step ${currentStage >= 2 ? "active" : ""}`}>
          
            {/* <p>Stage 2</p> */}
            <div className='cardleftone'>
              <div className='cardleftonet'>
                <h5><FaCalendarDay /></h5>
                <h5>Date & Time</h5>
                <span>2</span>
              </div>
              <div>

                <p className='servicetype'> {formattedDate}</p>
                <p className='person'>{selectedValue}</p>
              </div>
            </div>
          </div>
          <div className={`step ${currentStage >= 3 ? "active" : ""}`}>
          
            {/* <p>Stage 3</p> */}
            <div className='cardleftone'>
              <div className='cardleftonet'>
                <h5>< FaUserAlt /></h5>
                <h5>Your Information</h5>
                <span>3</span>
                
              </div>
              <div>
                <p className='infoname'>{firstName}</p>
                <p className='infolastname'>{lastName}</p>
                <p className='infoemail'>{email}</p>
                <p className='infonumb'>{phoneNo}</p>
              </div>
              <div>
                <p className='servicetype'></p>
                <p className='person'></p>
              </div>
            </div>
          </div>
          <div className={`step ${currentStage >= 4 ? "active" : ""}`}>
         
            {/* <p>Stage 4</p> */}
            <div className='cardleftone'>
              <div className='cardleftonet'>
                <h5><FaAmazonPay /></h5>
                <h5>Payments</h5>
                <span>4</span>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      }
      

      <div className='cardright'>
        {currentStage === 1 && (<div className='cardrightone'>
          <div className='cardrightheader'>
            <h3>Service Selection:</h3>
          </div>
          <div className='cardrightmiddle'>
            <h4>service*</h4>
            <select name="select service" id="" placeholder='select service' className='selectedserviceslot' onChange={handleServiceChange} required>
              <optgroup label="Box">
                <option value="select service">select service</option>
                <option value="Box with Alec Whitten">Box with Alec Whitten (+10rs)</option>
                <option value="Box with Tyrone Lowe">Box with Tyrone Lowe (+12rs)</option>
              </optgroup>
              <optgroup label="Cardio">
                <option value="Cardio with Alexa Rollins">Cardio with Alexa Rollins (+15rs)</option>
              </optgroup>
              <optgroup label="Meditation">
                <option value="Meditation with Kasey Burt">Meditation with Kasey Burt (+8rs)</option>
              </optgroup>
              <optgroup label="Crossfit">
                <option value="Crossfit with Raymond Atkins"> Crossfit with Raymond Atkins (+20rs)</option>
              </optgroup>
              <optgroup label="Yoga">
                <option value="Yoga with Kasey Burt"> Yoga with Kasey Burt (+10rs)</option>
              </optgroup>
            </select>
           
            <h4>employee*</h4>
            <select name="cars" id="cars">
              <option value="select employee">select employee</option>
              {employees.map((employee) => (
                <option key={employee} value={employee}>{employee}</option>
              ))}
            </select>
          </div>
          <div className='cardrightfoot'>

          {
            
             (!selectedService) ? " First Select Field" : 
            <button className="btn" onClick={handleContinue}>
             {currentStage === 3 ? "Continue" : "Next"}
            </button>
            
            

          }
          
            {/* <button className="btn" onClick={handleContinue} > */}
            {/* {  "Select First " : 'null'} */}
              {/* {currentStage ===  (!selectedValue) ? 0 : 1 ? "Continue" : "Next"} */}
            {/* </button> */}
          </div>
        </div>)}
        {currentStage === 2 && (<div className='cardrighttwo'>
          <div className='cardrightheader'>
            <button className="btn" onClick={handleBack}>
              Back
            </button>
            <h3>Date & Time:</h3>
          </div>
          <div className='cardrightmiddle'>
            {/* <h1>Choose a Date and Times:</h1> */}
            <div className='slotbokycalendar'>
            <Calendar
              showWeekNumbers
              onChange={onChange}
              value={date}
              style={calendarStyle}
            />
          
            </div>
            {formattedDate}
            
            <div className="ptagy">
      <h6>Selected Value: {selectedValue}</h6>
      <p className='ptime' onClick={() => handleSelect("09:00")}>09:00 - 10:00</p>
      <p className='ptime' onClick={() => handleSelect("09:30")}>09:30 - 10:30</p>
      <p className='ptime' onClick={() => handleSelect("10:00")}>10:00 - 11:00</p>
      <p className='ptime' onClick={() => handleSelect("10:30")}>10:30 - 11:30</p>
      <p className='ptime' onClick={() => handleSelect("11:00")}>11:00 - 12:00</p>
      <p className='ptime' onClick={() => handleSelect("11:30")}>11:30 - 12:30</p>
      <p className='ptime' onClick={() => handleSelect("12:00")}>12:00 - 13:00</p>
      <p className='ptime' onClick={() => handleSelect("12:30")}>12:30 - 13:30</p>
      <p className='ptime' onClick={() => handleSelect("13:00")}>13:00 - 14:00</p>
      <p className='ptime' onClick={() => handleSelect("13:30")}>13:30 - 14:30</p>
      <p className='ptime' onClick={() => handleSelect("14:00")}>14:00 - 15:00</p>
      <p className='ptime' onClick={() => handleSelect("14:30")}>14:30 - 15:30</p>
      <p className='ptime' onClick={() => handleSelect("15:00")}>15:00 - 16:00</p>
      <p className='ptime' onClick={() => handleSelect("15:30")}>15:30 - 16:30</p>
      <p className='ptime' onClick={() => handleSelect("16:00")}>16:00 - 17:00</p>
    </div>
          </div>
          <div className='cardrightfoot'>
{/*           
            <button className="btn" onClick={handleContinue}>
              {currentStage === 2 ? "Continue" : "Next"}
            </button> */}

{
            (!selectedValue) ? " First Select Field" : 
            <button className="btn" onClick={handleContinue}>
             {currentStage === 3 ? "Continue" : "Next"}
            </button>

          }
          </div>
        </div>)}
        {currentStage === 3 && (<div className='cardrightthree'>
          <div className='cardrightheader'>
            <button className="btn" onClick={handleBack}>
              Back
            </button>
            {/* <button onClick={handleContinue3} >continue</button> */}
            <h3>Your Information:</h3>
          </div>
          <div className='cardrightmiddle'>
            <h4>First Name:</h4>
            <input type="text" value={firstName} required onChange={(e) => setFirstName(e.target.value)} placeholder='enter first name' />
            {formErrors.firstName && <p className="error">{formErrors.firstName}</p>}

            <h4>Last Name:</h4>
            <input type="text" value={lastName} required onChange={(e) => setLastName(e.target.value)} placeholder='enter last name' />
            {formErrors.lastName && <p className="error">{formErrors.lastName}</p>}

            <h4>Email:</h4>
            <input type="text" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder='enter email' />
            {formErrors.email && <p className="error">{formErrors.email}</p>}

            <h4>Phone No:</h4>
            <input type="number" value={phoneNo} required onChange={(e) => setPhoneNo(e.target.value)} placeholder='enter phone no' />
            {formErrors.phoneNo && <p className="error">{formErrors.phoneNo}</p>}
          </div>

          <div className='cardrightfoot'>
          
          {
            ( firstName == "" ||  lastName == "" || email == "" || phoneNo == "") ? " First Select Field" : 
            <button className="btn" onClick={handleContinue}>
             {currentStage === 3 ? "Continue" : "Next"}
            </button>

          }
            
          </div>
        </div>)}
        {currentStage === 4 && (<div className='cardrightfour'>
          <div className='cardrightheader'>
            <button className="btn" onClick={handleBack}>
              Back
            </button>
            <h3>Payments:</h3>
          </div>
          <div className='cardrightmiddle'>
            <h3>sumary</h3>
            <div className='contentcenter'>
              <div className='contentcentertop'>
                <p>Services</p>
                <div className='contentcentertop1'>
                  <p>{selectedService}x1person</p>
                  <p className="price">{price}rs</p>
                </div>
                <h6>Subtotal:{price}rs</h6>
              </div>
              <div className='contentcentertop2'>
                <div className='contentcentertop3'>
                  <p>Coupon:</p>
                  <p></p>
                  <button>add</button>
                </div>
                Total Amount:{price}rs
              </div>
            </div>
            <p>The payment will be done on-site.</p>
          </div>
          <div className='cardrightfoot'>
           
            <button className="btn" onClick={handleContinue}>
              {currentStage === 1 ? "Continue" : "Next"}
            </button>
          </div>
        </div>)}

        {currentStage === 5 && (
          <div className='cardrightfive'>
            <div className='cardrightheader'>
              <button className="btn" onClick={handleBack}>
                Back
              </button>
              <h1><MdCelebration /></h1>
            </div>
            <div className='cardrightmiddle'>
              <h3>Congratulations:</h3>
              <p>Appointment ID:`{appointmentId}`</p>
              <p>date:time:{formattedDate}</p>
              <p>local time:{selectedValue}</p>
              <p>service:{selectedService}</p>
              <p>employee:{employees}</p>
              <p>payment:{price}rs</p>
              <p>your name:{firstName}</p>
              <p>email address:{email}</p>
              <p>phone number:{phoneNo}</p>
            </div>
            <div className='cardrightfoot'>
              <button onClick={handleRefresh}>Finish</button>
            </div>
            {/* {setFinalvalue({
              "Appointment ID": `Appointment ${appointmentId}`,
              "Date:Time": formattedDate,
              "Local Time": formattedTime,
              "Service": selectedService,
              "Employee": employees,
              "Payment": price,
              "Your Name": firstName,
              "Email Address": email,
              "Phone Number": phoneNo,
            })} */}
          </div>
        )}



      </div>
    </div>
  )
}

export default SlotBook



