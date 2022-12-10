import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/actions';
import { Link } from 'react-router-dom';
import style from './ProductCard.module.css'


const ProductCard = ({name, image, id, stock, price}) => { //para hacer lo del comentario siguiente deberia traer una propiedad llamada main= true
  const dispatch = useDispatch()
  return (
    <div className= {style.card}>
                {/* si quiero puedo agregar otra clase convirtiendo el classname
                 en un array con javascript. Ej: classname= {[style.nav, main ? style.mainCard : ''].join(" ")}
                 estoy haciendo lo siguiente: pregunto si existe una propiedad llamada main (que es lo que 
                  deberia enviar cuando llamo a ProductCard) y si es asi agrego el stilo mainCard,
                 despues uno el array con un join dandole un espacio y de esa forma creo un string con dos clases que se van 
                 aplicar al div
                 */}
     <h3 className={style.proBtn}>{name}</h3>
     <img src={image} alt={name} className={style.cardbody}/>
     <p className={style.txt}>Precio: US${price}</p>
    </div>
  );
};

export default ProductCard;