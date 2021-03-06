import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();

    ObtenerDatos = (e) => {
        e.preventDefault();
        //Tomamos el valor del input de buequeda
        const terminoBusqueda = this.busquedaRef.current.value;
        //Lo enviamos al componente principal
        this.props.datosBuscar(terminoBusqueda);
    };

    render() { 
        return ( 
            <form onSubmit={this.ObtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg"
                        placeholder="Busca tu image. Ejemplo: Futbol" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>
                    </div>
                </div>
            </form>
         );
    }
}
 
export default Buscador;