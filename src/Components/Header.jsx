import React from "react";
import logo from '../Assets/images/logo.png';
import { Link } from "react-router-dom";

class Header extends React.Component{
    constructor(props){
        console.log("props from parents",props);
        super(props);
        this.state = {
            Home : 'Home',
            About : 'About',
            Services : 'Services',
            Contact : 'Contact',
        }
    }
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#"><img src={logo} alt="Logo" height="60px" /></a> */}
    <Link to="/Home" class="navbar-brand"><img src={logo} alt="Logo" height="60px" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">{this.state.Home}</a> */}
          <Link to="/Home" class="nav-link">{this.state.Home}</Link>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">{this.state.About}</a> */}
          <Link to="/About" class="nav-link">{this.state.About}</Link>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">{this.state.Services}</a> */}
          <Link to="/Services" class="nav-link">{this.state.Services}</Link>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">{this.state.Contact}</a> */}
          <Link to="/Contact" class="nav-link">{this.state.Contact}</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        )
    }
}

export default Header;