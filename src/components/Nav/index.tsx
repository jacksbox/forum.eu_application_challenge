import React from 'react'

import NavButton from './NavButton'

import './Nav.scss'

const Nav = () => <nav>
  <ul className="Nav__List">
    <li className="Nav__Item"><NavButton>All A-Z</NavButton></li>
    <li className="Nav__Item"><NavButton>Brexit</NavButton></li>
    <li className="Nav__Item"><NavButton>Climate</NavButton></li>
    <li className="Nav__Item"><NavButton>Copyright</NavButton></li>
    <li className="Nav__Item"><NavButton>Migration</NavButton></li>
    <li className="Nav__Item"><NavButton active>Deb on Hover</NavButton></li>
    <li className="Nav__Item"><NavButton>Debate X</NavButton></li>
    <li className="Nav__Item"><NavButton>Debate Y</NavButton></li>
    <li className="Nav__Item"><NavButton>Debate Z</NavButton></li>
    <li className="Nav__Item"><NavButton>Debate A</NavButton></li>
  </ul>
</nav>

export default Nav