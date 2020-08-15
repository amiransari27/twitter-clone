import React from 'react';
import './App.css';
import Widgets from 'components/Widgets/Widgets';
import Sidebar from 'components/Sidebar/Sidebar';
import Feed from 'components/Feed/Feed';

function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar />

      {/* feed */}
      <Feed />

      {/* widgets */}
      <Widgets />

    </div>
  );
}

export default App;
