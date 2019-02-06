import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Intro = styled.section`
    grid-column: 1 / 8;
    // background-color: #fafafa;
    padding: 2rem;


    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 3.5rem;
    }

    @media (min-width: 1024px) {
        padding: 5rem;
    }
`;

const ProfileImg = styled.section`
    grid-column: 8 / -1;
    // background-color: #fafafa;
    background-image: url("/img/Dietist-Eline-Zuiderwijk.jpg");
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: left -7rem center;
`;

const BlogsIntro = styled.section`
    grid-column: 1 / 6;
    background-image: url("/img/bg.svg");
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: left center;
    padding: 2rem;


    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 3.5rem;
    }

    @media (min-width: 1024px) {
        padding: 5rem;
    }
`;

const BlogList = styled.section`
    grid-column: 6 / -1;
    // background-color: #fafafa;
    padding: 2rem;


    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 3.5rem;
    }

    @media (min-width: 1024px) {
        padding: 5rem;
    }
`;


export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>

        <Intro>

            <h1 className="title section-title page-title">Afvallen, aankomen, beter eten, een medisch probleem.</h1>

            <p>Ik als diëtist ben een specialist op het gebied van voeding.</p>
            <p>
            ‘Goed eten’ is mijn motto, ‘Goed eten’ staat voor niet te weinig, maar ook niet teveel eten. 
            Ook staat het voor de productkeuzes die je kunt maken. Bijvoorbeeld de keuze voor pure voeding, 
            zonder al te veel toevoegingen zoals kleur- geur en smaakstoffen. Ook hou ik me bezig met suikers 
            en de invloed op je bloedsuikerspiegel. Ik ben van mening dat veel mensen zich veel beter gaan 
            voelen wanneer ze letten op de hoeveelheden (geraffineerde) suikers in hun voeding.</p>

            <p>Tot ziens,</p>
            <p className="is-handwriting">Eline</p>
        </Intro>   

        <ProfileImg />

        <BlogsIntro>

            <h2 className="title section-title">Blogs &amp; recepten</h2>

            <p>Hallo iedereen, ik schrijf regelmatig over gezonde
            voeding en plaats ook gezonde recepten op mijn site.
            Lorem ipsum dolor sit amet. Etiam rhoncus. Maecenas 
            tempus, tellus eget condimentum rhoncus, sem quam 
            semper libero, sit amet adipiscing sem neque sed 
            ipsum. Nam quam nunc, blandit vel, luctus pulvinar, 
            hendrerit id, lorem. </p>

            <p>Gezonde recepten.</p>

            <p>Mijn persoonlijke blog.</p>

        </BlogsIntro>


        <BlogList>
            
            {posts
              .map(({ node: post }) => (

                <div
                  className="blog-item"
                  style={{ padding: '2em 0em' }}
                  key={post.id}
                >
                  <div>
                    <Link to={post.fields.slug}>
                      {post.frontmatter.title}
                      
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                    {console.log(post)}
                    <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
                  </div>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="btn is-small" to={post.fields.slug}>
                      Lees verder →
                    </Link>
                  </p>
                </div>
              ))}

        </BlogList>

        
        <section className="section section-ervaringen">
            <h2 className="title">Wat vinden jullie van mij?</h2>
        </section>


        <section className="section section-profile">
            <h2 class="title">Diëtist Eline Zuiderwijk</h2>
            <p>
            <h3 class="title">locatie Voorburg / Leidschendam:</h3>
            Overgoo 1
            2262 JZ Leidschendam
            06-1416 3760
            Routebeschrijving Google Maps
            </p>
            <p>
            <h3 class="title">locatie Dordrecht:</h3>
            Van Neurenburgpad 2a
            3311 DN Dordrecht
            06-1416 3760
            In gezondheidscentrum MedPlus
            Routebeschrijving Google Maps
            </p>
        </section>  
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
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
            featuredImage {
                childImageSharp{
                    sizes(maxWidth: 2040) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
          }
        }
      }
    }
  }
`
