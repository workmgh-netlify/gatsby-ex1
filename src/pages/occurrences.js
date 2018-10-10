import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
 
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

const Occurrences = (props) => {
  if (typeof window !== 'undefined') {
    let OccurrenceBrowser = window.OccurrenceBrowser;
    return (
      <Layout hideFooter={true} disableDefaultStyle={true}>
          <Helmet>
              <title>Occurrence search</title>
              <meta name="description" content="Landing Page" />
          </Helmet>
          <div id="main" className="occurrenceBrowser" style={style}>
              <OccurrenceBrowser endpoint="//es1.gbif-dev.org/svampeatlas" config={{mapStateToUrl: true, fieldConfig: fieldConfig}}/>
          </div>
      </Layout>
    );
  } else {
    return <div>Browse occurrences</div>
  }
};

export default Occurrences
