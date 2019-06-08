import React from 'react'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import headerImage from '../../img/bg-membership.jpg'

export default () => (
  <Layout>
    <PageHeader bgImage={ headerImage } titleText="Membership" />
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you for applying!</h1>
          <p className="is-size-5">Your application will be reviewed and if for any reason it is not accepted, your initial membership fee will be refunded.</p>
        </div>
      </div>
    </section>
  </Layout>
)
