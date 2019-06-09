import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import CheckList from '../components/CheckList'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Content, { HTMLContent } from '../components/Content'

export const VolunteerPageTemplate = ({
    image,
    title,
    intro,
    mainImage,
    volunteerList,
    content,
    contentComponent,
}) => {
    const PageContent = contentComponent || Content

    return(
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
                <div className="content" style={{ maxWidth: '960px', margin: '0 auto' }}>
                    <PreviewCompatibleImage imageInfo={mainImage} />
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-6">
                        <PageContent className="content" content={content} />
                    </div>
                    <div className="column is-6">
                        <div className="content">
                            <h2 className="title has-text-centered-mobile">{volunteerList.heading}</h2>
                            <CheckList data={volunteerList.positions} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

VolunteerPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    intro: PropTypes.shape({
        heading: PropTypes.string,
        text: PropTypes.string,
    }),
    mainImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    volunteerList: PropTypes.shape({
        heading: PropTypes.string,
        positions: PropTypes.array,
    }),
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const VolunteerPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <VolunteerPageTemplate
                contentComponent={HTMLContent}
                image={post.frontmatter.image}
                title={post.frontmatter.title}
                intro={post.frontmatter.intro}
                mainImage={post.frontmatter.mainImage}
                volunteerList={post.frontmatter.volunteerList}
                content={post.html}
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

export const VolunteerPageQuery = graphql`
query VolunteerPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
        html
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
            mainImage {
                childImageSharp {
                    fluid(maxWidth: 1024, quality: 92) {
                        ...GatsbyImageSharpFluid
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
