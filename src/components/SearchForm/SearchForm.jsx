import React, {useRef, useEffect} from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import "./SearchForm.css";

const SearchForm = () => {
const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();
  return (
    <div className = 'search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-from'>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type="text" className='form-control' placeholder='The Lord of The Ring'/>
              <button type = "submit" className='flex flex-c'>
                <FaSearch className='text-purple' size = {32} ></FaSearch>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm