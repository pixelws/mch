import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const CheckList = ({ data }) => (
    <ul className="check-list">
        {data.map(item => (
        <li key={v4()} className="check-item">
            {item.name}
        </li>
        ))}
    </ul>
)

CheckList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
        })
    ),
}
export default CheckList
