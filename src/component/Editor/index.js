import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'component/SyntaxHighlighter';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'asf',
      loader: false,
      extension: null,
    };
  }

  showLoader = (show) => {
    this.setState({ loader: show });
  }

  load = (content, extension) => {
    this.setState({ content, extension });
  }

  render() {
    const { content, loader } = this.state;
    const { noContent } = this.props;
    return (
      <div className="react-f-editor">
        {content === null && loader === false ? noContent : <SyntaxHighlighter>{content}</SyntaxHighlighter>}
      </div>
    );
  }
}
Editor.propTypes = {
  content: PropTypes.any,
  noContent: PropTypes.any,
};
Editor.defaultProps = {
  noContent: <span>test</span>,
};
