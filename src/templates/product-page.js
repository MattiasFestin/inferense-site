import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #6c63ff, -0.5rem 0 0 #6c63ff',
          backgroundColor: '#6c63ff',
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Features gridItems={intro.blurbs} />
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        {/* <PreviewCompatibleImage imageInfo={main.image1} /> */}
						<img src="/img/svg/undraw_financial_data_es63.svg" />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
						{/* <PreviewCompatibleImage imageInfo={main.image2} /> */}
						<img src="/img/svg/undraw_prototyping_process_rswj.svg" />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <img src="/img/svg/undraw_setup_analytics_8qkl.svg" />
                    </article>
                  </div>
                </div>
              </div>
              {/* <Testimonials testimonials={testimonials} />
              <div
                className="full-width-image-container"
                style={{
                  backgroundImage: `url(${
                    fullImage.childImageSharp
                      ? fullImage.childImageSharp.fluid.src
                      : fullImage
				  })`,
				  backgroundPosition: 'center',
				  backgroundPositionY: '81%',
                }}
              /> */}
              {/* <h2 className="has-text-weight-semibold is-size-2">
                {pricing.heading}
              </h2>
              <p className="is-size-5">{pricing.description}</p>
			  <Pricing data={pricing.plans} /> */}
			  	<h3>We are under development.</h3>
				<p>Subscribe for updates</p>
				{/* Begin Mailchimp Signup Form */}
				<link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />
				<style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
				<style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t#mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}\n\t#mergeRow-gdpr {margin-top: 20px;}\n\t#mergeRow-gdpr fieldset label {font-weight: normal;}\n\t#mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}\n" }} />
				<div id="mc_embed_signup">
					<form action="https://mattiasfest.us20.list-manage.com/subscribe/post?u=e90fb8eb4a38f8c3372a5be45&id=17af770df1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
						<div id="mc_embed_signup_scroll">
						<label htmlFor="mce-EMAIL">Subscribe</label>
						<input type="email" defaultValue name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required value="" />
						<div id="mergeRow-gdpr" className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
							<div className="content__gdpr">
							<label>Marketing Permissions</label>
							<p>Please select all the ways you would like to hear from Inferense:</p>
							<fieldset className="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
								<label className="checkbox subfield" htmlFor="gdpr_21989"><input type="checkbox" id="gdpr_21989" name="gdpr[21989]" defaultValue="Y" className="av-checkbox " /><span>Email</span> </label><label className="checkbox subfield" htmlFor="gdpr_21993"><input type="checkbox" id="gdpr_21993" name="gdpr[21993]" defaultValue="Y" className="av-checkbox " /><span>Direct Mail</span> </label><label className="checkbox subfield" htmlFor="gdpr_21997"><input type="checkbox" id="gdpr_21997" name="gdpr[21997]" defaultValue="Y" className="av-checkbox " /><span>Customized Online Advertising</span> </label>
							</fieldset>
							<p>You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.</p>
							</div>
							<div className="content__gdprLegal">
							<p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/" target="_blank">Learn more about Mailchimp's privacy practices here.</a></p>
							</div>
						</div>
						{/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
						<div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_e90fb8eb4a38f8c3372a5be45_17af770df1" tabIndex={-1} defaultValue /></div>
						<div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
						</div>
					</form>
				</div>
				{/*End mc_embed_signup*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  console.log(frontmatter);

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
