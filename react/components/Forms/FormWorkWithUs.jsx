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
    try {
      let res = await fetch("https://webimpacto.vtexcommercestable.com.br/dataentities/:dataEntityName/documents?_schema=candidatesInfo", {
        method: "POST",
        body: JSON.stringify({
          nombre: nombre,
          apellidos: apellidos,
          poblacion: poblacion,
          provincia: provincia,
          codigo_postal: cp,
          tel1: tel1,
          tel2: tel2,
          email: email
        }),
      });
      let resJson = await res.json();
      if (res.status === 201) {
        setName("");
        setApellidos("");
        setEmail("");
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
    <div className="formbold-main-wrapper">
    <div className="formbold-form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            value={nombre}
            name="nombre"
            id="nombre"
            placeholder="Nombre"
            className="formbold-form-input"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            value={apellidos}
            name="apellidos"
            id="apellidos"
            placeholder="Apellidos"
            className="form-input"
          />
        </div>

        <div className="mb-2">
          <input
            type="email"
            value={email}
            name="email"
            id="email"
            placeholder="Correo electrónico"
            className="form-input"
          />
        </div>

        <div className="mb-2">
          <input
            type="text"
            name="poblacion"
            id="poblacion"
            placeholder="Población"
            className="formbold-form-input"
          />
        </div>

        <div className="mb-2">
          <input
            type="text"
            name="cp"
            id="cp"
            placeholder="Codigo Postal"
            className="formbold-form-input"
          />
        </div>

        <div className="mb-2">
          <input
            type="text"
            name="tel1"
            id="tel1"
            placeholder="Telefono 1"
            className="formbold-form-input"
          />
        </div>

        <div className="mb-2">

          <input
            type="text"
            name="tel2"
            id="tel2"
            placeholder="Telefono 2"
            className="formbold-form-input"
          />
        </div>
        <div>
          <button className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  </div>
  </>
  )
}

export default FormWorkWithUs
