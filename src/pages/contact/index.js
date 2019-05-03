import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
				<p>Hi! Nice of you dropping by here.</p>
				<p>We are working 100% for launching our app.</p>
				<p>Subscribe to our newsletter for more updates when available.</p>
				<div>
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
        </section>
      </Layout>
    )
  }
}
