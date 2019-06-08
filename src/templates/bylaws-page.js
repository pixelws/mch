import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import Content, { HTMLContent } from '../components/Content'
import headerImage from '../img/bg-bylaws.jpg'

export const BylawsPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="page-wrap">
      <PageHeader bgImage={ headerImage } titleText={title} />
      <div className="container">
        <div className="section">
          <PageContent className="content" content={content} />
        </div>
      </div>
    </div>
  )
}

BylawsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const BylawsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BylawsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

BylawsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BylawsPage

export const bylawsPageQuery = graphql`
  query BylawsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
