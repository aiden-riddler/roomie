import React, {useState} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

function Chores(){

  const classes = useStyles();

  const [state, setState] = React.useState({
    Filters:[{
      head: 'Chores',
      mainQ: 'What chores do you like doing around the house?',
      choicesQ: [{
        id:1,
        value: "Sweeping"},
        {id:2,value: "Vacuuming"},{id:3,value: "Washing dishes"},
        {id:4,value: "Feeding pets"},{id:5,value: "Doing laundry"},{id:6,value: "Preparing meals"},{id:7,value: "Cleaning bathrooms"},
      {id:8,value: "Dusting"}],
      checked: ["multiple"],
      q2: 'How should your roommate respond?'
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

  const [roomie, setRoomie] = React.useState({
    Filters:[{
      head: 'Chores',
      mainQ: 'What chores do you like doing around the house?',
      choicesQ: [{
        id:1,
        value: "Sweeping"},
        {id:2,value: "Vacuuming"},{id:3,value: "Washing dishes"},
        {id:4,value: "Feeding pets"},{id:5,value: "Doing laundry"},{id:6,value: "Preparing meals"},{id:7,value: "Cleaning bathrooms"},
      {id:8,value: "Dusting"}],
      checked: ["multiple"],
      q2: 'How should your roommate respond?'
    }
    ],
    selectedR: [

    ]

  });

  const handleRoomieChange = (value, mainQuestion) => {

      setRoomie((roomie) => {
        const questionExists = roomie.selectedR.find((obj) => obj.mainQ === mainQuestion);

        if (questionExists) {
          console.log("question exists");
          console.log(questionExists);
          const qIndex = roomie.selectedR.findIndex((val) => val.mainQ === mainQuestion);
          console.log(qIndex);
          const updatedTable = roomie.selectedR[qIndex].answers.includes(value);
          console.log("contains this value ",updatedTable);

          const updatedQuestions = questionExists.answers;
          updatedTable ? updatedQuestions.filter((obj) => obj !== value): updatedQuestions.push(value);


          const selectedR = updatedTable ? [...roomie.selectedR.map((filter) => {
            return {
              ...filter,
              answers: updatedQuestions
            }
          })]:
          [...roomie.selectedR.map((filter) => {
            return {
              ...filter,
              answers: updatedQuestions
            }
          })];

          return {
            selectedR,
            Filters: [
                ...roomie.Filters.map((filter) => {
                  return {
                    ...filter,
                    choicesQ: filter.choicesQ.map((ele) => {
                      console.log(updatedQuestions.includes(ele.value))
                      return {
                        ...ele,
                        checked: updatedQuestions.includes(ele.value)
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
          const selectedR = [...state.selected,obj];
          return {
            selectedR,
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

  return(
    <div>


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
 <br />

{roomie.Filters.map((ele) => {
  return (
    <React.Fragment>
    <Typography className={classes.title} color="textSecondary" gutterBottom>
      {ele.q2}
    </Typography>

    <Typography variant="h5" component="h2">
      {ele.mainQ}
    </Typography>
    {ele.choicesQ.map((item) => {
      return (<FormGroup row>
      <FormControlLabel
       control={<GreenCheckbox  onChange={() => handleRoomieChange(item.value,ele.mainQ)}/>}
       label={item.value}/>
      </FormGroup>)
    })}
    </React.Fragment>
  )
})}
  </CardContent>
</Card>

    </div>
  )
}

export default Chores;
