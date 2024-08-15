import React,{useContext} from 'react'
import { moviesList } from '../data'
import RadioComponent from './RadioComponent'
import '../Css/SelectMovie.css'
import BsContext from '../Context/BsContext'
const SelectMovie = () => {

  const SelectMovie = () => {
    const Context = useContext(BsContext)

    const {movie,changeMovie} = Context

    const handleChangeMovie = ( vaL) => {
      changeMovie(vaL)

      window.localStorage.setItem("movie",vaL)
    }

  }
  return (
    <>
    <h1 className='SM_heading'> Select A Movie :- </h1>
    <div className='SM_main_container'>
      {moviesList.map((el,index)=>{
        return (
            <RadioComponent text={el} key={index}/>
        )
      })}
      </div>
    </>
  )
}

export default SelectMovie
