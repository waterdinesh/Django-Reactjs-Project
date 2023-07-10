import React from 'react';
import PersonalTraining from './PersonalTraining';
import MotionImage from './MotionImage';
import MotionWord from './MotionWord';
import Fitness from '../common/fitness/Fitness';
import TopPersonalTrainer from './TopPersonalTrainer';

const PersonalTrainerAsmbel = () => {
  return (
    <div>
      
       <TopPersonalTrainer/>
        <MotionWord/>
        <MotionImage/>
        <PersonalTraining/>
          <Fitness/>
    </div>
  )
}

export default PersonalTrainerAsmbel