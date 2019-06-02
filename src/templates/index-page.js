import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import ProjectRoll from '../components/ProjectRoll'
import bg from '../img/bg-home1.jpg'
import video from '../img/welcome_vid.mp4'

export const IndexPageTemplate = ({
  heading,
  subheading,
  mission,
  diseases,
}) => (
  <div className="page-wrap">
    <div
        className="pg-head margin-top-0"
        style={{
            backgroundImage: 'url(' + bg + ')',
        }}
    >
        <div className="container" style={{ height: '400px' }}>
            <div className="title-wrap">
                <h1
                className="has-text-weight-bold is-size-4-mobile is-size-2-tablet is-size-1-desktop is-family-secondary"
                >
                {heading}
                </h1>
                <span className="is-size-6-mobile is-size-4-tablet is-size-4-desktop">{subheading}</span>
            </div>
        </div>
    </div>

    <section className="section has-background-primary has-text-white">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <h2 className="title has-text-centered has-text-white is-uppercase is-size-5-mobile is-size-3-desktop">{mission.title}</h2>
              <span className="is-size-6-mobile is-size-5">{mission.statement}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-hp">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="content">
            <h2 className="title has-text-centered">{diseases.title}</h2>
            <div className="columns">
              <div className="column is-5">Image</div>
              <div className="column is-7">
                {diseases.list}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section has-background-secondary has-text-white">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="content">
            <h2 className="title has-text-centered has-text-white is-size-5-mobile is-size-3" style={{ marginBottom: '3rem' }}>WELCOME MESSAGE FROM THE PRESIDENT</h2>
          </div>
        </div>
      </div>
    </section>
    <div className="section has-text-centered" style={{ marginTop: '-3rem', paddingTop: '0' }}>
      <div style={{ maxWidth: '480px', width: '100%', height: 'auto', backgroundColor: '#444', margin: '0 auto' }}>
        <video width="480" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the videos
        </video>
      </div>
    </div>
    <section className="section section-hp">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="content">
            <h2 className="title has-text-centered has-text-primary is-size-5-mobile is-size-4-tablet is-size-3-desktop">
              LATEST PROJECTS
            </h2>
            <ProjectRoll />
            <div className="has-text-centered" style={{ margin: '3rem 0 1rem'}}>
              <Link className="btn" to="/projects">
                See All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mission: PropTypes.object,
  diseases: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mission={frontmatter.mission}
        diseases={frontmatter.diseases}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        mission {
          title
          statement
        }
        diseases {
          title
          list
        }
      }
    }
  }
`
