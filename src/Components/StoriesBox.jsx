import React from 'react'
import './CSS/stories.css'
const StoriesBox = (props) => {
  let text = props.title;
    let result = text.substring(0, 50) + "...";
  return (
    <div>
        <div className='innercart'>
                    <div className='innerimg'>
                        <img src={props.img} alt="" />
                    </div>
                    <p>{result}</p>
                </div>
    </div>
  )
}

export default StoriesBox