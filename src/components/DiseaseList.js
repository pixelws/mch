import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const DiseaseList = ({ data }) => (
    <ul className="disease-list">
        {data.map(disease => (
        <li key={v4()} className="disease-item">
            {disease.name}
        </li>
        ))}
    </ul>
)

DiseaseList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
        })
    ),
}
export default DiseaseList
