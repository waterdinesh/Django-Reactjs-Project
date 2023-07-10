import React, { useState } from 'react';
import '../schedule/schedulecart.css';
// import { data } from "../../Data";

const ScheduleCart = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [contentOption, setContentOption] = useState('Option 1');
  const [click,setClick]= useState(false);
  const clikedButton = () =>{

  }

  // const handleDayChange = (day) => {
  //   setSelectedDay(day);
  // };

  const handleContentOptionChange = (option) => {
    setContentOption(option);
  };

  return (
    <div className='schedulacartall'>
      <div className='scbtnall'>
        {/* <button onClick={() => handleDayChange('Monday')}>Button 1</button>
        <button onClick={() => handleDayChange('Tuesday')}>Button 2</button> */}
        <button onClick={() => {handleContentOptionChange('Option 1')}} className='scbtn'>All</button>
        <button onClick={() => handleContentOptionChange('Option 2')}className='scbtn'>BOX</button>
        <button onClick={() => handleContentOptionChange('Option 3')}className='scbtn'>CARDIO</button>
        <button onClick={() => handleContentOptionChange('Option 4')}className='scbtn'>CROSSFIT</button>
        <button onClick={() => handleContentOptionChange('Option 5')}className='scbtn'>YOGA</button>
        <button onClick={() => handleContentOptionChange('Option 6')}className='scbtn'>MEDITATION</button>
      </div>
      <div className='tabelall'>
      <table>
        <thead >
          <tr>
            <th>TIME</th> {/* Empty cell for top-left corner */}
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {renderTimeRows(selectedDay, contentOption)}
        </tbody>
      </table>
      </div>
      
      
    </div>
  );
}

const renderTimeRows = (selectedDay, contentOption) => {
  const hours = [9, 11, 14, 18, 20];

  const rows = [];
  for (let hour of hours) {
    const row = [];
    row.push(<td key="time">{formatTime(hour)}</td>);

    // Add cells for each day
    for (let day of ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']) {
      row.push(
        <td key={day} className={selectedDay === day ? 'active' : ''}>
          {getContent(day, hour, contentOption)}
        </td>
      );
    }

    rows.push(<tr key={hour}>{row}</tr>);
  }

  return rows;
}

const getContent = (day, hour, contentOption) => {
  if (day === 'Monday' && hour === 9) {
    if (contentOption === 'Option 1') {
      return <span ><p className='pbox'>BOX</p> <p style={{textAlign:"center"}}>Rachell green</p > <p style={{textAlign:"center"}}>9.00-11.00</p>  </span>; // Content for Monday 9-10, Option 1
    } else if (contentOption === 'Option 2') {
      return<span ><p className='pbox'>BOX</p> <p style={{textAlign:"center"}}>Rachell green</p > <p style={{textAlign:"center"}}>9.00-11.00</p>  </span>; 
    }else if (contentOption === 'Option 3') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }else if (contentOption === 'Option 4') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }else if (contentOption === 'Option 5') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }else if (contentOption === 'Option 6') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }
  }else if(day === 'Monday' && hour === 11){
    if (contentOption === 'Option 1') {
        return <span> <p className='cardiop'>CARDIO</p><p style={{textAlign:"center"}}>Rachell green</p><p style={{textAlign:"center"}}>11.00-12.00</p> </span>; // Content for Monday 9-10, Option 1
      } else if (contentOption === 'Option 2') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }else if (contentOption === 'Option 3') {
        return <span> <p className='cardiop'>CARDIO</p>  <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}>11.00-12.00</p> </span>; // Content for Monday 9-10, Option 1 // Content for Monday 9-10, Option 2
      }else if (contentOption === 'Option 4') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }else if (contentOption === 'Option 5') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }else if (contentOption === 'Option 6') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }

  }else if(day === 'Monday' && hour === 14){
    if (contentOption === 'Option 1') {
        return <span></span>; // Content for Monday 9-10, Option 1
      } else if (contentOption === 'Option 2') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }else if (contentOption === 'Option 3') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }else if (contentOption === 'Option 4') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }else if (contentOption === 'Option 5') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }else if (contentOption === 'Option 6') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }

  }else if(day === 'Monday' && hour === 18){
    if (contentOption === 'Option 1') {
        return <span> <p className='meditionp'> MEDITATION</p> <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}>18.00-19.00</p> </span>; // Content for Monday 9-10, Option 1
      } else if (contentOption === 'Option 2') {
        return <span></span>; 
      }else if (contentOption === 'Option 3') {
        return <span></span>; 
      }else if (contentOption === 'Option 4') {
        return <span></span>; 
      }else if (contentOption === 'Option 5') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }else if (contentOption === 'Option 6') {
        return <span> <p className='meditionp'> MEDITATION</p> <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}>18.00-19.00</p> </span>; // Content for Monday 9-10, Option 2
      }

  }else if(day === 'Monday' && hour === 20){
    if (contentOption === 'Option 1') {
        return <span></span>; // Content for Monday 9-10, Option 1
      } else if (contentOption === 'Option 2') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }
  
  else if (day === 'Tuesday' && hour === 9) {
    if (contentOption === 'Option 1') {
      return <span></span>; // Content for Monday 9-10, Option 1
    } else if (contentOption === 'Option 2') {
        return <span></span>;
    }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }
  }else if(day === 'Tuesday' && hour === 11){
    if (contentOption === 'Option 1') {
        return <span><p className='cardiop'>CARDIO</p>  <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}>11.00-12.00</p> </span>; // Content for Monday 9-10, Option 1
      } else if (contentOption === 'Option 2') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }else if (contentOption === 'Option 3') {
        return <span><p className='cardiop'>CARDIO</p>  <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}>11.00-12.00</p> </span>; // Content for Monday 9-10, Option 2
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }else if(day === 'Tuesday' && hour === 14){
    if (contentOption === 'Option 1') {
        return <span><p className='pbox'>BOX </p> <p style={{textAlign:"center"}} >Rachell green</p>  <p style={{textAlign:"center"}}>14.00-15.00</p> </span>; // Content for Monday 9-10, Option 1
      } else if (contentOption === 'Option 2') {
        return <span><p className='pbox'>BOX </p> <p style={{textAlign:"center"}} >Rachell green</p>  <p style={{textAlign:"center"}}>14.00-15.00</p> </span>;
      }else if (contentOption === 'Option 3') {
        return <span></span>; // Content for Monday 9-10, Option 2
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }else if(day === 'Tuesday' && hour === 18){
    if (contentOption === 'Option 1') {
        return <span></span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>;
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }
  }else if(day === 'Tuesday' && hour === 20){
    if (contentOption === 'Option 1') {
        return <span><p className='crossfitp'>CROSSFIT</p><p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}>20:00 - 21:00</p> </span>; // Content for Monday 9-10, Option 1
      } else if (contentOption === 'Option 2') {
        return <span></span>; 
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span><p className='crossfitp'>CROSSFIT</p><p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}>20:00 - 21:00</p> </span>; // Content for Monday 9-10, Option 1
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }
  
  else if (day === 'Wednesday' && hour === 9) {
    if (contentOption === 'Option 1') {
      return <span><p className='crossfitp'>CROSSFIT</p>  <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}>9.00-11.00</p> </span>; // Content for Monday 9-10, Option 1
    } else if (contentOption === 'Option 2') {
        return <span></span>;
    }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span><p className='crossfitp'>CROSSFIT</p>  <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}>9.00-11.00</p> </span>; // Content for Monday 9-10, Opt
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }
  }else if(day === 'Wednesday' && hour === 11){
    if (contentOption === 'Option 1') {
        return <span></span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>;
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }else if(day === 'Wednesday' && hour === 14){
    if (contentOption === 'Option 1') {
        return <span></span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>;
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }else if(day === 'Wednesday' && hour === 18){
    if (contentOption === 'Option 1') {
        return <span> <p className='yogap'>YOGA</p>  <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}>18.00-19.00</p> </span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>;
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span> <p className='yogap'>YOGA</p>  <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}>18.00-19.00</p> </span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }
  }else if(day === 'Wednesday' && hour === 20){
    if (contentOption === 'Option 1') {
        return <span></span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>; 
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }

  else if (day === 'Thursday' && hour === 9) {
    if (contentOption === 'Option 1') {
      return <span> <p className='meditionp'>MEDITATION</p>  <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}>9.00-11.00</p> </span>; // Content for Monday 9-10, Option 1
    } else if (contentOption === 'Option 2') {
        return <span></span>;
    }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span> <p className='meditionp'>MEDITATION</p>  <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}>9.00-11.00</p> </span>; 
      }
  }else if(day === 'Thursday' && hour === 11){
    if (contentOption === 'Option 1') {
        return <span> <p className='pbox'>BOX</p>  <p style={{textAlign:"center"}}>Rachell green </p> <p style={{textAlign:"center"}}> 11.00-12.00</p></span>;
      } else if (contentOption === 'Option 2') {
        return <span> <p className='pbox'>BOX</p>  <p style={{textAlign:"center"}}>Rachell green </p> <p style={{textAlign:"center"}}> 11.00-12.00</p></span>;
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }else if(day === 'Thursday' && hour === 14){
    if (contentOption === 'Option 1') {
        return <span></span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>;
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }else if(day === 'Thursday' && hour === 18){
    if (contentOption === 'Option 1') {
        return <span> <p className='cardiop'> CARDIO</p> <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}>18.00-19.00</p> </span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>;
      }else if (contentOption === 'Option 3') {
        return <span> <p className='cardiop'> CARDIO</p> <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}>18.00-19.00</p> </span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }
  }else if(day === 'Thursday' && hour === 20){
    if (contentOption === 'Option 1') {
        return <span></span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>; 
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }

  else if (day === 'Friday' && hour === 9) {
    if (contentOption === 'Option 1') {
        return <span></span>;
    } else if (contentOption === 'Option 2') {
        return <span></span>;
    }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }
  }else if(day === 'Friday' && hour === 11){
    if (contentOption === 'Option 1') {
        return <span></span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>;
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }else if(day === 'Friday' && hour === 14){
    if (contentOption === 'Option 1') {
        return <span></span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>;
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }else if(day === 'Friday' && hour === 18){
    if (contentOption === 'Option 1') {
        return <span></span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>;
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }
  }else if(day === 'Friday' && hour === 20){
    if (contentOption === 'Option 1') {
        return <span> <p className='cardiop'>CARDIO</p> <p style={{textAlign:"center"}}>Rachell green</p> <p style={{textAlign:"center"}}> 20.00-21.00</p> </span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>; 
      }else if (contentOption === 'Option 3') {
        return <span> <p className='cardiop'>CARDIO</p> <p style={{textAlign:"center"}}>Rachell green</p> <p style={{textAlign:"center"}}> 20.00-21.00</p> </span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }

  else if (day === 'Saturday' && hour === 9) {
    if (contentOption === 'Option 1') {
        return <span><p className='yogap'>YOGA</p>  <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}> 9.00-11.00</p></span>;
    } else if (contentOption === 'Option 2') {
        return <span></span>;
    }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span><p className='yogap'>YOGA</p>  <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}}> 9.00-11.00</p></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }
  }else if(day === 'Saturday' && hour === 11){
    if (contentOption === 'Option 1') {
        return <span></span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>;
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }else if(day === 'Saturday' && hour === 14){
    if (contentOption === 'Option 1') {
        return <span> <p className='crossfitp'>CROSSFIT</p>  <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}} >14.00-15.00</p> </span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>;
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span> <p className='crossfitp'>CROSSFIT</p>  <p style={{textAlign:"center"}}>Rachell green</p>  <p style={{textAlign:"center"}} >14.00-15.00</p> </span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }else if(day === 'Saturday' && hour === 18){
    if (contentOption === 'Option 1') {
        return <span> <p className='pbox'>BOX</p>  <p style={{textAlign:"center"}}>rachell green </p> <p style={{textAlign:"center"}}>18.00-19.00</p> </span>;
      } else if (contentOption === 'Option 2') {
        return <span> <p className='pbox'>BOX</p>  <p style={{textAlign:"center"}}>rachell green </p> <p style={{textAlign:"center"}}>18.00-19.00</p> </span>;
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }
  }else if(day === 'Saturday' && hour === 20){
    if (contentOption === 'Option 1') {
        return <span></span>; 
      } else if (contentOption === 'Option 2') {
        return <span></span>; 
      }else if (contentOption === 'Option 3') {
        return <span></span>; 
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }

  else if (day === 'Sunday' && hour === 9) {
    if (contentOption === 'Option 1') {
        return <span></span>;
    } else if (contentOption === 'Option 2') {
        return <span></span>;
    }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }
  }else if(day === 'Sunday' && hour === 11){
    if (contentOption === 'Option 1') {
        return <span> <p className='cardiop'> CARDIO</p> <p style={{textAlign:"center"}}>Rachell green</p> <p style={{textAlign:"center"}}> 11.00-12.00</p> </span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>;
      }else if (contentOption === 'Option 3') {
        return<span> <p className='cardiop'> CARDIO</p> <p style={{textAlign:"center"}}>Rachell green</p> <p style={{textAlign:"center"}}> 11.00-12.00</p> </span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }else if(day === 'Sunday' && hour === 14){
    if (contentOption === 'Option 1') {
        return <span></span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>;
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }else if(day === 'Sunday' && hour === 18){
    if (contentOption === 'Option 1') {
        return <span></span>;
      } else if (contentOption === 'Option 2') {
        return <span></span>;
      }else if (contentOption === 'Option 3') {
        return <span></span>;
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }
  }else if(day === 'Sunday' && hour === 20){
    if (contentOption === 'Option 1') {
        return <span></span>; 
      } else if (contentOption === 'Option 2') {
        return <span></span>; 
      }else if (contentOption === 'Option 3') {
        return <span></span>; 
      }else if (contentOption === 'Option 4') {
        return <span></span>;
      }else if (contentOption === 'Option 5') {
        return <span></span>;
      }else if (contentOption === 'Option 6') {
        return <span></span>;
      }

  }


   else {
    return <span>{day} {hour}-{hour + 1} Data</span>; // Default content
  }
}

const formatTime = (hour) => {
    return `${hour}:00`;
  }
  
  export default ScheduleCart;