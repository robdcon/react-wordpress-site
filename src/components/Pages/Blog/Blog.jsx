import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Post from '../../Post/Post';


//import { Test } from './Blog.styles';

const Blog = (props) => {

  const postsUrl = '/wp-json/wp/v2/posts';
  const wpUrl = 'https://webdesign.robdcon.co.uk';
  const [posts, setPosts] = useState([]);

  const getPostData = () => {
    console.log('update');
    Axios.get(`${wpUrl}${postsUrl}`)
         .then(res => setPosts(res.data) )
         .then(() => {console.log('posts after req: ', posts)})
  }

  useEffect(() => {
   getPostData();
  }, []);

  return (
    <div className="BlogWrapper">
      {
        posts.map((post) => {
          return <Post 
                  key={post.id} 
                  className="post" 
                  title={post.title.rendered} 
                  content={post.content.rendered} 
                />
        })
      }
    </div>
  )
};

Blog.propTypes = {
  // bla: PropTypes.string,
};

Blog.defaultProps = {
  // bla: 'test',
};

export default Blog;
