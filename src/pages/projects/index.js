import React from 'react'

import Layout from '../../components/Layout'
import PageHeader from "../components/PageHeader"
import ProjectRoll from '../../components/ProjectRoll'

export default class ProjectIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageHeader imgPath="/img/bg-research.jpg" titleText="Research Projects" />
        <section className="section">
          <div className="container">
            <div className="content">
              <ProjectRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
