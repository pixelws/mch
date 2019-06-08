import React from 'react'
import PropTypes from 'prop-types'
import { EducationPageTemplate } from '../../templates/education-page'

const EducationPagePreview = ({ entry, widgetFor }) => (
  <EducationPageTemplate
    title={entry.getIn(['data', 'title'])}
    intro={{
      heading: entry.getIn(['data', 'intro', 'heading']),
      text: entry.getIn(['data', 'intro', 'text']),
    }}
    content={widgetFor('body')}
  />
)

EducationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EducationPagePreview
