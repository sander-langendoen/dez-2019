import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

import Img from 'gatsby-image'
import profileimg from '../img/Dietist-Eline-Zuiderwijk.jpg'


import styled from 'styled-components'

const Intro = styled.section`
    grid-column: 1 / -1;
    // background-color: #fafafa;
    padding: 2rem;


    @media (min-width: 768px) and (max-width: 1023px) {
        grid-column: 2 / 8;
    }

    @media (min-width: 1024px) {
        grid-column: 2 / 8;
    }
`;

const ProfileImg = styled.section`
    grid-column: 1 / -1;

    img {
        max-width: 100%;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        grid-column: 8 / -1;
    }

    @media (min-width: 1024px) {
        grid-column: 8 / -1;
    }
`;

const BlogsIntro = styled.section`
    grid-column: 1 / 12;
    grid-row: 3 / 3;
    background-image: url("/img/bg.svg");
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: left center;


    @media (min-width: 768px) and (max-width: 1023px) {
        grid-column: 7 / 12;
    }

    @media (min-width: 1024px) {
        grid-column: 7 / 12;
    }
`;

const BlogList = styled.section`
    grid-column: 1 / 12;
    grid-row: 4 / 4;

    @media (min-width: 768px) and (max-width: 1023px) {
        grid-column: 1 / 7;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / 7;
    }
`;

const ImgWrap = styled.div`
    max-width: 100%;
`;

const BlogItem = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &:nth-child(2) {
        .item-content {
            grid-column: 1 / 2;
            grid-row: 1;
        }
    }
`;

const ErvaringenIntro = styled.section`
    grid-column: 1 / 12;
    padding: 2rem;
    background-color: #CCE5CC;

    @media (min-width: 768px) and (max-width: 1023px) {
        grid-column: 1 / 7;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / 7;
    }
`;

const Ervaringen = styled.section`
    grid-column: 1 / 12;
    padding: 2rem 3rem;

    @media (min-width: 768px) and (max-width: 1023px) {
        grid-column: 7 / 12;
    }

    @media (min-width: 1024px) {
        grid-column: 7 / 12;
    }
`;

const LocatieLeidschMap = styled.section`
    grid-column: 1 / -1;
    background-image: url("/img/dietist-locatie-leidschendam-voorburg.jpg");
    background-repeat: no-repeat; 
    background-size: cover;
 
    @media (min-width: 768px) and (max-width: 1023px) {
        grid-column: 7 / -1;
    }

    @media (min-width: 1024px) {
        grid-column: 7 / -1;
    }
`;

const LocatieLeidsch = styled.section`
    grid-column: 1 / -1;
    padding: 2rem;


    @media (min-width: 768px) and (max-width: 1023px) {
        grid-column: 1 / 7;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / 7;
    }
`;

const LocatieDordtMap = styled.section`
    grid-column: 1 / -1;
    background-image: url("/img/dietist-locatie-dordrecht.jpg");
    background-repeat: no-repeat; 
    background-size: cover;
 
    @media (min-width: 768px) and (max-width: 1023px) {
        grid-column: 1 / 7;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / 7;
    }
`;

const LocatieDordt = styled.section`
    grid-column: 1 / -1;
    padding: 2rem;
    background-color: #81B3A5;
    color: white;

    @media (min-width: 768px) and (max-width: 1023px) {
        grid-column: 7 / -1;
    }

    @media (min-width: 1024px) {
        grid-column: 7 / -1;
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

        <ProfileImg>
            <img src={profileimg} alt="foto eline zuiderwijk" />
        </ProfileImg>

        <BlogList>
            
            {posts
              .map(({ node: post }) => (

                <BlogItem key={post.id} >
                
                    {/* console.log(post) */ }

                    <ImgWrap>
                        <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
                    </ImgWrap>

                    <div className="item-content" style={{padding: '1.5rem'}}>
                        <Link to={post.fields.slug}>

                            <h3>{post.frontmatter.title}</h3>
                          
                        </Link>
                        <span> &bull; </span>
                        <small>{post.frontmatter.date}</small>

                        <p>
                        {post.excerpt}
                        <br />
                        <br />
                        <Link className="btn is-small" to={post.fields.slug}>
                          Lees verder →
                        </Link>
                        </p>
                    </div>
                </BlogItem>
              ))}

        </BlogList>

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

        
        <ErvaringenIntro>
            <h2>Wat vinden jullie van mij?</h2>
            
            <div itemScope="" itemType="http://schema.org/Service">
                <span itemProp="name" style={{display: 'none'}}>
                    Algemene waardering                
                </span>
                
                Algemene waardering:             
                <span itemProp="aggregateRating" itemScope="" itemType="http://schema.org/AggregateRating">

                    <span className="stars">
                        ★★★★★                   
                    </span>

                    <span className="rating" itemProp="ratingValue" style={{display: 'none !important'}}>
                        5                   
                    </span> gebaseerd op

                    <span className="votes" itemProp="reviewCount">
                        22                  
                    </span> reviews
                    
                    <div style={{display: 'none'}}>
                        <span itemProp="bestRating">5</span>
                        <span itemProp="worstRating">1</span>
                    </div>
                </span>
            </div>
        </ErvaringenIntro>

        <Ervaringen>
            <div className="testimonial" itemScope="" itemType="http://schema.org/Review">
                <h3 className="rr_title" itemProp="name">Ik geloof niet zo in een dieet</h3>

                <span itemProp="itemReviewed" itemScope="" itemType="http://schema.org/Service">
                    <div className="rr_review_post_id" itemProp="name" style={{display: 'none'}}>
                        <a href="https://dietist-elinezuiderwijk.nl/reviews/">
                            Ervaringen van anderen          
                        </a>
                    </div>

                </span>
                <span className="rr_date" style={{display: 'none'}}>
                    <meta itemProp="datePublished" content="2017-01-03 14:55:27" />
                    <time dateTime="3 januari, 2017">3 januari, 2017</time>
                </span>
                <div className="stars">
                    ★★★★★       
                </div>
                <div style={{display: 'none'}} itemProp="reviewRating" itemScope="" itemType="http://schema.org/Rating" />
                    <span itemProp="ratingValue">
                        5
                    </span>
                    <span itemProp="bestRating">
                        5
                    </span>
                    <span itemProp="worstRating">
                        1
                    </span>
                </div>


                <div className="rr_review_text">
                    <span className="drop_cap">“</span>
                    <span itemProp="reviewBody">
                        Vorig jaar januari wilde ik mijn gewicht eindelijk eens goed aanpakken en gezonder gaan eten. Ik geloof niet zo in een dieet. 
                        Afvallen kon ik best goed maar op gewicht blijven was een heel ander ding. Eline heeft me het afgelopen jaar super goed begeleid. 
                        Ze weet ontzettend veel over voeding en gezond eten. Ik kijk echt uit naar mijn afspraken met haar. Je kunt Eline alles vragen over 
                        welke producten dan ook. Als ze het antwoord niet meteen weet, wordt het opgezocht en besproken. Heel erg fijn. Ze weet precies wat 
                        goed werkt. Ik kan gewoon alles eten maar natuurlijk wel minder en ik heb geleerd anders te eten. Mijn nieuwe manier van eten is, 
                        mede doordat het zo geleidelijk is gegaan, ongemerkt mijn nieuwe standaard geworden. Het bevalt me prima en ik voel me super goed. 
                        In een jaar tijd ben ik 28 kilo afgevallen en is mijn vetpercentage enorm gedaald. Ik had nooit gedacht dit dit me zou lukken op zo’n
                        prettige manier. Natuurlijk kost het soms moeite en is zelfdiscipline nodig maar met de juiste begeleiding, is het gewoon echt een stuk 
                        makkelijker. Daarvoor ben je bij Eline absoluut aan het juiste adres.
                    </span>
                    <div className="rr_review_name" itemProp="author" itemScope="" itemType="http://schema.org/Person">
                        <span itemProp="name"> - Anoniem           </span>
                    </div>
                </div>
        </Ervaringen>


        <LocatieLeidsch>
            <h2 className="title">Diëtist Eline Zuiderwijk</h2>
            
            <h3 className="title">locatie Voorburg / Leidschendam:</h3>
            <p>
            Overgoo 1
            2262 JZ Leidschendam
            06-1416 3760
            Routebeschrijving Google Maps
            </p>
        </LocatieLeidsch> 
        <LocatieLeidschMap />

        <LocatieDordtMap /> 
        <LocatieDordt>    
            <h3 className="title">locatie Dordrecht:</h3>
            <p>
            Van Neurenburgpad 2a
            3311 DN Dordrecht
            06-1416 3760
            In gezondheidscentrum MedPlus
            Routebeschrijving Google Maps
            </p>
        </LocatieDordt>   

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
        limit: 2,
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 100)
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
