import React, { Fragment, useEffect } from 'react';
import {  Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivitiesDashboard from '../../features/activities/dashboard/ActivityDashboard';

import LoadingComponent from '../layout/LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadingActivities()
  }, [activityStore])

  if(activityStore.loadingInitial) return <LoadingComponent />

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivitiesDashboard/>
      </Container>
    </Fragment>
  );
}

export default observer(App);
