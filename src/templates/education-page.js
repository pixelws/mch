import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import Content, { HTMLContent } from '../components/Content'
import headerImage from '../img/bg-education.jpg'

export const EducationPageTemplate = ({ title, intro, content, contentComponent }) => {
    const PageContent = contentComponent || Content

    return (
        <div className="page-wrap">
            <PageHeader bgImage={ headerImage } titleText={title} />
            <section className="section has-background-primary has-text-white">
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content">
                                <h2 className="title has-text-centered has-text-white is-uppercase is-size-3 is-size-5-mobile">{intro.heading}</h2>
                                <span className="is-size-6-mobile is-size-5">{intro.text}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-hp">
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <PageContent className="content" content={content} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

EducationPageTemplate.propTypes = {
    title: PropTypes.string,
    intro: PropTypes.shape({
        heading: PropTypes.string,
        text: PropTypes.string,
    }),
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const EducationPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <EducationPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                intro={post.frontmatter.intro}
                content={post.html}
            />
        </Layout>
    )
}

EducationPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default EducationPage

export const educationPageQuery = graphql`
query EducationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
        html
        frontmatter {
            title
            intro {
                heading
                text
            }
        }
    }
}
`
