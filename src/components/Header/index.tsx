import React from 'react'

import Logo from 'components/Logo'
import Search from 'components/Search'
import RegisterButton from 'components/RegisterButton'
import Nav from 'components/Nav'

const Header = () => <div>
  <Logo />
  <Search />
  <RegisterButton />
  <Nav />
</div>

export default Header