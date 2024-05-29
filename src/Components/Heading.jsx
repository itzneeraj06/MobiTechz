import React from 'react'
import './CSS/heading.css'
function Heading(props) {
    return (
        <div className='heading1'>
            <div className="heading2">
                {props.heading}
            </div>
            <hr />
        </div>
    )
}

export default Heading