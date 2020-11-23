import React from 'react'

import Layout from 'layout'
import { SEO } from 'components/seo'
import Homepage from 'templates/homepage'

const App = () => (
    <Layout>
        <SEO />
        <Homepage />
    </Layout>
)

export default App
