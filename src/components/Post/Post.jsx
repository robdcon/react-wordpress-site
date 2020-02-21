import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
//import { Test } from './Post.styles';

const Post = (props) => (
  <div className="PostWrapper">
    <h1>{props.title}</h1>
    <div>{renderHTML(props.content)}</div>
  </div>
);

Post.propTypes = {
  // bla: PropTypes.string,
};

Post.defaultProps = {
  // bla: 'test',
};

export default Post;
