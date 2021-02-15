import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import personalityQuiz from '../personalityQuiz';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '20px 50px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

function Personality(){

  const classes = useStyles();

  return (
    <div>
    <Card className={classes.root}>
    <CardContent>
    <Typography className={classes.title} color="textSecondary" gutterBottom>
      PersonalityQuiz
    </Typography>

    <Typography variant="h5" component="h2">
      Select the appropriate choice that describes you
    </Typography>

    {personalityQuiz.map((quiz,index) => {

      return (

        <ListGroup horizontal="lg" className="my-2"  key={index}>
        <ListGroup.Item>{quiz.content}</ListGroup.Item>
        <ListGroup.Item>
        <FormGroup row>
        <FormControlLabel
         control={<GreenCheckbox />}
         label="Strongly Disagree"/>
        </FormGroup>
        </ListGroup.Item>
        <ListGroup.Item>
        <FormGroup row>
        <FormControlLabel
         control={<GreenCheckbox />}
         label="Disagree"/>
        </FormGroup>
        </ListGroup.Item>
        <ListGroup.Item>
        <FormGroup row>
        <FormControlLabel
         control={<GreenCheckbox />}
         label="Neutral"/>
        </FormGroup>
        </ListGroup.Item>
        <ListGroup.Item>
        <FormGroup row>
        <FormControlLabel
         control={<GreenCheckbox />}
         label="Agree"/>
        </FormGroup>
        </ListGroup.Item>
        <ListGroup.Item>
        <FormGroup row>
        <FormControlLabel
         control={<GreenCheckbox />}
         label="Strongly Agree"/>
        </FormGroup>
        </ListGroup.Item>
        </ListGroup>

      )

    })}
    </CardContent>
    </Card>
    </div>
  )
}

export default Personality;
