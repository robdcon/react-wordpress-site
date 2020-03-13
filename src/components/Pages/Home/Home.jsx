import React from 'react';
import PropTypes from 'prop-types';
import Posts from '../../Posts';
import Courses from '../../Courses';
//import { Test } from './Home.styles';

const Home = (props) => (
  <div className="HomeWrapper">
    <Posts />
    <Courses />
  </div>
);

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
