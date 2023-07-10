import React from 'react'
import TopGift from './TopGift'
import TopGiftSecond from './TopGiftSecond'
import TopgiftThird from './TopgiftThird'
import TopgiftFour from './TopgiftFour'
import TopgiftFive from './TopgiftFive'
import Fitness from '../common/fitness/Fitness';
// import BuyGift from './BuyGift'
const TopGiftAsmbel = () => {
  return (
    <div>
        <TopGift/>
        <TopGiftSecond/>
        <TopgiftThird/>
        <TopgiftFour/>
        <TopgiftFive/>
        <Fitness/>
        {/* <BuyGift/> */}
    </div>
  )
}

export default TopGiftAsmbel