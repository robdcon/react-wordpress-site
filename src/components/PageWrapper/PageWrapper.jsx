import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Test } from './PageWrapper.styles';
import Navbar from '../Navbar/Navbar';
// import CollapsableNavMenu from './CollapsableNavMenu';


const PageWrapper = () => 
{
    // constructor(props)
    // {
    //     super(props)
    //     this.state=
    //     {
    //         menuOpen:false
    //     }
    // }

    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () =>
    {
        // console.log('Fired!')
        // this.setState((prevState) =>
        // ({
        //     menuOpen: !prevState.menuOpen
        // }))
        setMenuOpen(!menuOpen);
    }

   
      return(

          <div>
              {/* <CollapsableNavMenu open={this.state.menuOpen} toggleMenu={() => {this.toggleMenu()}}></CollapsableNavMenu> */}
              <Navbar toggleMenu={() => {toggleMenu()}} collapsed={this.state.menuOpen} />
              {this.props.children}
          </div>
      )

    

}

PageWrapper.propTypes = {
  // bla: PropTypes.string,
};

PageWrapper.defaultProps = {
  // bla: 'test',
};

export default PageWrapper;
