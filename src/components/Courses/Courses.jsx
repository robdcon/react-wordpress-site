import React from 'react';
import PropTypes from 'prop-types';
import { urls } from '../../utils/wp-url-config';
import useAxios from '../../utils/hooks/useAxios';
import { List, ListItem, ListItemText } from '@material-ui/core';
//import { Test } from './Courses.styles';

const Courses = (props) => {
 
    const courses = useAxios(`${urls.base + urls.api}courses`);
    return (
    <List component="nav" aria-label="main mailbox folders">
      {courses && courses.map((course, index) => (
        <ListItem key={index}>
          <ListItemText primary={course.title.rendered} />
        </ListItem>
      ))}
    </List>
  );
 
};

Courses.propTypes = {
  // bla: PropTypes.string,
};

Courses.defaultProps = {
  // bla: 'test',
};

export default Courses;
