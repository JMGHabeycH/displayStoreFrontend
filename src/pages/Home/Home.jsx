import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/create`);
  }
  
  
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='container bg-white d-flex flex-column justify-content-center align-items-center rounded shadow-sm gap-3 p-4'  style={{ width: '500px', height: '300px' }}>
            <h1 className='display-4 fw-bold'>BuyMe App</h1>
            <div className='container-lg'>
                <SearchBar  />
            </div>
            <div className="text-center mt-5">
              <button className="btn btn-primary btn-lg" onClick={handleClick}>
                Create product
              </button>
            </div>
        </div>
    </div>
  )
}

export default Home