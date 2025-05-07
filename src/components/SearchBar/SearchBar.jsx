import React from 'react'
import SearchButton from '../SearchButton/SearchButton'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const handleSearch = (query) => {
    console.log(query.search);
    navigate(`/products?search=${query}`);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = (searchText.search ?? '').toString().trim();
    if (!query) return;
    console.log(searchText);
    handleSearch(query);
  }

  const handleChange = (e) => {
    setSearchText({
      ...searchText,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-12">
            <form onSubmit={handleSubmit} className="d-flex">
                <div className="input-group">
                    <input name='search' onChange={handleChange} className="form-control form-control-lg" type="search" placeholder="Search for products..." aria-label="Search" />
                    <SearchButton />
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default SearchBar