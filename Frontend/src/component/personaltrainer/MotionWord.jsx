import React from 'react';
import '../personaltrainer/motionword.css';
import motoimg from '../images/personaltrainer/circle-motto.svg'
import motoimg2 from "../images/personaltrainer/Personal-Training-1@2x.jpg";

const MotionWord = () => {
  return (
    <>
     <div className="motionwordall">
      <h1 className="personltrainerh1">STRENGTH IS A STATE OF MIND</h1>
    </div>
    <div className='motionworddown'>
      <div className='motionworddownleft'>
        <div className='motionworddownleftinside'>
        <div className='motionworddownleftinside1'>
        <h2>SCULPT YOUR BODY</h2>
        <p>City Gym is the best place to sculpt your body. Amazing amenities, healthy bar and professional 
            personal trainings or group classes — all these will help you on the way to your best shape and wellbeing. Start your journey today by reaching out to us. 
            Today is the day. City Gym offers the best amenities including swimming pools and a lot more.</p>
        </div>
        <div className='motionworddownleftinside2'>
        <h2>MAKE IT PERSONAL</h2>
        <p>City Gym is the best place to sculpt your body. Amazing amenities, healthy bar and professional 
            personal trainings or group classes — all these will help you on the way to your best shape and wellbeing. Start your journey today by reaching out to us. 
            Today is the day. City Gym offers the best amenities including swimming pools and a lot more.</p>
        </div>
        </div>
       
        
      </div>
      <div className='motionworddownright'>
      <img src={motoimg2} alt="" style={{ height: "500px" }} className='motoimg2img' />
      <img src={motoimg} alt="" className="image-rotation"style={{ transform: "translateX(-50px)" }}  />
      </div>
    </div>
    </>
   
  );
};

export default MotionWord;
