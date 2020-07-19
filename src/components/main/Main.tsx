import React, { useEffect } from 'react';
import Editor from '../editor';
import { Button } from 'antd';

import './index.scss';

const Main = () => {
  useEffect(() => {
    window.addEventListener('wheel', () => {
      console.log('wheel');
      alert('wheel');
    })
    window.addEventListener('mousewheel', () => {
      console.log('mousewheel');
      alert('mousewheel');
    })
    window.addEventListener('DOMMouseScroll', () => {
      alert('dommousescroll')
    })
  }, []);

  return (
    <div className="main">
      <div className="left-content content">
        <Editor />
        <Button className="translate-btn" type="primary">
          Translate
        </Button>
      </div>
      <div className="right-content content">123</div>
    </div>
  );
};

export default Main;
