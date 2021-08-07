import React from 'react';
import logo from '../../images/logo.svg';

/**
 * @props
 *
 * className
 * alt
 */
const Logo = props => (
    <img className={props?.className || ''} alt={props?.alt || 'logo'} src={logo} />
);

export default Logo;