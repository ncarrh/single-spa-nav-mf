// import React from 'react';
// import { renderToString } from 'react-dom/server';

export default function Root(props) {
  const app = (
    <nav>
      <ul style={{ backgroundColor: 'grey', height: '4rem', display: 'flex', padding: '1rem', justifyContent:'space-around', listStyleType: 'none'}}>
        <li style={{ minWidth: '6rem', backgroundColor: 'white',display: 'flex', alignItems:'center',justifyContent: 'center', border: '1px solid transparent', borderRadius: '4px'}}>
          <a style={{ color: 'grayText', textDecoration: 'none'}} href="https://github.com/davestewart/davestewart" target="_blank">
            Github
          </a>
        </li>
        <li style={{ minWidth: '6rem', backgroundColor: 'white',display: 'flex', alignItems:'center',justifyContent: 'center', border: '1px solid transparent', borderRadius: '4px'}}>
          <a href="*" style={{ color: 'grayText', textDecoration: 'none'}}>
            Produc MF
          </a>
        </li>
      </ul>
    </nav>
  );

  return app;
}

