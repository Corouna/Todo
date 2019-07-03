import React, { useState } from 'react';

/* Import MUI components here */
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import IconAdd from '@material-ui/icons/Add';

import './../css/Todo.scss';

const Field = props => {
  const { placeholder, event } = props;
  const [ val, setVal ] = useState('');

  return (
    <section className="Todo_field">
      <Paper className="Todo_field__input">
        <InputBase
          placeholder={placeholder}
          inputProps={{ 'aria-label': 'Add new task' }}
          className="Todo_field__input_base"
          value={val}
          onChange={(evt) => setVal(evt.target.value)}
        />
        <IconButton className="Todo_field__input_btn" aria-label="Add task" onClick={() => {event(val); setVal('')}}>
          <IconAdd />
        </IconButton>
      </Paper>
    </section>
  );
}

export default Field;
