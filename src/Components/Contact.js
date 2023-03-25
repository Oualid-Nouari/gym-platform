import React from 'react'
import { Contexts } from '../Contexts/Context'
import { useContext } from 'react'

const Contact = () => {
    const {setContactModal} = useContext(Contexts)
  return (
    <div>
        <div className='contact-overlay'></div>
        <div className='contact-us'>
            <i onClick={() => setContactModal(false)} class="fa-solid fa-xmark" style={{position: 'absolute', top: '10px', right: '10px', cursor: 'pointer'}}></i>
            <form>
                <div>
                    <label>E-mail</label>
                    <input type="email" placeholder='example@gmail.com' />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Password..." />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact
