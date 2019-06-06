import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import DiseaseList from '../components/DiseaseList'
import ProjectRoll from '../components/ProjectRoll'
import video from '../img/welcome_vid.mp4'

import slide1 from '../img/bg-home1.jpg'

export const IndexPageTemplate = ({
  heading,
  subheading,
  mission,
  medicalConditions,
  projects,
}) => (
  <div className="home-page-wrap">
    <div
        className="pg-head margin-top-0"
        style={{
            backgroundImage: slide1,
        }}
    >
      <div className="container" style={{ height: '400px' }}>
          <div className="title-wrap">
            <h1
            className="has-text-weight-bold is-size-4-mobile is-size-2-tablet is-size-1-desktop is-family-secondary"
            >
            {heading}
            </h1>
            <span className="is-uppercase is-size-6-mobile is-size-4-tablet is-size-4-desktop" style={{ letterSpacing: '2px' }}>{subheading}</span>
          </div>
      </div>
    </div>

    <section className="section has-background-primary has-text-white">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <h2 className="title has-text-centered has-text-white is-uppercase is-size-3 is-size-5-mobile">{mission.title}</h2>
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
            <h2 className="title has-text-centered">{medicalConditions.heading}</h2>
            <DiseaseList data={medicalConditions.diseases} />
          </div>
        </div>
      </div>
    </section>
    <section className="section has-background-secondary has-text-white">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="content">
            <h2 className="title has-text-centered has-text-white is-size-3 is-size-5-mobile" style={{ marginBottom: '3rem' }}>WELCOME MESSAGE FROM THE PRESIDENT</h2>
          </div>
        </div>
      </div>
    </section>
    <div className="section has-text-centered" style={{ padding: '0 1rem 4rem', backgroundColor: '#f3f3f3' }}>
      <div style={{ maxWidth: '480px', width: '100%', height: 'auto', margin: '0 auto' }}>
        <video width="100%" controls style={{ marginTop: '-3rem' }}>
          <source src={video} type="video/mp4" />
          Your browser does not support videos
        </video>
      </div>
    </div>
    <section className="section section-hp">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="content">
            <h2 className="title has-text-centered has-text-primary is-size-3 is-size-5-mobile is-uppercase">
              {projects}
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
  medicalConditions: PropTypes.shape({
    heading: PropTypes.string,
    diseases: PropTypes.array,
  projects: PropTypes.string,
  }),
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
        medicalConditions={frontmatter.medicalConditions}
        projects={frontmatter.projects}
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
        medicalConditions {
          heading
          diseases {
            name
          }
        }
        projects
      }
    }
  }
`
