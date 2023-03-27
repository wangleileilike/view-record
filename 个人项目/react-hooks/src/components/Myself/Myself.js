import React, { Component, useState, useContext } from 'react';
import { Button, message } from  'antd';
import Debounce from 'lodash-decorators/debounce';
import bind from 'lodash-decorators/bind';



const themes = {
    light: {
      foreground: 'red',
      background: 'green'
    },
    dark: {
      foreground: 'yellow',
      background: 'pink'
    }
  };
  
  const ThemeContext = React.createContext(themes.dark);
  
  export default function MySelef() {
    return (
      <ThemeContext.Provider value={themes.light}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  
  function Toolbar(props) {
    const theme = useContext(ThemeContext);
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }


