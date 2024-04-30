"use client";
// import Link from "next/link";
// import React from "react";
// import NavButton from "../navbutton/NavButton";
// import NavDropdown from "../navDropdown/NavDropdown";

// export default function Navbar() {
//   return (
//     <div className="shadow-md lg:px-24 flex flex-wrap items-center justify-between h-auto">
//       <div>
//         <h2>My Logo</h2>
//       </div>
//       <div className="flex">
//         <ul className="flex flex-wrap items-center gap-8">
//           <li>
//             <Link href={"#"}>
//               <NavDropdown title="What we do" firstChild="Strategy Consulting" />
//             </Link>
//           </li>
//           <li>
//             <Link href={"#"}>
//               <NavDropdown title="Technologies" firstChild="Solutions Engineering" />
//             </Link>
//           </li>
//           <li>
//             <Link href={"#"}>
//               <NavDropdown title="How we engage" firstChild=" " />
//             </Link>
//           </li>
//           <li>
//             <Link href={"#"}>
//               <NavDropdown title="How we are" />
//             </Link>
//           </li>
//           <li>
//             <NavButton />
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import React, { useState } from "react";
import NavButton from "../navbutton/NavButton";
import NavDropdown from "../navDropdown/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export default function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="shadow-md lg:flex lg:justify-between lg:items-center lg:px-7 lg:h-auto">
      <div className="flex justify-between p-3">
        <h2>My Logo</h2>

        <div className="flex lg:hidden">
          <button onClick={handleMenuToggle}>
            {menuOpen ? (
              <FontAwesomeIcon icon={faCircleXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>
      <div className={`lg:flex ${menuOpen ? "block" : "hidden"}`}>
        <ul className="px-3 lg:flex lg:gap-7 lg:items-center">
          <li>
            <Link href={"#"}>
              <NavDropdown
                title="What we do"
                firstChild="Strategy Consulting"
              />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <NavDropdown
                title="Technologies"
                firstChild="Solutions Engineering"
              />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <NavDropdown title="How we engage" firstChild=" " />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <NavDropdown title="How we are" />
            </Link>
          </li>
          <li className="px-2">
            <NavButton title="Contact Us" />
          </li>
        </ul>
      </div>
    </div>
  );
}
