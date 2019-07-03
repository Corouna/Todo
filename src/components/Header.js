/* This is for header component on the page */

import React from 'react';

/* Import MUI components here */
import Typography from '@material-ui/core/Typography';

/* Insert components here */
/* For header */
/* For input */
/* For list */
/* For footer */

import './../css/Todo.scss';

const Header = props => {
  const { title, subtitle } = props;

  return (
    <section className="Todo_header">
	    <Typography variant='h3' gutterBottom className="Todo_header__title">
	      {title}
	    </Typography>
	    <Typography variant='overline' gutterBottom className="Todo_header__title-nobold">
	      {subtitle}
	    </Typography>
	  </section>
  );
}

export default Header;
