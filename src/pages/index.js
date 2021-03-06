import '../styles/index.css';

import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Adhesion from '../components/Adhesion';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Horaires from '../components/Horaires';
import Meta from '../components/Meta';
import Nav from '../components/Nav';
import Sections from '../components/Sections';

function IndexPage(props) {
  return (
    <>
      <Meta />
      {/* <NewsBar /> */}
      <Banner />
      <Nav />
      <main>
        <Sections {...props.data} />
        <Horaires />
        <Adhesion />
      </main>
      <Footer />
    </>
  );
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    photo1: file(relativePath: { eq: "photo1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 785) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    photo2: file(relativePath: { eq: "photo2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 785) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    photo3: file(relativePath: { eq: "photo3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 785) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default IndexPage;
