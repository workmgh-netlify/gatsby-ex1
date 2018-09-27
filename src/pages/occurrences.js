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
        name: 'gbifScientificName',
        width: 200
      },
      {
        name: 'country',
        width: 100
      },
      {
        name: 'basisOfRecord',
        width: 100
      },
      {
        name: 'individualCount',
        width: 200
      },
      {
        name: 'year',
        width: 100
      },
      {
        name: 'continent',
        width: 100
      },
      {
        name: 'kingdom',
        width: 100
      },
      {
        name: 'phylum',
        width: 100
      },
      {
        name: 'class',
        width: 100
      },
      {
        name: 'order',
        width: 100
      },
      {
        name: 'family',
        width: 100
      },
      {
        name: 'genus',
        width: 100
      },
      {
        name: 'species',
        width: 100
      },
      {
        name: 'gbifID',
        width: 100
      },
    ]
  };

const Occurrences = (props) => (
    <Layout hideFooter={true}>
        <Helmet>
            <title>Occurrence search</title>
            <meta name="description" content="Landing Page" />
        </Helmet>
        <div id="main" className="occurrenceBrowser" style={style}>
            <OccurrenceBrowser endpoint="//es1.gbif-dev.org:9200/occurrence_v1" config={{fieldConfig: fieldConfig}}/>
        </div>
    </Layout>
)

export default Occurrences