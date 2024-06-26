import { Fragment  } from 'react';
import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import Homepage from '../../features/home/Homepage';
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation();

  return (
    
    <Fragment>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      {location.pathname === '/' ? <Homepage/> : (
      <Fragment> 
        <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Outlet />
          </Container>
      </Fragment>
      )}
      
    </Fragment>
  );
}

export default observer(App);
