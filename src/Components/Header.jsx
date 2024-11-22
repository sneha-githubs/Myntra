import React from 'react'
import { Search } from './Search'
import logo from '../assets/logo.png'

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#"><img src={logo} width={60}/></a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Todo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Recipes</a>
        </li>
        
      </ul>
      <Search/>
    </div>
  </div>
</nav>
      </header>
  )
}
