import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  let activecases=confirmed.value-deaths.value-recovered.value;
  return (
    <div className={styles.container}>  

      <Grid container spacing={3} justify="center">
      <CardComponent
          className={styles.active}
          cardTitle="Active"
          value={activecases}  
          lastUpdate={lastUpdate}
          cardSubtitle="Number of total active cases from COVID-19."
        />

        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of total confirmed cases from COVID-19."
        />

        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;
