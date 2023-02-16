import React,{ Component,useState } from 'react';
import '../../css/formWorkWithUs.css'
import '../../css/bootstrap.css';



function FormWorkWithUs(){

  const [nombre,setNombre] = useState("");
  const [apellidos,setApellidos] = useState("");
  const [email,setEmail]= useState("");
  const [poblacion,setPoblacion] = useState("");
  const [provincia,setProvincia]= useState("");
  const [cp,setCP]= useState("");
  const [tel1,setTel1] = useState("");
  const [tel2,setTel2] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(process.env.X-VTEX-API-AppKey)
    try {
      let res = await fetch("https://indolaiberia.vtexcommercestable.com.br/dataentities/:dataEntityName/documents?_schema=candidatesInfo", {
        method: "POST",
        headers:{
        "Content-Type": "application/json",
        "X-VTEX-API-AppKey": process.env.REACT_APP_AppKey,
        "X-VTEX-API-AppToken": process.env.REACT_APP_AppToken
        },
        mode: 'no-cors',
        body: {
          nombre: nombre,
          apellidos: apellidos,
          poblacion: poblacion,
          provincia: provincia,
          codigo_postal: cp,
          tel1: tel1,
          tel2: tel2,
          email: email
        },
      });
      
      //let resJson = await res.json();
      console.log(res);
      if (res.status === 201) {
        setMessage("Información cargada");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return(
    <>
  <div className="container mt-3">
    <div className="card">
        <div className="card-header">
            Trabaja con nosotros
        </div>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName" className='wus-label'>Nombre</label>
                        <input
                                type="text"
                                name="nombre"
                                id="nombre"
                                placeholder="Nombre"
                                className="form-control"
                            />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCompany">Apellidos</label>
                        <input
                                type="text"
                                name="apellidos"
                                id="apellidos"
                                placeholder="Apellidos"
                                className="form-control"
                            />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Correo electrónico"
                                className="form-control"
                            />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="tel1">Telefono</label>
                        <input
                                type="text"
                                name="tel1"
                                id="tel1"
                                placeholder="Telefono 1"
                                className="form-control"
                            />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="tel2">Segundo Telefono</label>
                            <input
                                    type="text"
                                    name="tel2"
                                    id="tel2"
                                    placeholder="Telefono 2"
                                    className="form-control"
                                />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="cp">Codigo Postal</label>
                    <input
                            type="text"
                            name="cp"
                            id="cp"
                            placeholder="Codigo Postal"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-12 mb-3">
                <label htmlFor="cp">Población</label>
                    <input
                        type="text"
                        name="poblacion"
                        id="poblacion"
                        placeholder="Población"
                        className="form-control"
                    />
                </div>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    </div>

</div>
  </>
  )
}

export default FormWorkWithUs
