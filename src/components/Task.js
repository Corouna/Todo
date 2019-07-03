/* This is for task component on the page */

import React from 'react';

/* Import MUI components here */
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import IconClose from '@material-ui/icons/Close';

import './../css/Todo.scss';

const Task = props => {
  const { items, remove } = props;

  return (
    <section className="Todo_list">
      {
      	items.map((task, idx) => (
      		<Paper key={'task_' + idx} className="Todo_list__item">
		        <div className="Todo_list__item_text">
		          <Typography variant='overline' gutterBottom>
		            {task}
		          </Typography>
		        </div>
		        <div className="Todo_list__item-close">
		          <IconButton onClick={() => remove(task)}>
		            <IconClose />
		          </IconButton>
		        </div>
		      </Paper>
      	))
      }
    </section>
  );
}

export default Task;
