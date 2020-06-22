import React from 'react'
import Item from '../Item'
import './items.css'

const Items = ({items}) => (

    <>
        <ul className="list-group">
        {items.map(({ title }, i) => (
            <Item title={title} i={i} key={`key-${title}-${i}`}/>
        ))}
        </ul>
        
    </>

)

export default Items