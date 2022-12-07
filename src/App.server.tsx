import React from 'react';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '30vw',
  }
}

const App = () => {
  return (
    <div className="sidebar-container" style={styles.container}>
      <nav className="sidebar-navigation">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App;