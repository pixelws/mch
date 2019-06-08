import React from 'react'
import PropTypes from 'prop-types'
import { BylawsPageTemplate } from '../../templates/bylaws-page'

const BylawsPagePreview = ({ entry, widgetFor }) => (
  <BylawsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

BylawsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BylawsPagePreview
