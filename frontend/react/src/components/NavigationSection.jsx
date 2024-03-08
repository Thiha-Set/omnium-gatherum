import React from 'react'
import ServiceItem from './ServiceItem'

function NavigationSection() {
  return (
    <main className='bg-light p-4 mt-5'>
        <div className='d-flex overflow-auto flex-column justify-content-center'>
            <ServiceItem title={"Lorem Ipsum"} thumbnailSrc={"https://placehold.co/250x250"}/>
            <ServiceItem title={"Lorem Ipsum"} thumbnailSrc={"https://placehold.co/250x250"}/>
            <ServiceItem title={"Lorem Ipsum"} thumbnailSrc={"https://placehold.co/250x250"}/>
            <ServiceItem title={"Lorem Ipsum"} thumbnailSrc={"https://placehold.co/250x250"}/>
            <ServiceItem title={"Lorem Ipsum"} thumbnailSrc={"https://placehold.co/250x250"}/>
        </div>
    </main>
  )
}

export default NavigationSection