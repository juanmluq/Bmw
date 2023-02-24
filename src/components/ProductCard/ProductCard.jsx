import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/actions';
import { Link } from 'react-router-dom';
import style from './ProductCard.module.css'


const ProductCard = ({name, image, id, stock, price}) => {
  const dispatch = useDispatch()
  return (
    <div className= {style.card}>
            
     <h3 className={style.proBtn}>{name}</h3>
     <img src={image} alt={name} className={style.cardbody}/>
     <p className={style.txt}>Precio: US${price}</p>
    </div>
  );
};

export default ProductCard;
