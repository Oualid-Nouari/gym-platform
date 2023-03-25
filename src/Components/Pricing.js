import React, { useState } from 'react'

const Pricing = () => {
  const [subscribed, setSubscribed] = useState('')
  return (
    <div id='pricing' className='pricing'>
        <h1 className='title'>Pricing</h1>
        <div className='pricingSection'>
          <div className='freeTrial'>
            <h3>Free</h3>
            <p>We offer a free trial for you</p>
            <h1 className='price'>$0</h1>
            <ul>
            <li><i class="fa-solid fa-circle-check"></i> +200 exercices</li>
            <li><i class="fa-solid fa-circle-check"></i> No Analytics</li>
            </ul>
            <button onClick={() => setSubscribed('free')} style={{backgroundColor: subscribed === 'free' ? '#9ad813' : 'white'}}>{subscribed === 'free' ? 'Subscibed' : "Let's Go"}</button>
          </div>
          <div className='bigOne'>
          <h3>Premium</h3>
            <p>We Offer also a Premium plan For You</p>
            <h1 className='price'>$12</h1>
            <ul>
            <li><i class="fa-solid fa-circle-check"></i> +1300 exercices</li>
            <li><i class="fa-solid fa-circle-check"></i> Advanced Analytics</li>
            </ul>
            <button onClick={() => setSubscribed('yesP')} style={{backgroundColor: subscribed === 'yesP' ? '#9ad813' : 'white'}}>{subscribed === 'yesP' ? 'Subscibed' : "Yes Please"}</button>
          </div>
          <div className='custom'>
          <h3>Custom</h3>
            <p>We offer a Custom Plan for you</p>
            <h1 className='price'>-</h1>
            <ul>
            <li><i class="fa-solid fa-circle-check"></i> +1300 exercices</li>
            <li><i class="fa-solid fa-circle-check"></i>Customized Analytics</li>
            </ul>
            <button onClick={() => setSubscribed('callus')} style={{backgroundColor: subscribed === 'callus' ? '#9ad813' : 'white'}}>{subscribed === 'callus' ? 'Subscibed' : "Call Us"}</button>
          </div>
        </div>
    </div>
  )
}

export default Pricing
