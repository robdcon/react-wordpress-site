import styled from 'styled-components';
import {media} from '../../utils/media';

export const StyledMenuButton = styled.div`

    cursor:pointer;
    display:inline-block;
    ${media.tablet`display:none;`}
   
`;