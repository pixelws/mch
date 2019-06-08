import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import CheckList from '../components/CheckList'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const VolunteerPageTemplate = ({
    image,
    title,
    intro,
    main,
    volunteerList,
}) => (
<div className="page-wrap">
    <PageHeader bgImage={ !!image.childImageSharp ? image.childImageSharp.fluid.src : image } titleText={title} />
    <section className="section has-background-primary has-text-white">
        <div className="container">
            <div className="columns">
                <div className="column is-10 is-offset-1">
                    <div className="content">
                    <h2 className="title has-text-centered has-text-white is-uppercase is-size-3 is-size-4-tablet is-size-5-mobile">{intro.heading}</h2>
                    <span className="is-size-6-mobile is-size-5">{intro.text}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section">
        <div className="container">
            <div className="content">
                <PreviewCompatibleImage imageInfo={main.image} />
                <p>{main.content}</p>
            </div>
        </div>
    </section>
    <section className="section">
        <div className="columns">
            <div className="column is-10 is-offset-1">
                <div className="content">
                    <h2 className="title has-text-centered">{volunteerList.heading}</h2>
                    <CheckList data={volunteerList.positions} />
                </div>
            </div>
        </div>
    </section>
</div>
)

VolunteerPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    intro: PropTypes.shape({
        heading: PropTypes.string,
        text: PropTypes.string,
    }),
    main: PropTypes.shape({
        content: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
    volunteerList: PropTypes.shape({
        heading: PropTypes.string,
        positions: PropTypes.array,
    }),
}

const VolunteerPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <VolunteerPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                intro={frontmatter.intro}
                main={frontmatter.main}
                volunteerList={frontmatter.volunteerList}
            />
        </Layout>
    )
}

VolunteerPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
        }),
    }),
}

export default VolunteerPage

export const pageQuery = graphql`
query VolunteerPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "volunteer-page" } }) {
        frontmatter {
            image {
                childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            title
            intro {
                heading
                text
            }
            main {
                content
                image {
                    childImageSharp {
                        fluid(maxWidth: 1024, quality: 92) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            volunteerList {
                heading
                positions {
                    name
                }
            }
        }
    }
}
`
