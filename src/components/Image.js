import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Image = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      project1: file(relativePath: { eq: "homepage.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project2: file(relativePath: { eq: "steensbeans.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {src === 1 ? (
        <Img fluid={data.project1.childImageSharp.fluid} />
      ) : (
          <Img fluid={data.project2.childImageSharp.fluid} />
        )}
    </>
  )
}