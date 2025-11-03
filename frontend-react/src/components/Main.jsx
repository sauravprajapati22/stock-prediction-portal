import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
    
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light lead'>
                Stock prediction applications use algorithms, including machine learning and AI, to forecast stock prices and provide trading insights. These apps analyze historical data, market trends, and technical indicators, though they are designed as informational tools and do not guarantee future performance or serve as financial advice.  
            </p>
            <Button text="Login" class="btn-outline-info" />
        </div>
      </div>
      
    </>
  )
}

export default Main
