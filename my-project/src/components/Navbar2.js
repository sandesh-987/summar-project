import React from 'react'

const Navbar2 = () => {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">food categories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">lunch</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">dinner</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Breakfast</a>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar2