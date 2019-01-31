import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const config = {
  occurrenceEndpoint: '//c6n1.gbif.org:9200/occurrence',
  mapStateToUrl: true
};

const Occurrences = (props) => {
  if (typeof window !== 'undefined') {
    let OccurrenceBrowser = window.OccurrenceBrowser;
    return (
      <Layout hideFooter={true} disableDefaultStyle={true}>
          <Helmet>
              <title>Occurrence search</title>
              <meta name="description" content="Landing Page" />
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/mapbox-gl/0.49.0/mapbox-gl.css"></link>
          </Helmet>
          <div id="main" className="occurrenceBrowser">
              <OccurrenceBrowser config={config}/>
          </div>
      </Layout>
    );
  } else {
    return <div>Browse occurrences</div>
  }
};

export default Occurrences
