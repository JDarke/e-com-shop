import React from "react";
import "./collectionitem.styles.scss";
import CustomButton from '../Button/button.jsx';
import { connect } from 'react-redux';
import { addItem } from '../../Redux/Cart/cart.actions.js'

const CollectionItem = ({item, addItem}) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item) }inverted>Add to cart</CustomButton>
      </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))

})


export default connect(null, mapDispatchToProps)(CollectionItem);
