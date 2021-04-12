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
      <div
        style={{
          backgroundColor: 'var(--minsk)',
          color: 'white',
          padding: '1rem 2rem',
        }}
      >
        <p
          style={{
            maxWidth: '40em',
            margin: '0 auto 0.25rem',
            textAlign: 'center',
          }}
        >
          Notre club participe à la semaine « Portes Ouvertes du Sport à
          Fontaine » du 5 au 13 juin. Pour vous inscrire gratuitement aux
          activités proposées,{' '}
          <a
            href="https://fontainetkd.typeform.com/to/lBeeGlNp"
            style={{ color: 'inherit' }}
          >
            c’est par ici !
          </a>
        </p>
      </div>
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
