import React from 'react'
import ChooseMemberFitness from './ChooseMemberFitness'

import Membership from './Membership'
import ContactBook from '../contact/ContactBook'

const MembershipAssembel = () => {
  return (
    <div>
      <Membership/>
        <ChooseMemberFitness/>
    
        <ContactBook/>
    </div>
  )
}

export default MembershipAssembel