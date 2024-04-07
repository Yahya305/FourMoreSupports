import React from 'react'
import Card from './Card'

function OurServices() {
  return (
    <section className='ourservices-container'>
        <div className='cards'>
            <Card variant='secondary' imgSrc='/Card1Logo.png' buttonContent='Learn More' headingContent='Support Coordination' descContent='Discover how our tailored Support Coordination can guide you through your NDIS journey, ensuring you leverage the full potential of your plan for a better, more empowered life in Adelaide.' />
            <Card variant='primary' imgSrc='/Card1Logo.png' buttonContent='Learn More' headingContent='Support Coordination' descContent='Discover how our tailored Support Coordination can guide you through your NDIS journey, ensuring you leverage the full potential of your plan for a better, more empowered life in Adelaide.' />
            <Card variant='secondary' imgSrc='/Card1Logo.png' buttonContent='Learn More' headingContent='Support Coordination' descContent='Discover how our tailored Support Coordination can guide you through your NDIS journey, ensuring you leverage the full potential of your plan for a better, more empowered life in Adelaide.' />
        </div>
      <div className='background-lines'></div>
    </section>
  )
}

export default OurServices
