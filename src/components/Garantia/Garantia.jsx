import React from 'react'
import style from './Garantia.module.css';
import image from "../../img-cp2/garantia.jpg"

const Garantia = (props) => {

    return (
        <div className={style.proDet}>
            <h7 className={style.tit}>GARANTIA</h7>
            <br></br>
        <div class="card mb-3">
  <div class="row g-0">
    
    <div class="col-md-12">
      <div class="card-body">
        <h4>Condiciones de Garantía</h4>
        <h5>BMW de Argentina S.A., en su carácter de Importador, respalda la garantía que los Concesionarios Oficiales otorgan a los compradores de vehículos. Esta garantía sustituye toda otra, sobreentendida o expresa.</h5>
        
        <br></br>
            <img src={image} class="img-fluid rounded-start" alt="..."/>
        <br></br>        
        <br></br>
        <br></br>
        <h4>Alcance de la garantia</h4>
                <h5>El Concesionario Oficial vendedor garantiza el vehículo vendido durante 36 meses o 200.000 kilómetros (lo que ocurra primero) en el caso de automóviles BMW, contando a partir de la fecha de la emisión de la factura al cliente, o a partir de la fecha de entrega de la unidad al cliente, lo que ocurra primero.
        El Concesionario Oficial BMW cumplirá con las condiciones de garantía de acuerdo a los requisitos técnicos de BMW, reparando el vehículo y/o reemplazando las piezas defectuosas. Las piezas cambiadas en garantía pasan a ser propiedades de BMW y la garantía sobre las incorporadas expirará con la del vehículo.
        Cuando en la reparación de una deficiencia técnica puedan utilizarse distintos métodos (por ejemplo cambiando un conjunto completo o parte de él), el concesionario reparador tendrá la facultad de elegir, siempre bajo un punto de vista económico de forma justificable y técnicamente correcto.
        La presentación de esta garantía no podrá ser reemplazada, en ningún caso, por la reducción del precio del vehículo, sustitución del rodado o resolución del contrato de compraventa.
        La transferencia de la propiedad del vehículo incluye la garantía en las condiciones aquí descriptas, por el período que reste para completar el indicado en el primer párrafo, que se inicia con la entrega al primer adquirente.</h5>

      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Garantia;
