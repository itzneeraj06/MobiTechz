import React from 'react'
import '../Components/CSS/stories.css'
import StoriesBox from './StoriesBox';
const Stories = (props) => {

    const url1 = 'https://images.indianexpress.com/2024/05/Galaxy-Watch-Express-Photo-2.jpg'
    const url2 = "https://images.indianexpress.com/2024/05/Fitbit-Ace-LTE.jpg";
    const url3 = "https://images.indianexpress.com/2024/05/ChatGPT-Express-Photo.jpg";
    const url4 = "https://images.indianexpress.com/2024/05/sony-ps5-slim.jpg";
    const url5 = "https://images.indianexpress.com/2024/05/Untitled-design-2024-05-29T181045.823.jpg";
    const url6 = "https://images.indianexpress.com/2024/05/Vivobook-S16.jpg";
    const url7 = "https://i.gadgets360cdn.com/large/pixel_8_pro_thumb_1710759666893.jpg?downsize=160:120&output-quality=80&output-format=webp";
    const url8 = "https://i.gadgets360cdn.com/large/apple_logo3_thumb_1717050105897.jpg?downsize=160:120&output-quality=80&output-format=webp";


    return (
        <div className='mainn'>
            <h1>{props.heading}</h1>
            <div className="cart">
                <StoriesBox img={url1} title="Samsung Galaxy Watch to get AI powered health tracking features" />
                <StoriesBox img={url2} title="Google announces Fitbit Ace LTE, a WearOS powered smartwatch for kids
The Fitbit Ace LTE is a WearOS powered smartwatch for kids that offers features like calling and location tracking. It is currently available for pre-order for Rs $299.95."/>
                <StoriesBox img={url3} title="OpenAI brings Custom GPTs, memory, vision and more to free chatGPT users
ChatGPT maker OpenAI says users on the free tier can now use GPT-4o features like data analysis," />
                <StoriesBox img={url4} title="Sony stresses PlayStation user engagement as hardware sales taper off" />
                <StoriesBox img={url5} title="If AI can do your job, maybe it can also replace your CEO" />
                <StoriesBox img={url6} title="ASUS Vivobook S16 OLED review: Great performance meets stunning display" />
                <StoriesBox img={url7} title="Google Pixel 8, Pixel 8a Get Android AICore Update Ahead of Gemini Nano Rollout: Report
Two new toggles spotted in the developer options menu on the Pixel 8 and Pixel 8a could allow users to toggle Gemini Nano features on and off." />
                <StoriesBox img={url8} title="Apple’s On-Server Generative AI Features to Use Confidential Computing for Privacy: Report
As per the report, the company’s Apple Chips in Data Centres (ACDC) project will enable confidential computing." />

            </div>

        </div>
    )
}

export default Stories