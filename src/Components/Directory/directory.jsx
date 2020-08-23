import React from 'react';
import './directory.styles.scss'
import MenuItem from '../MenuItem/menuitem';
import  ETSY_SHOP_DATA from '../../Pages/Shop/etsy.data.js'

const DATA = ETSY_SHOP_DATA;
console.log(DATA);

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: DATA
        }
    } 


    render() {
      //console.log(DATA)
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    )
                )}
            </div>
        )
    }
}

export default Directory;