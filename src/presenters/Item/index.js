import React from 'react'

const deleteItem = () => {

}

const Item = ({title}) => (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        {title}
        <button type="button" class="btn btn-danger" onClick={deleteItem}>
            <i class="fa fa-trash" aria-hidden="true"></i>
        </button>

    </li>
)

export default Item