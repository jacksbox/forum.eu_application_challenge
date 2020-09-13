import React from 'react'
import classNames from 'classnames'

import SearchIcon from 'assets/search.svg'

import './Search.scss'

type SearchProps = { condensed: boolean }

const Search = ({ condensed = false }: SearchProps) => {
  const className: string = classNames("Search", {
    "Search--condensed": condensed
  })
  return (
    <div className={className}>
      <div className="Search--inner">
        <div className="Search__Icon">
          <img src={SearchIcon} width="14" height="14" />
        </div>
        <input placeholder="Search" className="Search__Input" />
      </div>
    </div>
  )
}

export default Search