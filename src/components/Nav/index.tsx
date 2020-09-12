import React, { useState, useEffect, createRef } from 'react'

import NavButton from './NavButton'

import './Nav.scss'

const initItems = [
  { content: "All A-Z", hidden: false, active: false, ref: createRef()},
  { content: "Brexit", hidden: false, active: false, ref: createRef()},
  { content: "Climate", hidden: false, active: false, ref: createRef()},
  { content: "Copyright", hidden: false, active: false, ref: createRef()},
  { content: "Migration", hidden: false, active: false, ref: createRef()},
  { content: "Deb on Hover", hidden: false, active: true, ref: createRef()},
  { content: "Debate X", hidden: false, active: false, ref: createRef()},
  { content: "Debate Y", hidden: false, active: false, ref: createRef()},
  { content: "Debate Z", hidden: false, active: false, ref: createRef()},
  { content: "Debate A", hidden: false, active: false, ref: createRef()},
]

const Nav = ({ condensed, availableWidth, occupiedWidth }) => {
  const [items, setItems] = useState(initItems)
  useEffect(() => {
    if (!condensed) {
      setItems(items.map(item => {
        item.hidden = false
        return item
      }))
    } else {
      let rest = availableWidth - occupiedWidth
      const processedItems = items.map(item => {
        rest -= (item.ref.current.clientWidth + 40)
        item.hidden = rest < 0
        return item
      })
      setItems(processedItems)
    }
  }, [ condensed ])

return (
  <nav className="Nav">
    <ul className="Nav__List">
      {items.map(({ content, active, hidden, ref }) => {
        return (
          <li className="Nav__Item" ref={ref}>
            <NavButton active={active} hidden={hidden}>{content}</NavButton>
          </li>
        )
      })}
    </ul>
  </nav>
)}

export default Nav