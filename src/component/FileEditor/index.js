import React from 'react';
import PropTypes from 'prop-types';
import { Button, Editor, Node } from 'component';

export default class FileEditor extends React.Component {
  render() {
    return (
      <div className="test" />
    );
  }
}
FileEditor.propTypes = {
  cacheable: PropTypes.bool,
  async: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  mode: PropTypes.oneOf(['tree', 'basic']),
};
FileEditor.defaultProps = {
  cacheable: false,
  async: false,
  data: {},
  mode: 'tree',
};
