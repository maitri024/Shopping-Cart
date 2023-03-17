import React, { useEffect, useState } from 'react'
import './covid.css';

const Covid = () => {
 
  const [data,setData]=useState([]);
  const getCovidData=async ()=>
  { 
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '20a62c0289mshbc4638861bea9b4p190a75jsndee19b084ef3',
        'X-RapidAPI-Host': 'covid-19-india2.p.rapidapi.com'
      }
    };
    
    const response=await fetch('https://covid-19-india2.p.rapidapi.com/details.php', options)
    let actualData=await response.json();
    console.log(actualData.Assam)
    setData(actualData.Assam)

  }

  useEffect(()=>{
     getCovidData();
  },[]);
  return (
    <div>
      <h1>🔴 LIVE</h1>
      <h1>COVID-19 TRACKER</h1>
      <div className='container'>

      <ul>
        <li className='card'>
          <div className='card_main'>
            <div className='card_inner'>
              <p className='card_name'>
                <span>Our </span>Country
              </p>
              <p className='card_total card_small'>ASSAM</p>
            </div>
          </div>
        </li>
        <li className='card'>
          <div className='card_main'>
            <div className='card_inner'>
              <p className='card_name'>
                <span>TOTAL </span>CURED
              </p>
              <p className='card_total card_small'>{data.cured}</p>
            </div>
          </div>
        </li>
        <li className='card'>
          <div className='card_main'>
            <div className='card_inner'>
              <p className='card_name'>
                <span>TOTAL </span>SLNO
              </p>
              <p className='card_total card_small'>{data.slno}</p>
            </div>
          </div>
        </li>
        </ul>
        <ul>

        <li className='card'>
          <div className='card_main'>
            <div className='card_inner'>
              <p className='card_name'>
                <span>TOTAL </span>CONFIRMED
              </p>
              <p className='card_total card_small'>{data.confirm}</p>
            </div>
          </div>
        </li>
        <li className='card'>
          <div className='card_main'>
            <div className='card_inner'>
              <p className='card_name'>
                <span>TOTAL </span>DEATHS
              </p>
              <p className='card_total card_small'>{data.death}</p>
            </div>
          </div>
        </li>
        <li className='card'>
          <div className='card_main'>
            <div className='card_inner'>
              <p className='card_name'>
                <span>TOTAL </span>CASES
              </p>
              <p className='card_total card_small'>{data.total}</p>
            </div>
          </div>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Covid

// confirm
// : 
// "746100"
// cured
// : 
// "738065"
// death
// : 
// 8035
// slno
// : 
// 4
// state
// : 
// "Assam"
// total
// : 
// 1492200