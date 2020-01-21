import React from 'react'
import PropTypes, { bool } from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class TeamRoll extends React.Component {
    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        return (
            <div className="columns is-multiline">
                {posts &&
                    posts.map(({ node: post }) => (
                        <div className="is-parent column is-6" key={post.id}>
                            <Link to={post.fields.slug}>
                                <div className="card">
                                    { this.props.showImage ? <div className="card-image">
                                        <figure className="image is-marginless">
                                            <PreviewCompatibleImage
                                                imageInfo={{
                                                    image: post.frontmatter.featuredimage,
                                                    alt: `featured image thumbnail for post ${
                                                        post.title
                                                        }`,
                                                }}
                                            />
                                        </figure>
                                    </div> : "" }
                                    <div className="card-content">
                                        <div className="media">

                                            <div className="media-content">
                                                <p className="title is-4">{post.frontmatter.title}</p>
                                                <p className="subtitle is-6">Træning: {post.frontmatter.traning}</p>
                                            </div>
                                        </div>

                                        <div className="content">
                                            {post.frontmatter.description}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        )
    }
}

TeamRoll.propTypes = {
    showImage: bool,
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
      query TeamRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "team-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                traning
                description
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 400, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
        render={(data, count, showImage) => <TeamRoll data={data} count={count} showImage />}
    />
)
