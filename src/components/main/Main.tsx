import React from 'react';
import Editor from '../editor';
import { Button } from 'antd';

import './index.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="left-content content">
        <Editor />
        <Button className="translate-btn" type="primary">
          Translate
        </Button>
      </div>
      <div className="right-content content"></div>
    </div>
  );
};

export default Main;
