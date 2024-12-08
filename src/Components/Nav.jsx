import React from 'react'

const Nav = (props) => {
  return (<>
  
  <nav className="navbar navbar-expand-lg bg-body-tertiary p-4"  data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand badge p-3 bg-danger fs-5" href="#">News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-white ps-5" id="navbarSupportedContent">
     
     <h1>Cheak Latest News by searching particular Names and Area.</h1>
  
    </div>
  </div>
</nav>
  </> 
  )
}

export default Nav
