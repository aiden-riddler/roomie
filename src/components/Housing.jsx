import React from 'react';

import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

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

function Gender(){

  const classes = useStyles();

  const [state, setState] = React.useState({
    Filters:[{
      head: 'Housing Options',
      mainQ: 'What housing options do you prefer?',
      choicesQ: [{
        id:1,
        value: "Apartments"},
        {id:2,value: "Home"},{id:3,value: "Co-living spaces"},
        ]
    },{
      mainQ: 'How many bedrooms?',
      choicesQ: [{
        id:1,
        value: "1"},
        {id:2,value: "2"},{id:3,value: "3"},
        ]
    },{
      mainQ: 'Which roomate would you prefer?',
      choicesQ: [{
        id:1,
        value: "Expatriate"},
        {id:2,value: "Local Citizen"},{id:3,value: "Any"},
        ]
    }
    ],
    selected: [

    ],
  });

  const handleChange = (id,value, mainQuestion) => {


      setState((state) => {
        const questionExists = state.selected.find((obj) => obj.mainQ === mainQuestion);

        if (questionExists) {
          console.log("question exists");
          console.log(questionExists);
          const qIndex = state.selected.findIndex((val) => val.mainQ === mainQuestion);
          console.log(qIndex);
          const updatedTable = state.selected[qIndex].answers.includes(value);
          console.log("contains this value ",updatedTable);

          const updatedQuestions = questionExists.answers;
          updatedTable ? updatedQuestions.filter((obj) => obj !== value): updatedQuestions.push(value);


          const selected = updatedTable ? [...state.selected.map((filter) => {
            return {
              ...filter,
              answers: updatedQuestions
            }
          })]:
          [...state.selected.map((filter) => {
            return {
              ...filter,
              answers: updatedQuestions
            }
          })];

          return {
            selected,
            Filters: [
                ...state.Filters.map((filter) => {
                  return {
                    ...filter,
                    choicesQ: filter.choicesQ.map((ele) => {
                      console.log(selected[qIndex].answers.includes(ele.value))
                      return {
                        ...ele,
                        checked: selected[qIndex].answers.includes(ele.value)
                      }
                    })
                  }
                })
              ]
          }

        }else{
          console.log("question doesn't exists");
          const obj = {
            mainQ: mainQuestion,
            answers : [value]
          }
          const selected = [...state.selected,obj];
          return {
            selected,
            Filters: [
                ...state.Filters.map((filter) => {
                  return {
                    ...filter,
                    choicesQ: filter.choicesQ.map((ele) => {
                      if (ele.value === value ){
                        return {
                          ...ele,
                          checked: true
                        }
                      }else{
                        return {
                          ...ele,
                          checked: false
                        }
                      }

                    })
                  }
                })
              ]
          }
        }
      });
          console.log(state.selected);
  };
  return (
    <Card className={classes.root}>
    <CardContent>

    {state.Filters.map((ele) => {
      return (
        <React.Fragment>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {ele.head}
        </Typography>

        <Typography variant="h5" component="h2">
          {ele.mainQ}
        </Typography>
        {ele.choicesQ.map((item) => {

          const {id,value} = item;
          return (<FormGroup row>
          <FormControlLabel
           control={<GreenCheckbox onChange={() => handleChange(id,value,ele.mainQ)}/>}
           label={item.value}/>
          </FormGroup>)
        })}
        </React.Fragment>
      )
  })}

  </CardContent>
</Card>

  )
}

export default Gender;
