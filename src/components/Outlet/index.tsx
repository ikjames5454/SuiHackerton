import React from 'react'
import About from '../hero-sections/About'
import FeaturesBenefit from '../hero-sections/Features-benefit'
import Eligibility from '../hero-sections/Eligibility'
import ParticipantRequirement from '../hero-sections/Participant-requirement'
import IndividualTeam from '../hero-sections/Individual-team'

function index() {
  return (
    <>
      <About/>
      <FeaturesBenefit/>
      <Eligibility/>
      <ParticipantRequirement/>
      <IndividualTeam/>
    </>
  )
}

export default index
