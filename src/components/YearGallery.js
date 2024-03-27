import React from 'react'
import StackCard from "./StackCard"
function YearGallery() {
  return (
    <div>
        <p className='flex flex-row'>_____<p style={{margin:'5px'}}>Year 2024</p>_____</p>
        <div className='flex flex-row flex-wrap'>
        <StackCard/>
        <StackCard/>
        <StackCard/>
        <StackCard/>
        <StackCard/>
        
        </div>
    </div>
  )
}

export default YearGallery