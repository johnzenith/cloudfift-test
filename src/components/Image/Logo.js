import React from 'react';
import logo from '../../images/logo.svg';
import clsx from 'clsx';

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