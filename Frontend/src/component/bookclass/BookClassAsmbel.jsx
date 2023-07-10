import React from 'react';
import Fitness from '../common/fitness/Fitness';
import TimerHeart from '../common/timerheart/TimerHeart';
import TopBook from './TopBook';
import SlotBook from './SlotBook';

const BookClassAsmbel = () => {
  return (
    <div>
        <TopBook/>
        <SlotBook/>
        <Fitness/>
        <TimerHeart/>
    </div>
  )
}

export default BookClassAsmbel