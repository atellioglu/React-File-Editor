import React from 'react';
import './App.css';
import FileEditor from 'component/FileEditor';
import mock1 from 'example/mock1';
import mock2 from 'example/mock2';
import FileIcon from 'component/FileIcon';
import Editor from 'component/Editor';

function App() {
  return (
    <div className="App">
      <FileIcon iconName="js" />
      <FileEditor
        data={mock1}
        type="basic"
        async
        cacheable
      />
      <FileEditor
        data={mock2}
        type="tree"
      />
      <div>
        <Editor />

      </div>
    </div>
  );
}

export default App;
