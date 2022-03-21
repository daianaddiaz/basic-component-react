import React,{Component} from "react";
import "./Zenitsu.css";
import figura from './Zenitsu.jpeg';

class Componente extends Component {
    render(){
        return(
        <div className="container">
            
            <section><img src={figura} className='App-logo' alt='zenitsu'/></section>
            <h2 className="figure-title">ZENITSU</h2>
            <ul className='description'>
                <li>Figura Zenitsu Agatsuma</li>
                <li>Material: PVC alta Calidad</li>
                <li>Precio: $4000</li>
                <li>C1B2A3</li>
                <li>Stock: 2 </li>
          </ul>
        </div>)
    }

}

export default Componente