import React from 'react'
import PropTypes from 'prop-types'
import { VolunteerPageTemplate } from '../../templates/volunteer-page'

const VolunteerPagePreview = ({ entry, widgetFor }) => {
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
      mainImage={entry.getIn(['data', 'mainImage'])}
      volunteerList={{
        heading: entry.getIn(['data', 'volunteerList', 'heading']),
        positions: openPos,
      }}
      content={widgetFor('body')}
    />
  )
}

VolunteerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default VolunteerPagePreview