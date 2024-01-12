import React from 'react'
import './CSS/compare.css'

const Compare = () => {
    return (
        <div className="comparemain1">
            <div className='comparemain'>
                <div className="headingcompare">
                    <h3>Compare Phones</h3>
                </div>
                <div className='itemcompare'>
                    <div className="itemss">
                        <div className="inneritem">
                            <input type="text" placeholder='Select your Device' />
                            <button id='btncompare'>Add to Compare</button>

                        </div>


                    </div>
                    <p id='vs'>VS</p>
                    <div className="itemss">
                        <div className="inneritem">
                            <input type="text" placeholder='Select your Device' />
                            <button id='btncompare'>Add to Compare</button>

                        </div>


                    </div>
                </div>


            </div>

        </div>
    )
}

export default Compare