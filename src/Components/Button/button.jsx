import React from 'react';
import './button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherButtonProps}) => (
    <button className={ `${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherButtonProps}>
        {children}
    </button>
)

export default CustomButton;