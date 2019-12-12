import React, { useEffect } from 'react';
import Prism from 'prismjs';


const SyntaxHighlighter = (props) => {
  const { text, setText } = React.useState(props);
  debugger;
  useEffect(() => 
    // setText(Prism.highlight('var data = 1;', Prism.languages.javascript, 'javascript'));
     () => {

    }
  );
  return (
    <div>
      {text}
    </div>
  );
};
export default SyntaxHighlighter;
