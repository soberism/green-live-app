import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.less'
import SearchInput from '../../../components/SearchInput/index'

const SearchHeader=(props)=> {
  function handleBack(){
    props.history.go(-1)
  }
  return (
    <div id='search-header' className='clear-fix'>
      <span className='back-icon float-left' onClick={handleBack}>
        <i className="icon-chevron-left"></i>
      </span>
      <div className="input-container">
        <i className="icon-search"></i>
        <SearchInput />
      </div>


    </div>
  )
}

export default withRouter(SearchHeader)
