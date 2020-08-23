import React from 'react';
import SHOP_DATA from './shop.data';
import ETSY_SHOP_DATA from './etsy.data';
import PreviewCollection from '../../Components/PreviewCollection/previewcollection.jsx'



class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: ETSY_SHOP_DATA
        }
    }

    render() {
        console.log(ETSY_SHOP_DATA)
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }

}

export default ShopPage;