import React from 'react'
import PlateLogo from '../imgs/gim_logo.png'
import { Contexts } from '../Contexts/Context'
import { useContext } from 'react'

const Header = () => {
  const {setContactModal} = useContext(Contexts)
  return (
    <header>
        <a href='/'><img src={PlateLogo} alt="" width="150px" /></a>
        <ul>
            <li><a href='#pricing'><i class="fa-solid fa-hand-holding-dollar"></i><span> Pricing</span></a></li>
            <li><button onClick={() => setContactModal(true)}><i class="fa-solid fa-envelope" style={{marginRight: '10px'}}></i><span>Contact Us</span></button></li>
        </ul>
    </header>
  )
}

export default Header
