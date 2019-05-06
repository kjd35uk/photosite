import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Projects from "../components/projects"

const IndexPage = ({ data }) => {
  // const siteTitle = data.site.siteMetadata.title;
  // console.log(data.ProjectImgs);
  const { edges: projectImgData } = data.ProjectImgs;
  // const { edges: iconImgData } = data.iconImgs;
  return (
    <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to my awesome photo site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
      <Link to="/fujian2017/">Fujian 2017</Link>
    </div>
    <Projects projectImgs={projectImgData} />
  </Layout>
  );
};

export const query = graphql`
  query allImgsQuery {
    ProjectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/coverphotos/.*.jpg/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
              fixed(width: 125, height: 125) {
                ...GatsbyImageSharpFixed
              }
          }
        }
      }
    }
  }
`;

export default IndexPage
