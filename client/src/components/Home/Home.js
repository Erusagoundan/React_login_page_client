import { Container, Button, Paper } from '@material-ui/core';
import { useUser } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import makeStyles from './styles';


import Dashboard from '../dashboard/Dashboard';


const Home = () => {
  const { logout } = useUser();
  const history = useHistory();
  const classes = makeStyles();

  const handleLogout = () => {
    console.log('logging out');
    logout(history);
  };

  return (
   <>
      <Button 
className={classes.logout} 
variant="outlined" 
color="secondary"
onClick={handleLogout}>Logout</Button>

      <Dashboard/> 
   

    
  </>
    
    
   

  );
  
};

export default Home;