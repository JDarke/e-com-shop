import React from "react";
import "./directory.styles.scss";
import MenuItem from "../MenuItem/menuitem";
import { connect } from "react-redux";
import { selectDirectorySections } from '../../Redux/Directory/directory.selectors.js'
import { createStructuredSelector } from 'reselect';

const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections 
})

export default connect(mapStateToProps)(Directory);
