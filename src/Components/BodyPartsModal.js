import React, {useContext, useEffect, useState } from 'react';
import { Contexts } from '../Contexts/Context';
import { fetchExercicesData, exercicesOptions } from '../Data/exercicesData';
import { motion } from 'framer-motion';
import Back from '../imgs/back.png'
import Cardio from '../imgs/cardio.png'
import LeftArm from '../imgs/left-arm.png'
import RightArm from '../imgs/right-arm.png'
import Leg from '../imgs/leg.png'
import Chest from '../imgs/chest.png'
import Neck from '../imgs/neck.png'
import Shoulders from '../imgs/shoulders.png'
import Abs from '../imgs/abs.png'


const BodyPartsModal = () => {
  const {setOpenBpModal, setOpenBackEx, setOpenCardioEx, setOpenChestEx,
    setOpenLowerArmsEx, setOpenLowerLegsEx, setOpenNeckEx, setOpenShouldersEx,
    setOpenWaistEx, setOpenUpperArmsEx,setOpenUpperLegsEx} = useContext(Contexts)
    const [bodyParts, setBodyParts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          const bodyPartsData = await fetchExercicesData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercicesOptions);
          setBodyParts(bodyPartsData)
        }
        fetchData()
      }, [])
  return (
    <div>
      <div className='modal-overlay'>.</div>
      <section className='bp-modal'>
        <i style={{margin: '10px 10px 0 0' }} class="fa-solid fa-xmark" onClick={() => setOpenBpModal(false)}></i>
        <h1 style={{marginTop: '20px'}}>Body Parts</h1>
        <div className='b-parts'>
          <span onClick={() => {setOpenBackEx(true); setOpenBpModal(false)}}><motion.article animate={{x: 0}} initial={{x: -70}} transition={{type: 'tween', duration: .2}}><img src={Back} alt="" className='bp-img' />{bodyParts[0]}</motion.article></span>
          <span onClick={() => {setOpenCardioEx(true); setOpenBpModal(false)}} ><motion.article animate={{x: 0}} initial={{x: 70}} transition={{type: 'tween', duration: .2}}><img src={Cardio} alt="" className='bp-img' />{bodyParts[1]}</motion.article></span>
          <span onClick={() => {setOpenChestEx(true); setOpenBpModal(false)}} ><motion.article animate={{x: 0}} initial={{x: -70}} transition={{type: 'tween', duration: .2}}><img src={Chest} alt="" className='bp-img' />{bodyParts[2]}</motion.article></span>
          <span onClick={() => {setOpenLowerArmsEx(true); setOpenBpModal(false)}} ><motion.article animate={{x: 0}} initial={{x: 70}} transition={{type: 'tween', duration: .2}}><img src={LeftArm} alt="" className='bp-img' />{bodyParts[3]}</motion.article></span>
          <span onClick={() => {setOpenLowerLegsEx(true); setOpenBpModal(false)}} ><motion.article animate={{x: 0}} initial={{x: -70}} transition={{type: 'tween', duration: .2}}><img src={Leg} alt="" className='bp-img' />{bodyParts[4]}</motion.article></span>
          <span onClick={() => {setOpenNeckEx(true); setOpenBpModal(false)}} ><motion.article animate={{x: 0}} initial={{x: 70}} transition={{type: 'tween', duration: .2}}><img src={Neck} alt="" className='bp-img' />{bodyParts[5]}</motion.article></span>
          <span onClick={() => {setOpenShouldersEx(true); setOpenBpModal(false)}} ><motion.article animate={{x: 0}} initial={{x: -70}} transition={{type: 'tween', duration: .2}}><img src={Shoulders} alt="" className='bp-img' />{bodyParts[6]}</motion.article></span>
          <span onClick={() => {setOpenUpperArmsEx(true); setOpenBpModal(false)}} ><motion.article animate={{x: 0}} initial={{x: -70}} transition={{type: 'tween', duration: .2}}><img src={RightArm} alt="" className='bp-img' />{bodyParts[7]}</motion.article></span>
          <span onClick={() => {setOpenUpperLegsEx(true); setOpenBpModal(false)}} ><motion.article animate={{x: 0}} initial={{x: -70}} transition={{type: 'tween', duration: .2}}><img src={Leg} alt="" className='bp-img' />{bodyParts[8]}</motion.article></span>
          <span onClick={() => {setOpenWaistEx(true); setOpenBpModal(false)}} ><motion.article animate={{x: 0}} initial={{x: 70}} transition={{type: 'tween', duration: .2}}><img src={Abs} alt="" className='bp-img' />{bodyParts[9]}</motion.article></span>
        </div>
      </section>
    </div>
  )
}

export default BodyPartsModal
