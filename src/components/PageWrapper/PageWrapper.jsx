import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Test } from './PageWrapper.styles';
import Navbar from '../Navbar/Navbar';
// import CollapsableNavMenu from './CollapsableNavMenu';


const PageWrapper = (props) => 
{
   

    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () =>
    {
        setMenuOpen(!menuOpen);
    }

   
      return(

          <div>
              {/* <CollapsableNavMenu open={this.state.menuOpen} toggleMenu={() => {this.toggleMenu()}}></CollapsableNavMenu> */}
              <Navbar toggleMenu={() => {toggleMenu()}} collapsed={menuOpen} />
              {props.children}
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
