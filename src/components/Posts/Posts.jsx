import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import useAxios from '../../utils/hooks/useAxios.js';
//import { Test } from './Posts.styles';

const Posts = (props) => {

  const postsUrl = '/wp-json/wp/v2/posts';
  const wpUrl = 'https://webdesign.robdcon.co.uk';

  const posts = useAxios(`${wpUrl}${postsUrl}`);
  
  return (
    <Grid container spacing={2} className="PostsWrapper">
      {
        posts && posts.map((post, index) => (
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography 
                  color="textSecondary"
                  gutterBottom
                  dangerouslySetInnerHTML={{__html: post.title.rendered}}
                />
                <Typography
                  variant="body2"
                  component="p"
                  dangerouslySetInnerHTML={{__html: post.content.rendered}}
                />
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid> 
  );
};

Posts.propTypes = {
  // bla: PropTypes.string,
};

Posts.defaultProps = {
  // bla: 'test',
};

export default Posts;
