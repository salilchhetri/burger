import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {
    label: 'Salad',
    type: 'salad'
  },
  {
    label: 'Cheese',
    type: 'cheese'
  },
  {
    label: 'Bacon',
    type: 'bacon'
  },
  {
    label: 'Meat',
    type: 'meat'
  }
]

const buildControls = (props) => {
  return (
    <div>
      <h3>Customize your Burger</h3>
      <hr />
      {controls.map(ctr => (
        <BuildControl key={ctr.label} label={ctr.label} />
      ))}
    </div>
  )
}

export default buildControls;