import React, { useState }from 'react'
import './createNewList.css'

import { Link } from 'react-router-dom'
import Items from '../Items'


const data = require('../../mock-data.json');



const addItemInput = document.querySelector('.add-item-input')
    const inputValue = addItemInput
    



const CreateNewList = () => {
    const [items, setItems] = useState(data)
    const [title, setTitle] = useState('')
    

const pushItems = () => {
    let item = {"title": title}
    console.log(title)
    console.log(items)
    setItems(items.concat([item]))
    data.push(item)
    console.log(data)
}



    return (
        <div className="cnl-wrapper">
            <nav className="cnl-navbar navbar">
                <Link to="/" className="back-btn">
                    <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                </Link>
            </nav>
            <section className="listSection container">
                <div className="row">
                    <div className="col-12 d-flex my-3">
                        <input class="add-item-input form-control mr-sm-2 " type="text" placeholder="Add new item" aria-label="Add new item" onChange={event => setTitle(event.target.value)}/>
                        <button type="button" class="add-item-btn btn btn-primary ml-3" onClick={pushItems}><i class="fa fa-plus" aria-hidden="true"></i></button>
                    </div>
                </div>
                <Items items={items}/>
            </section>
        </div>
    )
}

export default CreateNewList
