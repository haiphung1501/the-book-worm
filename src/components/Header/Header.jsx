import React from 'react'
import NavBar from '../NavBar/NavBar'
import SearchFrom from '../SearchForm/SearchForm'
import "./Header.css"

const Header = () => {
  return (
    <div className = 'holder'>
      <header className = 'header'>
        <NavBar />
        <div className = 'header-content flex flex-c text-center text-white'>
          <h2 className = 'header-title text-capitalize'>Find your book of choice</h2><br />
          <p className = 'header-text fs-18 fw-3' >Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit. Natus recusandae voluptate inventore nostrum doloremque tempora
          , magnam asperiores commodi quae delectus repellendus sunt cumque eum in quasi
           architecto alias, a dolor.  </p>
           <SearchFrom/>
        </div>
      </header>
    </div>
  )
}

export default Header