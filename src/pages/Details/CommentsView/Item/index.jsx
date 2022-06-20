import React from 'react'
import "./style.less"
import Star from '../../../../components/Star'

export default function Item(props) {
  // console.log(props.comment);
  return (
    <div className='comment-item'>
      <h3>
        <i className="icon-user"></i>
          {props.comment.username}
          <Star num={props.comment.star} />
      </h3>
      <p>{props.comment.comment}</p>
    </div>
  )
}
