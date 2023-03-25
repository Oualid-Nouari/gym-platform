import React, { useContext } from 'react'
import BodyBuilder from '../imgs/body-builder.png'
import { Contexts } from '../Contexts/Context'

const Main = () => {
  const {setOpenBpModal} = useContext(Contexts)
  return (
    <div className='hero-section'>
        <div className='image'></div>
        <div className='hero-overlay'></div>
        <main>
            <div className='main-left-side'>
                <h1 className='line1'>MAKE YOUR</h1>
                <h1 className='line2'>BODY SHAPE</h1>
                <p>With us, No Other Excuses To Make Your Body Looks Like The Rock &#128515;</p>
                <button onClick={() => setOpenBpModal(true)}>Checkout Exercices</button>
            </div>
            <div className='main-right-side'></div>
            <img src={BodyBuilder} alt="" className='body-builder' />
        </main>
    </div>
  )
}

export default Main
