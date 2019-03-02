import React from 'react'
import { Layout } from '../components/common'
import { ContactForm } from '../components/Contact'

const ContactPage = ({ data = {} }) => (
  <Layout query={data} title='PGA.Coach'>
    <ContactForm />
  </Layout>
)

export default ContactPage
