import React, { useState, useEffect, createRef } from 'react'

import NavButton from './NavButton'

import ArrowIcon from 'assets/arrow-down.svg'

import pxStrToInt from 'helper/pxStrToInt'

import './Nav.scss'
import styleVariables from 'variables.scss'

const SPACING: number = pxStrToInt(styleVariables.navItemSpacing)

interface IItem {
  content: React.ReacyNode,
  hidden: boolean,
  active: boolean,
  ref: HTMLLIElement
}
type ItemsType = IItem[]

const initItems: ItemsType = [
  { content: (<>All A-Z <img src={ArrowIcon} /></>), hidden: false, active: false, ref: createRef()},
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

type NavProps = {
  condensed: boolean,
  availableWidth: number,
  occupiedWidth: number
}

const Nav = ({ condensed, availableWidth, occupiedWidth }: NavProps) => {
  const [items, setItems] = useState<ItemsType>(initItems)
  useEffect(() => {
    let rest: number = condensed ? availableWidth - occupiedWidth : availableWidth
    const processedItems: ItemsType = items.map((item: IItem, index: number) => {
      rest -= (item.ref.current.clientWidth + (index > 0 ? SPACING : 0))
      item.hidden = rest < 0
      return item
    })
    setItems(processedItems)
  }, [ condensed, availableWidth ])

return (
  <nav className="Nav">
    <ul className="Nav__List">
      {items.map(({ content, active, hidden, ref }: IItem) => {
        return (
          <li className="Nav__Item" ref={ref} key={content}>
            <NavButton active={active} hidden={hidden}>{content}</NavButton>
          </li>
        )
      })}
    </ul>
  </nav>
)}

export default Nav