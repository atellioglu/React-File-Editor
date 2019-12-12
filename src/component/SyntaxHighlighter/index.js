import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';


const SyntaxHighlighter = (props) => {
  const [text, setText] = React.useState(props.text);

  return (
    <div>
      {text}
    </div>
  );
};
export default SyntaxHighlighter;
