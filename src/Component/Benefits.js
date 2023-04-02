import React from 'react'
import AllBenefits from './AllBenefits'
import BenefitsNav from './BenefitsNav'
import FirstBenefits from './FirstBenefits'

const Benefits = () => {
  return (
    <div style={{height:"100vh"}}>
        <BenefitsNav/>
        <FirstBenefits/>
        <AllBenefits/>
    </div>
  )
}

export default Benefits