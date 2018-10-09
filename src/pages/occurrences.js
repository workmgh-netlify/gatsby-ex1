import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import OccurrenceBrowser from 'react-occurrence-browser';

const style = {
    height: 'calc(100vh - 62px)',
    color: 'black!important'
};

const fieldConfig = {
    fields: [
        {
          name: 'scientificName',
          width: 200
        },
        {
          name: 'datasetKey',
          width: 100
        },
        {
          name: 'countryCode',
          width: 100
        },
        {
          name: 'basisOfRecord',
          width: 100
        },
        {
          name: 'year',
          width: 100
        },
        {
          name: 'institutionCode',
          width: 100
        }
      ]
  };

const Occurrences = (props) => (
    <Layout hideFooter={true}>
        <Helmet>
            <title>Occurrence search</title>
            <meta name="description" content="Landing Page" />
        </Helmet>
        <div id="main" className="occurrenceBrowser" style={style}>
            <OccurrenceBrowser endpoint="//es1.gbif-dev.org/fungi" config={{fieldConfig: fieldConfig}}/>
        </div>
    </Layout>
)

export default Occurrences
