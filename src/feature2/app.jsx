import React from 'react';

const App = ({ children, onClick, style = {} }) => (
  <div> this is required feature</div>
);

App.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  style: React.PropTypes.object,
};

export default App;
