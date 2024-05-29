import React from 'react'
import './CSS/news.css'
const News = () => {
    const imgurl1 = 'https://www.91-cdn.com/hub/wp-content/uploads/2024/05/Realme-12-Pro-1.jpg'
    const imgurl2 = 'https://www.91-cdn.com/hub/wp-content/uploads/2024/05/galaxy-m35-launched.jpg'
    const imgurl3 = 'https://www.91-cdn.com/hub/wp-content/uploads/2024/05/realme-gt-6t-launch-1.jpg'
    const imgurl4 = 'https://www.91-cdn.com/hub/wp-content/uploads/2024/05/Infinix-GT-20-Pro-3.jpg'
    return (
        <div className="news">
            <div className='news9'>
                <h3>Latest News</h3>
            </div>
            <div className='news1'>
                <div className='news2'>
                    <div className='news3'>
                        <img src={imgurl1} alt="" />
                    </div>
                    <div className='news4'>
                        <p>Realme GT 6 could be the first phone from the brand with AI features, suggests retail box leak</p>
                    </div>
                </div>
                <div className='news5'>
                    <div className='news6'>
                        <div className='news7'>
                            <img src={imgurl2} alt="" />
                        </div>
                        <div className='news8'>
                            <p>Samsung Galaxy M35 5G with 6,000mAh battery, Exynos 1380 SoC launched: price, specs</p>
                        </div>
                    </div>
                    <div className='news6'>
                        <div className='news7'>
                            <img src={imgurl3} alt="" />
                        </div>
                        <div className='news8'>
                            <p>Realme 13 Pro+ 5G could offer up to 12GB RAM; storage, colour options leaked</p>
                        </div>
                    </div>
                    <div className='news6'>
                        <div className='news7'>
                            <img src={imgurl4} alt="" />
                        </div>
                        <div className='news8'>
                            <p>Infinix GT 20 Pro goes on sale in India today: price, specs, should you buy?</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>)
}

export default News