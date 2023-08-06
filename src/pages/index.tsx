import '../styles/index.css';

import { graphql, PageProps } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import Banner from '../components/Banner';
import Cotisation from '../components/Cotisation';
import Footer from '../components/Footer';
import Horaires from '../components/Horaires';
import Inscription from '../components/Inscription';
import Meta from '../components/Meta';
import Nav from '../components/Nav';
// import NewsBar from '../components/NewsBar';
import Sections from '../components/Sections';

type IndexData = Record<
  string,
  { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
>;

function IndexPage(props: PageProps<IndexData>) {
  const { data } = props;

  return (
    <div id="top">
      <Meta />
      {/* <NewsBar /> */}
      <Banner />
      <Nav />
      <main>
        <Sections
          photo1={data.photo1.childImageSharp.gatsbyImageData}
          photo2={data.photo2.childImageSharp.gatsbyImageData}
          photo3={data.photo3.childImageSharp.gatsbyImageData}
        />
        <Horaires />
        <Cotisation />
      </main>
      <Inscription />
      <Footer />
    </div>
  );
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    photo1: file(relativePath: { eq: "photo1.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 785)
      }
    }
    photo2: file(relativePath: { eq: "photo2.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 785)
      }
    }
    photo3: file(relativePath: { eq: "photo3.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 785)
      }
    }
  }
`;

export { default as Head } from '../components/Meta';

export default IndexPage;
