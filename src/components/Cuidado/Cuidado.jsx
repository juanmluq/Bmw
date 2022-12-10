import React from 'react'
import style from './Cuidado.module.css';
import imageDos from "../../img-cp2/motor.jpg"
import imageTres from "../../img-cp2/neumaticos.jpg"
import imageCuatro from "../../img-cp2/interior.jpg"


const Cuidado = (props) => {

    return (
        <div className={style.proDet}>
        <h7>CUIDA TU BMW</h7> 
       <br></br>
       <br></br>
       <div class="card mb-3">
  <div class="row g-0">
    <div class="mx-auto d-block">
      <div class="card-body">
   
        <br></br>


   <h4>CUIDADO DE MOTOR.</h4>

        <br></br>
            <img src={imageDos} class="img-fluid rounded-start" alt="..."/>
        <br></br>   
        <br></br>   

        <h5>REVISAR NIVELES:
            Aceite (con bayoneta o a través de iDrive).
            Anticongelante.
            Líquido limpiaparabrisas.
            Combustible.
            Si detecta alguna anomalía o su vehículo requiere servicio, agende una cita de servicio.</h5>
      
<br></br>
        <br></br>


   <h4>CUIDADO DE NEUMATICOS</h4>

        <br></br>
            <img src={imageTres} class="img-fluid rounded-start" alt="..."/>
        <br></br>   
        <br></br>   

        <h5>QUINCENAL.
            Revise la presión cada 15 días, la información de inflado se encuentra en el poste de la puerta del conductor del lado derecho. Si su BMW cuenta con sensores de presión, sólo revise el estado del vehículo en iDrive, de lo contrario utilice un manómetro. Mueva el vehículo para evitar que se acumule corrosión en los discos de freno. Si se encuentra en un lugar de alta humedad, hágalo una vez por semana. Al reiniciar el uso del vehículo, se recomienda un manejo suave para eliminar el óxido en los discos.

            MENSUAL.
            Mueva al menos una vez al mes su auto para cambiar la sección del neumático que está en contacto con el piso. Si su vehículo quedará almacenado por más de 30 días, sugerimos inflar los neumáticos a 50 psi (libras sobre pulgada cuadrada) para evitar que se deformen.</h5>
 
<br></br>
        <br></br>


   <h4>CUIDADO DE INTERIORES</h4>

        <br></br>
            <img src={imageCuatro} class="img-fluid rounded-start" alt="..."/>
        <br></br>   
        <br></br>   

        <h5>TAPIZADOS DE CUERO.
          Limpie con un paño o aspiradora, es recomendable hacerlo cada dos meses con productos especializados BMW Car Care Products para evitar decoloración.
 
          TAPICERÍA.
          Límpiela regularmente con aspiradora, en caso de suciedad puede utilizar una esponja suave o paño de microfibra sin frotar excesivamente.
 
          PIEZAS DE GOMA O PLÁSTICO.
          Utilice agua o un producto adecuado que no contenga silicona, alcohol o disolventes.
 
          CINTURONES DE SEGURIDAD.
          Utilice una solución jabonosa suave y no desmonte los cinturones, vuélvalos a enrollar hasta que estén secos.
</h5>
 
      
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Cuidado;

