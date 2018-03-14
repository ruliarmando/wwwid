import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';

const renderWithMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};

const Layout = ({ component, ...rest }) => (
  <Route {...rest} render={matchProps => (
    <div style={{ paddingTop: '64px', width: '100%' }}>
      <Header />
      {renderWithMergedProps(component, matchProps, rest)}
    </div>
  )} />
);

export default Layout;