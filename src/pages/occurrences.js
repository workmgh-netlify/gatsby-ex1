import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import OccurrenceBrowser from 'react-occurrence-browser';

const style = {
    height: 'calc(100vh - 62px)',
    color: 'black!important'
};

const Occurrences = (props) => (
    <Layout hideFooter={true}>
        <Helmet>
            <title>Occurrence search</title>
            <meta name="description" content="Landing Page" />
        </Helmet>
        <div id="main" className="occurrenceBrowser" style={style}>
            <OccurrenceBrowser endpoint="//localhost:9200/occurrences2"/>
        </div>
    </Layout>
)

export default Occurrences