import React from 'react'
import "../scss/main.scss"
import CustomAccordion from './CustomAccordion'

const Form = () => {
    // let arr = [{
    //     ques: "the width of the road in front of the house is a minimum of 3 meters.",
    //     yes: 0.5,
    //     no: 0,
    //     na: 0.5,
    //     weight: 0.5,
    //     totalWeight: 1.5,
    // }]
    return (
        <>
            <div className='main'>
                <h2 className='ms-2'>Tool</h2>
                <CustomAccordion />
            </div>
        </>
    )
}

export default Form