import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'


const Home = () => {
  
  
  
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='container bg-white d-flex flex-column justify-content-center align-items-center rounded shadow-sm gap-3 p-4'  style={{ width: '500px', height: '300px' }}>
            <h1 className='display-4 fw-bold'>BuyMe App</h1>
            <div className='container-lg'>
                <SearchBar  />
            </div>
        </div>
    </div>
  )
}

export default Home