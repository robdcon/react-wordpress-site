import React from 'react';
import PropTypes from 'prop-types';
import { StyledMenuButton } from './MenuButton.styles';
import MenuIcon from '@material-ui/icons/Menu';

const MenuButton = (props) =>
{
    return(

        <StyledMenuButton>
            <MenuIcon onClick={() => {props.toggleMenu()}} style={{ color: '#fed136' }} />
        </StyledMenuButton>

    )
}

MenuButton.propTypes = {
  // bla: PropTypes.string,
};

MenuButton.defaultProps = {
  // bla: 'test',
};

export default MenuButton;
