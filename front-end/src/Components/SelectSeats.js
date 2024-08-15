import React from 'react'
import SeatInputs from './SeatInputs'
import { seats } from '../data'
import '../Css/SelectSeats.css'
import { useContext} from 'react'
import BsContext from '../Context/BsContext'



const SelectSeats = () => {

  const context = useContext(BsContext)
  const {noOfSeat,changeNoOfSeats} = context
  return (
    <div className='SS_wrapper'>
        <h1 className='SS_heading'>SelectSeats : </h1>
        <div className='SS_main_container'>
            {seats.map((el,index) => {
            return(
                <SeatInputs key={index} text={el} noOfSeat={noOfSeat} changeNoOfSeats={changeNoOfSeats} />
            )
            })}
        </div>
      
    </div>
  )
}

export default SelectSeats
