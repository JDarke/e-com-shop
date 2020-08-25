import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey =  'pk_test_51HJc1tFEiaqH3sUoUSmDbTIfDAldQoyOAnQo3aj66FqwGH4oFCHeG2Q48Vin8kkQmmtTOKyUCvG65tN32baaZy0w005pDvn3WI';
    
    const onToken = token => {
        console.log(token)
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Etsyish'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`} 
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
