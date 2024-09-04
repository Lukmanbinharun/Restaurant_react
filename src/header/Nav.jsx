// import React from 'react'
// import { Navbar, NavbarBrand } from "reactstrap";
// import logo from "../logo.svg";

// const Nav = () => {
//   return (
//     <div >
//       <Navbar   color="dark" dark>
//         <NavbarBrand href="/">
//           <img
//             alt="logo"
//             src={logo}
//             style={{
//               height: 40,
//               width: 40,
//             }}
//           />
//         </NavbarBrand>
//         <NavbarBrand  href="/">
//         </NavbarBrand>
//       </Navbar>
//     </div>
//   )
// }

// export default Nav

import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="nav-bar bg-info">
        <ul>
          <li>
            <NavLink to={"/Menu"}>Home </NavLink>
          </li>
          {/* <li>
            <NavLink to={"/Menu"}>Menu </NavLink>
          </li> */}
          <li>
            <NavLink to={"/About"}>About </NavLink>
          </li>
          <li>
            <NavLink to={"/Contac"}>Countac </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;