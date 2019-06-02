import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entryDiseases = entry.getIn(['data', 'medicalConditions', 'diseases'])
  const diseases = entryDiseases ? entryDiseases.toJS() : []

  if (data) {
    return (
      <IndexPageTemplate
        title={entry.getIn(['data', 'title'])}
        heading={entry.getIn(['data', 'heading'])}
        subheading={entry.getIn(['data', 'subheading'])}
        mission={{
          title: entry.getIn(['data', 'mission', 'title']),
          statement: entry.getIn(['data', 'mission', 'statement']),
        }}
        medicalConditions={{
          heading: entry.getIn(['data', 'medicalConditions', 'heading']),
          diseases: diseases,
        }}
        projects={entry.getIn(['data', 'projects'])}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
