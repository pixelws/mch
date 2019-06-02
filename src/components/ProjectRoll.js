import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Logo from './Logo'
import bg from '../img/bg-project-item.jpg'

class ProjectRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="project-list">
        {posts &&
          posts.map(({ node: post }) => (
            <div 
              key={post.id}
              className={`project-item box ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
            >
              <div className="columns" style={{ margin: '0'}}>
                <div className="column is-3 is-flex" style={{ backgroundImage: 'linear-gradient(to bottom right, rgba(151, 38, 72,0.7) 30%, rgba(2, 57, 103,0.7)), url(' + bg + ')', backgroundSize: 'cover' }}>
                  <Logo format="square" color="#fff" />
                </div>
                <div className="column is-9">
                  <h4 className="margin-bottom-0">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h4>
                  <span className="subtitle is-size-6 is-block is-uppercase" style={{letterSpacing: '1px', marginTop: '5px' }}>
                      {post.frontmatter.date}
                  </span>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button" to={post.fields.slug}>
                      See Details →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

ProjectRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "project" } } }
          limit: 1
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProjectRoll data={data} count={count} />}
  />
)
