import React from 'react'
import Layout from '../../components/Layout'
import PageHeader from '../components/PageHeader'
import headerImage from '../img/bg-membership.jpg'

export default () => (
  <Layout>
    <PageHeader bgImage={ headerImage } titleText="Membership" />
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p className="is-size-5">Your membership application has been submitted.</p>
        </div>
      </div>
    </section>
  </Layout>
)
