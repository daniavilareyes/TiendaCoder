import { Link } from 'react-router-dom'
import './Navbar.css'
import { pedirRecursosByCategory } from './Asyn'
import { useState } from 'react'
import ItemList from './Item'

const Menu = () => {

    return (
    <>
    <nav class="navbar navbar-expand-lg barramenu">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Tienda Avila</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to='/'  class="nav-link active">Home</Link>
          </li>
          <li class="nav-item">
            <Link to='/categoria/NuevosProductos' class="nav-link active">Nuevos Productos</Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Colecciones
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link to='/categoria/Basicos' class="nav-link active">Basicos</Link></li>
              <li><Link to='/categoria/Enteros' class="nav-link active">Enteros</Link></li>
              <li><Link to='/categoria/Niños' class="nav-link active">Niños</Link></li>
            </ul>
          </li>
          <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar"></input>
          <button class="btn btn-outline-secondary" type="submit">Buscar</button>
        </form>
        </ul>
        <button className='botoncarrito' >
          <span class="material-symbols-outlined">shopping_cart </span>
        </button>
      </div>
    </div>
  </nav>
   
   </>
)}


export default Menu