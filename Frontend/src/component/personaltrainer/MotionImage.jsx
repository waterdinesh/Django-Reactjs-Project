import React from 'react';
import '../personaltrainer/motionimage.css';
import imgt1 from '../images/trainer/Trainer-1@2x.jpg';
import imgt2 from '../images/trainer/Trainer-2@2x.jpg';
import imgt3 from '../images/trainer/Trainer-3@2x.jpg';
import imgt4 from '../images/trainer/Trainer-4@2x.jpg';
import imgt5 from '../images/trainer/Trainer-5@2x.jpg';
import imgt6 from '../images/trainer/Trainer-6@2x.jpg';

function MotionImage() {
  
  return (
    <>
    <div className='motionimagetxt'>
        <h1>TRAINERS</h1>
        <p>Our super heros who makes you sweat.</p>
        <button className='motionimagebtn' >VIEW ALL</button>
    </div>
     <div className='body'>
<div className='allcontainer1'>
        <div className='slider-container1'>
            <div className='slide-image'>
            <img src={imgt1} alt=""  className='img' />
             <div className='text'>
                 <h1>TYRONE LOWE</h1> 
             </div>
            </div>
            <div className='slide-image'>
            <img src={imgt2} alt=""  className='img' />
            <div className='text'>
                 <h1>ANNE MCFADDEN</h1> 
             </div>
            </div>
            <div className='slide-image'>
            <img src={imgt3} alt="" className='img'  />
            <div className='text'>
                 <h1>ALEXA ROLLINS</h1> 
             </div>
            </div>
            <div className='slide-image'>
            <img src={imgt4} alt=""  className='img' />
            <div className='text'>
                 <h1>ALIAH PITTS</h1> 
             </div>
            </div>
            <div className='slide-image'>
            <img src={imgt5} alt=""  className='img' />
            <div className='text'>
                 <h1>KASEY BURT</h1> 
             </div>
            </div>
            <div className='slide-image'>
            <img src={imgt6} alt=""  className='img' />
            <div className='text'>
                 <h1>EDITH KOENIG</h1> 
             </div>
            </div>
            <div className='slide-image'>
            <img src={imgt1} alt=""  className='img' />
             <div className='text'>
                 <h1>TYRONE LOWE</h1> 
             </div>
            </div>
            <div className='slide-image'>
            <img src={imgt2} alt=""  className='img' />
            <div className='text'>
                 <h1>ANNE MCFADDEN</h1> 
             </div>
            </div>
            <div className='slide-image'>
            <img src={imgt3} alt="" className='img'  />
            <div className='text'>
                 <h1>ALEXA ROLLINS</h1> 
             </div>
            </div>
            <div className='slide-image'>
            <img src={imgt4} alt=""  className='img' />
            <div className='text'>
                 <h1>ALIAH PITTS</h1> 
             </div>
            </div>
            <div className='slide-image'>
            <img src={imgt5} alt=""  className='img' />
            <div className='text'>
                 <h1>KASEY BURT</h1> 
             </div>
            </div>
            <div className='slide-image'>
            <img src={imgt6} alt=""  className='img' />
            <div className='text'>
                 <h1>EDITH KOENIG</h1> 
             </div>
            </div>
        </div>
    </div>
    </div>

    </>
   
    
)
}

export default MotionImage;


