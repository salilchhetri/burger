import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

const burger = (props) => {
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="bacon" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger;