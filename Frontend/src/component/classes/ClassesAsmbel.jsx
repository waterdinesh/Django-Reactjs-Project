import React from 'react';
import TopClasses from './TopClasses';
import JoinClub from '../common/joinclub/JoinClub';
import Fitness from '../common/fitness/Fitness';
import Adress from '../common/adress/Adress';
import TimerHeart from '../common/timerheart/TimerHeart';
import Excercise from './Excercise';

const ClassesAsmbel = () => {
  return (
    <div>
      <TopClasses/>
      <Excercise/> 
      <JoinClub/>
      <TimerHeart/>
      <Fitness/>
      <Adress/>
    </div>
  )
}

export default ClassesAsmbel