/*
  custom icon component that used react-icon library
  props { color, className, iconName }
*/
import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import iconList from 'component/FileIcon/iconList';

const FileIcon = (props) => {
  const { color, className, iconName } = props;
  return (
    <IconContext.Provider value={{ color, className }}>
      <div>
        { iconList[iconName] }
      </div>
    </IconContext.Provider>
  );
};

FileIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  iconName: PropTypes.string,
};

FileIcon.defaultProps = {
  color: 'black',
  className: '',
  iconName: 'js',
};

export default FileIcon;
