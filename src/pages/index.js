import React, { useState }  from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button,
        Container, Row, Col, 
        Collapse, Navbar, NavbarToggler, 
        NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import Img from 'gatsby-image'
import ContactForm from '../components/contact'
import Footer from '../components/footer'
import ButtonAppBar from '../components/navbar'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import CarouselComp from '../components/carouselComp'

const IndexPage = ({ data }) => {
    const { edges: posts } = data.allMdx;
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
        <>
            <ButtonAppBar/>
            <div className='wrap'>
                <div className='main-text'>
                    <h1 className='title'>Grace</h1>
                </div>

                <div className='main-text2'>
                    <h4 className='sub-title1'>Associates</h4>
                </div>

                {/* wave className='wave' */}
                <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,154.7C672,139,768,149,864,170.7C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div> 
            {/* End of head design */}

            <CarouselComp/>

            {/* Cards */}
            <Container id='deals'>
                <Row className='CardRow' >
                    {posts.map(({ node: post }) => (
                        
                        <Col className='col' xs="6" sm="4">
                            <Card>
                                <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                                <CardBody>
                                    <CardTitle tag="h5">{post.frontmatter.title}</CardTitle>
                                    <CardText>{post.excerpt}</CardText>
                                    <Link to={post.fields.slug}>
                                        Read More
                                    </Link>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <ContactForm/>
            <Footer/>
                    

        </>
    )   
}

export const pageQuery = graphql`
    query blogIndex {
        allMdx {
            edges {
                node {
                    id
                    excerpt
                    frontmatter {
                        title
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

export default IndexPage
