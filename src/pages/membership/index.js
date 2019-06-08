import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import headerImage from '../../img/bg-membership.jpg'

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
        <section className="section has-background-primary has-text-white">
          <div className="container">
            <div className="content">
              <div className="has-text-centered">
                <h1 className="has-text-white is-uppercase">Membership Application</h1>
                <p className="has-text-weight-bold">
                  Membership renewal is due every year on March 1st.<br/>
                  Membership cost is $25.00 and is used to fund our research and education efforts.<br/>
                  Only members have voting rights and can participate in our research studies.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
              <div className="content">
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
                <fieldset style={{ margin: '2rem 0' }}>
                  <legend><h3>Your Information:</h3><small className="has-text-secondary" style={{ marginBottom: '1rem', display: 'block' }}><em>Fields marked with * are required</em></small></legend>
                  <div className="columns">
                    <div className="column is-6">
                      <div className="field">
                        <label className="label" htmlFor={'fname'}>
                          First Name*
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'text'}
                            name={'fname'}
                            onChange={this.handleChange}
                            id={'fname'}
                            required={true}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column is-6">
                      <div className="field">
                        <label className="label" htmlFor={'lname'}>
                          Last Name*
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'text'}
                            name={'lname'}
                            onChange={this.handleChange}
                            id={'lname'}
                            required={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'street'}>
                      Street Address*
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
                  <div className="columns">
                    <div className="column is-6">
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
                    </div>
                    <div className="column is-3">
                      <div className="field">
                        <label className="label" htmlFor={'state'}>
                          State*
                        </label>
                        <div className="control">
                          <select
                            className="input"
                            name={'state'}
                            onChange={this.handleChange}
                            id={'state'}
                            required={true}
                          >
                            <option value="">Select State</option>
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AZ">AZ</option>
                            <option value="AR">AR</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DE">DE</option>
                            <option value="DC">DC</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="IA">IA</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="ME">ME</option>
                            <option value="MD">MD</option>
                            <option value="MA">MA</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MS">MS</option>
                            <option value="MO">MO</option>
                            <option value="MT">MT</option>
                            <option value="NE">NE</option>
                            <option value="NV">NV</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>
                            <option value="NY">NY</option>
                            <option value="NC">NC</option>
                            <option value="ND">ND</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VT">VT</option>
                            <option value="VA">VA</option>
                            <option value="WA">WA</option>
                            <option value="WV">WV</option>
                            <option value="WI">WI</option>
                            <option value="WY">WY</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="column is-3">
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
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-4">
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
                    </div>
                    <div className="column is-4">
                      <div className="field">
                        <label className="label" htmlFor={'phone'}>
                          Primary Phone*
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'text'}
                            name={'phone'}
                            onChange={this.handleChange}
                            id={'phone'}
                            required={true}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column is-4">
                      <div className="field">
                        <label className="label" htmlFor={'alt_phone'}>
                          Alternate Phone
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'text'}
                            name={'alt_phone'}
                            onChange={this.handleChange}
                            id={'alt_phone'}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'volunteer'}>
                      Are you interested in volunteering?
                    </label>
                    <div className="control" style={{ display: 'inline-block', marginLeft: '2rem' }}>
                      <input
                        className="radio"
                        type={'radio'}
                        name={'volunteer'}
                        onChange={this.handleChange}
                        id={'volunteer_yes'}
                        value="Yes"
                        required={true}
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
                      <small><em>Graphics, marketing, fundraising, researcher, nurse, physician, accounting, secretarial, computer skills, project manager etc.</em></small>
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
                <fieldset style={{ margin: '2rem 0' }}>
                  <legend><h3>Optional Information:</h3></legend>
                  <div className="field">
                    <label className="label" htmlFor={'member_type'}>
                      Are you a patient, caregiver or medical professional?
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'member_type'}
                        onChange={this.handleChange}
                        id={'member_type'}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'disease_type'}>
                      What form of Mast Cell Disease do you have?
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'disease_type'}
                        onChange={this.handleChange}
                        id={'disease_type'}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'recommended_doctor'}>
                      Do you have a great mast cell physician that you would like us to know about?
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'recommended_doctor'}
                        onChange={this.handleChange}
                        id={'recommended_doctor'}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'research_ideas'}>
                      Do you have any ideas for future research?
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'research_ideas'}
                        onChange={this.handleChange}
                        id={'research_ideas'}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'research_study'}>
                      Would you ever be interested in participating in a research study?
                    </label>
                    <div className="control" style={{ display: 'inline-block', marginLeft: '2rem' }}>
                      <input
                        className="radio"
                        type={'radio'}
                        name={'research_study'}
                        onChange={this.handleChange}
                        id={'research_study_yes'}
                        value="Yes"
                        required={true}
                      />&nbsp;Yes&nbsp;
                      <input
                        className="radio"
                        type={'radio'}
                        name={'research_study'}
                        onChange={this.handleChange}
                        id={'research_study_no'}
                        value="No"
                      />&nbsp;No
                    </div>
                    </div>
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
