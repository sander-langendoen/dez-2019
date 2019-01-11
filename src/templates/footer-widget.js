import React from 'react';

const FooterWidgetPage = ( {data} ) => {
  const { markdownRemark: post } = data;
  return(
    <div className="section">
      <h2 >{post.frontmatter.title}</h2>
      <p>{post.frontmatter.description}</p>
    </div>
  );
};
export default FooterWidgetPage;
export const FooterWidgetPageQuery = graphql`
  query FooterWidgetPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        templateKey
        description
      }
    }
  }
`;