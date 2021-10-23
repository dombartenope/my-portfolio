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
      project3: file(relativePath: { eq: "api1.png" }) {
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
      hiking: file(relativePath: { eq: "hiking.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cooking: file(relativePath: { eq: "cooking.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      apimobile: file(relativePath: { eq: "apimobile.png" }) {
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
        ) : src === 5 ? (
          <Img fluid={data.pup.childImageSharp.fluid} />
        ) : src === 6 ? (
          <Img fluid={data.hiking.childImageSharp.fluid} />
        ) : src === 7 ? (
          <Img fluid={data.cooking.childImageSharp.fluid} />
        ) : src === 8 ? (
          <Img fluid={data.project3.childImageSharp.fluid} />
        ) : (
          <Img fluid={data.apimobile.childImageSharp.fluid} />
        )
      }
    </>
  )
}