import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import PageHeader from '../components/PageHeader'
import headerImage from '../img/bg-membership.jpg'

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
        <PageHeader bgImage={ headerImage } titleText="Membership" />
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="has-text-centered">
                <h1>Membership Application</h1>
                <h3>Mast Cell Hope, Inc.</h3>
                <p>
                  Membership renewal is due every year on March 1st.<br/>
                  Membership cost is $25.00 and is used to fund our research and education efforts.<br/>
                  Only members have voting rights and can participate in our research studies.
                </p>
              </div>

              <form
                name="membership"
                method="post"
                action="/membership/confirmation/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <fieldset>
                  <legend>Your Information:</legend>
                  <div className="field">
                    <label className="label" htmlFor={'name'}>
                      Your Name*
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'street'}>
                      Address*
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'street'}
                        onChange={this.handleChange}
                        id={'street'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'city'}>
                      City*
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'city'}
                        onChange={this.handleChange}
                        id={'city'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'state'}>
                      State*
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'state'}
                        onChange={this.handleChange}
                        id={'state'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'zip'}>
                      ZIP Code*
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'zip'}
                        onChange={this.handleChange}
                        id={'zip'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'email'}>
                      Email*
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'phone'}>
                      Home Phone
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'phone'}
                        onChange={this.handleChange}
                        id={'phone'}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'cell'}>
                      Cell Phone*
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'cell'}
                        onChange={this.handleChange}
                        id={'cell'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'volunteer'}>
                      Are you interested in volunteering?
                    </label>
                    <div className="control">
                      <input
                        className="radio"
                        type={'radio'}
                        name={'volunteer'}
                        onChange={this.handleChange}
                        id={'volunteer_yes'}
                        value="Yes"
                      />&nbsp;Yes&nbsp;
                      <input
                        className="radio"
                        type={'radio'}
                        name={'volunteer'}
                        onChange={this.handleChange}
                        id={'volunteer_no'}
                        value="No"
                      />&nbsp;No&nbsp;
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'skills'}>
                      Volunteering Skills<br/>
                      <small>Graphics, marketing, fundraising, researcher, nurse, physician, accounting, secretarial, computer skills, project manager etc.</small>
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={'skills'}
                        onChange={this.handleChange}
                        id={'skills'}
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Optional Information:</legend>
                  
                </fieldset>
                <div className="field">
                  <button className="button is-link" type="submit">
                    APPLY
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
