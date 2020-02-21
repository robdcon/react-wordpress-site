import React from 'react';
import PropTypes from 'prop-types';
import { StyledResponsiveDiv, StyledNavList, StyledCollapsableNav } from './Navbar.styles';
import MenuButton from '../MenuButton/MenuButton';
import {Link} from 'react-router-dom';

const pages = 
[
    {
        title:"Services",
        path:"/services"
    },
    {
        title:"About",
        path:"/about"
    },
    {
        title:"Portfolio",
        path:"/portfolio"
    },
    {
        title:"Contact",
        path:"/contact"
    }
]

const Navbar = (props) => (

  <div className="nav">

  <StyledCollapsableNav className="StyledCollapsableNav">

          {/* <Logo text="ROB CONNOLLY DESIGN" /> */}

          <StyledResponsiveDiv className="StyledResponsiveDiv">
              
              <StyledNavList className="StyledNavList text-uppercase" id="navbarResponsive">

                  
                  {
                      pages.map(page => 
                      {
                          return   <li key={page.title} className="nav-item"><Link className="nav-link js-scroll-trigger" to={page.path}>{page.title}</Link></li>
                      })
                  }
                 

              </StyledNavList>

          </StyledResponsiveDiv>

      <MenuButton toggleMenu={this.props.toggleMenu} />

  </StyledCollapsableNav>

</div> 

);
  

Navbar.propTypes = {
  // bla: PropTypes.string,
};

Navbar.defaultProps = {
  // bla: 'test',
};

export default Navbar;
