import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const SpecialOffer = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map(service => (
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default SpecialOffer