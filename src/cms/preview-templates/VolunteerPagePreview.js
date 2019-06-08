import React from 'react'
import PropTypes from 'prop-types'
import { VolunteerPageTemplate } from '../../templates/volunteer-page'

const VolunteerPagePreview = ({ entry, getAsset }) => {
  const entryImage = entry.getIn(['data', 'main', 'image']).toJS()

  const entryOpenPos = entry.getIn(['data', 'volunteerList', 'positions'])
  const openPos = entryOpenPos ? entryOpenPos.toJS() : []

  return (
    <VolunteerPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      intro={{
        heading: entry.getIn(['data', 'intro', 'heading']),
        text: entry.getIn(['data', 'intro', 'text']),
      }}
      main={{
        image: getAsset(entryImage),
        content: entry.getIn(['data', 'main', 'content']),
      }}
      volunteerList={{
        heading: entry.getIn(['data', 'volunteerList', 'heading']),
        positions: openPos,
      }}
    />
  )
}

VolunteerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default VolunteerPagePreview