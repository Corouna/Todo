import React, { useState, useEffect } from 'react';
import { pull } from 'lodash';

/* Import MUI components here */
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/* Insert components here */
import Header from './../components/Header';
import Field from './../components/Field';
import Task from './../components/Task';

/* Import SCSS for Todo page here */
import './../css/Todo.scss';


const Todo = props => {
  const [ tasks, setTasks ] = useState( JSON.parse(localStorage.getItem('todoList')) || [] );

  // For adding new task
  const addTask = (value) => {
    if (value.trim()){
      tasks.push(value);
      setTasks([...tasks]);
    }
  };

  // For removing existing task
  const removeTask = (value) => {
    let afterRemove = pull(tasks, value);
    setTasks([...afterRemove]);
  };

  useEffect(() => {
    // At every tasks change, it will store the latest tasks to the localstorage
    localStorage.setItem('todoList', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={12} sm={12} md={11} lg={10}>
        <Paper className="Todo">
          <Header title={'To-do list'} subtitle={'Whatever you feel of doing, just write it down in here..'} />
          <Field placeholder={'I want to do..'} event={addTask} />
          <Task items={tasks} remove={removeTask} />
          <section className="Todo_footer">
            <Typography variant='overline' gutterBottom className="Todo_footer__text">
              {'© 2019 Fred A'}
            </Typography>
          </section>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Todo;
