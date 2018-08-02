import * as React from 'react';

import * as Containers from './containers';

import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    overflow:hidden;
  }

  body {
    margin: 0 auto;
    background-color: white;
    box-sizing: border-box;
    overflow:hidden;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  /* if portrait mode is detected, rotate the entire site -90 degrees to hint rotating to landscape */
  @media (orientation: portrait) {
    html {
      background:black;
    }
  }

  *, *:before, *:after {
      box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6, p, ol, ul {
      margin: 0;
      padding: 0;
      font-weight: normal;
  }

  ol, ul {
      list-style: none;
  }

  img {
      max-width: 100%;
      height: auto;
  }
`

function App() {
  return (
    <div>
      <Containers.RoomContainer />
    </div>
  );
}

export default App;