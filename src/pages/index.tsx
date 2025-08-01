import '../styles/index.css';

import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

import { main, wrapper } from './index.module.css';
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
      <div className={wrapper}>
        <main className={main}>
          <Sections
            photoKids={data.photoKids.childImageSharp.gatsbyImageData}
            photoTeens={data.photoTeens.childImageSharp.gatsbyImageData}
            photoAdults={data.photoAdults.childImageSharp.gatsbyImageData}
          />
          <Horaires />
          <Cotisation />
          <Inscription />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export const query = graphql`
  query {
    photoKids: file(relativePath: { eq: "photo4.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 785)
      }
    }
    photoTeens: file(relativePath: { eq: "photo5.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 785)
      }
    }
    photoAdults: file(relativePath: { eq: "photo6.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 785)
      }
    }
  }
`;

export { default as Head } from '../components/Meta';

export default IndexPage;
