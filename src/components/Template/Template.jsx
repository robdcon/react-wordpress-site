import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
//import { Test } from './Template.styles';

class Template extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      loading: false,
      posts: []
    };
  }

  componentWillMount = () => {
    console.log('Template will mount');
  }

  componentDidMount = () => {

    console.log('Template mounted');
    const pagesUrl = '/wp-json/wp/v2/pages';
    const postsUrl = '/wp-json/wp/v2/posts';
    const wpUrl = 'https://webdesign.robdcon.co.uk';
    this.setState({
      loading:true
    }, () => { // callback
      axios.get(`${wpUrl}${postsUrl}`)
      .then(res => console.log(res.data))
      .catch(error => this.setState({
        loading:false
      }))
    })


  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Template will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Template will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Template did update');
  }

  componentWillUnmount = () => {
    console.log('Template will unmount');
  }

  render () {

    const {posts} = this.state;
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="TemplateWrapper">
        {posts.map((post) => {
          return post.content.rendered;
        })}
      </div>
    );
  }
}

Template.propTypes = {
  // bla: PropTypes.string,
};

Template.defaultProps = {
  // bla: 'test',
};

export default Template;
