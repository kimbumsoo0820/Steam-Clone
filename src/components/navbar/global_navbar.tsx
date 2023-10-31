import React from "react";


function Navbar() {
  return (
    <div className="navbar" >
      <div className="content" style={{position:"fixed", backgroundColor:"white", width:"100vw"}}>
        <div className="left_area">
          <div className="logo">
            left
          </div>
          <div className="headerMenu">
      
          </div>
        </div>
        <div className="right_area">
          right
        </div>
      </div>
    </div>
  )
}

export default Navbar;