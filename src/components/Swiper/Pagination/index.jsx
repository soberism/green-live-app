import React from 'react'
import "./style.less"


const Pagination=(props)=>{
    let arr=new Array(props.len).fill(1)
    return (
        <div className="swiper-pagination">
            <ul>
                {
                    arr.map((i,index)=>(<li className={props.currentIndex===index?'selected':''} key={i+index}></li>))
                }
            </ul>
        </div>
    )
}

export default Pagination