import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Image = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      project1: file(relativePath: { eq: "homepage.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project2: file(relativePath: { eq: "steensbeans.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project1mobile: file(relativePath: { eq: "homepageMobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project2mobile: file(relativePath: { eq: "steensbeansMobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pup: file(relativePath: { eq: "pup.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {
        src === 1 ? (
          <Img fluid={data.project1.childImageSharp.fluid} />
        ) : src === 2 ? (
          <Img fluid={data.project2.childImageSharp.fluid} />
        ) : src === 3 ? (
          <Img fluid={data.project1mobile.childImageSharp.fluid} />
        ) : src === 4 ? (
          <Img fluid={data.project2mobile.childImageSharp.fluid} />
        ) : (
                  <Img fluid={data.pup.childImageSharp.fluid} />
                )
      }
    </>
  )
}