import React from 'react'

import RegisterIcon from 'assets/profile.svg'

import "./RegisterButton.scss"

const RegisterButton = () => (
  <div className="RegisterButton">
    <div className="RegisterButton--inner">
      <div className="RegisterButton__Icon">
        <img src={RegisterIcon} />
      </div>
      <div className="RegisterButton__Text">
        Register
      </div>
    </div>
  </div>
)

export default RegisterButton