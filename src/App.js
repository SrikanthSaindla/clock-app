import React,{useEffect,useState} from 'react'
import "./App.css"
 

const App = () => {
const[hr,setHr]=useState()
const[min,setMin]=useState()
const[sec,setSec]=useState()
  useEffect(()=>{
     
     let interval= setInterval(() => {
        let clock=new Date()
      let hr=clock.getHours()
      let min=clock.getMinutes()
      let sec=clock.getSeconds()

      let cal_hr=(hr*30)+(min/2)
      setHr(cal_hr)
      let cal_min=(min*6)+(sec/10)
      setMin(cal_min)
      let cal_sec=(sec*6)
      setSec(cal_sec)

      return () => clearInterval(interval);
    },[]);
     
  })
  return (
    <div className='clock'>
      <div className='hour hand'
      style={{transform:`rotate(${hr}deg)`}}></div>
      <div className='minute hand'
      style={{transform:`rotate(${min}deg)`}}></div>
      <div className='second hand'
      style={{transform:`rotate(${sec}deg)`}}></div>
      
    </div>
  )
}

export default App

