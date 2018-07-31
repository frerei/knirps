import * as React from 'react';
import HelloComponent from '.';

const DemoHello = () => (
  <React.Fragment>
    <HelloComponent name="Test1" />
    <HelloComponent name="Test 2" />
  </React.Fragment>
);

export default DemoHello;