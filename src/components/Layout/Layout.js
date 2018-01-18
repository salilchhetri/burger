import React from 'react';
import Aux from '../../hoc/Aux';
import Navbar from '../Navbar/Navbar';

const layout = (props) => (
  <Aux>
    <Navbar />
    <main>
      {props.children}
    </main>
  </Aux>
)

export default layout;