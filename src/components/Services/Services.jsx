import React from 'react'
import { useSelector } from 'react-redux';
import style from './Servi.module.css';
import image from "../../img-cp2/service.jpg"

const Service = (props) => {

    return (
        <div className={style.proDet}>
           <h7>SERVICIOS</h7>
           <br></br>
        <br></br>
        <div class="card mb-3">
  <div class="row g-0">
    
    <div class="mx-auto d-block">
      <div className={style.texto} class="card-body">
        <h4>Servicios de emergencia BMW</h4>
        <h5>Estamos seguros que disfrutará durante muchos kilómetros del Placer de Conducir. Ud. ha adquirido una unidad que es resultado de lo más avanzado en ingeniería. Sin embargo, algunas situaciones podrían llegar a privarlo de su vehículo.

            Por ello BMW de Argentina S.A., ofrece un servicio de emergencia que aplica para unidades nuevas a partir de la fecha de factura de compra y se extiende por el término de tres años o 200.000 km (lo que ocurra primero) 
            para todos los automóviles BMW importados por BMW de Argentina S.A.</h5>
            <br></br>
            <img src={image} class={style.taming} alt="..."/>
        <br></br>        
        <br></br>
        <br></br>

        <h5>CONDICIONES DEL SERVICIO:
            Se considerarán beneficiarios a los ocupantes de la unidad, sean o no del grupo familiar, en el momento de la emergencia. Si el titular fuera una persona jurídica, los ocupantes serán asimismo considerados beneficiarios. Se considerará emergencia válida para el empleo de este servicio, única y solamente a todo aquel desperfecto mecánico o eléctrico que impidiera a la unidad circular por sus propios medios. Quedan expresamente excluidos de este servicio de asistencia los desperfectos causados por agentes externos, entre otros y sin que la enumeración sea limitativa:

            Avería de neumáticos.
            Choques.
            Inundaciones.
            Roturas derivadas de caso fortuito o fuerza mayor.
            En los casos antedichos, el beneficiario deberá solicitar el transporte a su compañía de seguros o en su defecto solicitar una cotización al SERVICIO DE EMERGENCIA BMW.
            </h5>
        
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Service;
