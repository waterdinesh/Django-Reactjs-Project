import React from 'react';
import TopSchedule from './TopSchedule';
import ScheduleChart from './ScheduleCart';
import Fitness from '../common/fitness/Fitness';
import Adress from '../common/adress/Adress';

const ScheduleAsmbel = () => {
  return (
    <div>
         <TopSchedule/>
         <ScheduleChart/>
         <Fitness/>
      <Adress/>
    </div>
  )
}

export default ScheduleAsmbel