import React, { useContext } from 'react'
import RadioComponent from './RadioComponent'
import { slots } from '../data'
import '../Css/TimeSchedule.css'
import BsContext from '../Context/BsContext'
const TimeSchedule = () => {
  const context =useContext(BsContext)

  const {time,changeTime} = context

  const handleChangeItem = (vaL) => {
    changeTime(vaL)

    window.localStorage.setItem("slot",vaL)
  }
  return (
    <>
    <div className='Slot_container'>
        <h1 className='TS_heading'>Select a Schedule</h1>
        <div className='TS_main_container'>
            {slots.map((el,index)=>{
                return(
                    <RadioComponent text={el} key={index} data={time} changeSelection={handleChangeItem}/>
                )
            })}
        </div>
      
    </div>
    </>
  )
}

export default TimeSchedule
