import React from "react";
import Header from "./Header";
import Chores from './Chores';
import Temperaments from "./Temperaments";
import Lifestyle from "./Lifestyle";
import Cleanliness from "./Cleanliness";
import Schedule from "./Schedule";
import Work from "./Work";
import Education from "./Education"
import Personality from "./Personality";
import Gender from "./Gender";
import Housing from "./Housing";
import Button from '@material-ui/core/Button';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [token,setToken] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }
  function openPersonality() {
    setToken(true);
  }
  const handleClose = () => {
    setOpen(false);
  };

  if (token) {
    return <Personality />
  }
  return (
    <BrowserRouter>
    <Switch>

    <Route exact path='/'>
    <div>
      <Header />
      <Gender />
      <Chores />
      <Temperaments />
      <Lifestyle />
      <Cleanliness />
      <Schedule />
      <Work />
      <Education />
      <Housing />
      <div class="vertical-center">
      <Button className= "butt" variant="secondary" size='lg' block onClick={handleClick}>
        Submit
      </Button>
      </div>
      <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
    <DialogTitle id="alert-dialog-slide-title">{"Would you like to take a personality test?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          This infomation would not be shared with anyone and will only be used to improve roommate matching based on your personality
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          NO
        </Button>
        <Button onClick={openPersonality} color="primary">
          YES
        </Button>
      </DialogActions>
    </Dialog>
    </div>
    </Route>

    </Switch>
    </BrowserRouter>
  );
}

export default App;

