import React, { useContext } from 'react'
import { Contexts } from '../Contexts/Context'
import { fetchExercicesData, exercicesOptions } from '../Data/exercicesData'
import {useState, useEffect} from 'react'
import { motion } from 'framer-motion'

const UpperArms = () => {
  const [Exercices, setExercices] = useState([])
  const [moveToggle, setMoveToggle] = useState(false)
  const {setOpenUpperArmsEx} = useContext(Contexts)
  useEffect(() => {
    const fetchBackExercices = async () => {
      if (!moveToggle) {
        const backData = await fetchExercicesData('https://exercisedb.p.rapidapi.com/exercises', exercicesOptions);
        setExercices(backData)
        setExercices((exercise) =>
        exercise.filter((ex) => ex.bodyPart === 'upper arms')
      );
      } else if (moveToggle) {
        const backData = await fetchExercicesData('https://exercisedb.p.rapidapi.com/exercises', exercicesOptions);
        setExercices(backData)
        setExercices((exercise) =>
        exercise.filter((ex) => ex.bodyPart === 'upper arms' && ex.equipment === 'body weight')
      );
      }
    }
    fetchBackExercices();
  }, [moveToggle])
  const toggleIt = () => {
    setMoveToggle(!moveToggle)
  }
  return (
    <div className='ex-container'>
      <i onClick={() => setOpenUpperArmsEx(false)} class="fa-solid fa-circle-xmark"></i>
      <h1 className='exercices-header' style={{padding: '30px 0', textAlign: 'center'}}>Exercices of : Upper Arms</h1>
      <div className='toggle'>
        <span>All</span>
        <div className='toggle-btn' onClick={toggleIt}><motion.div animate={{x: moveToggle ? 31 : 0}} transition={{type: 'tween', duration: .4}} className='toggle-circle'></motion.div></div>
        <span>Body Weight</span>
      </div>
      <div className='exercices'>
      {Exercices.map((exer) => {
        return (
          <div className='exercice'>
            <h3 style={{fontWeight: 'lighter'}}>{exer.name}</h3>
            <img src={`${exer.gifUrl}`} alt='' />
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default UpperArms
