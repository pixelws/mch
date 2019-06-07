import React from 'react'
import PropTypes from 'prop-types'
import { VolunteerPageTemplate } from '../../templates/volunteer-page'

const VolunteerPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <VolunteerPageTemplate
        image={entry.getIn(['data', 'image'])}
        title={entry.getIn(['data', 'title'])}
        intro={{
          heading: entry.getIn(['data', 'intro', 'heading']),
          text: entry.getIn(['data', 'intro', 'text']),
        }}
        main={{
          content: entry.getIn(['data', 'main', 'content']),
          image: entry.getIn(['data', 'main', 'image']),
        }}
        volunteerList={{
          heading: entry.getIn(['data', 'volunteerList', 'heading']),
          positions: entry.getIn(['data', 'volunteerList', 'positions']),
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

VolunteerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default VolunteerPagePreview
