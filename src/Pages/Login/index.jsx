
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../components/services/api';

import { Container,ContainerBox} from './style';


export default  function Login(){
  const navigate = useNavigate();
  const  onSubmit = async (e) => {
    e.preventDefault();
     const data = {
      Name: e.target.elements.name.value,
      Email: e.target.elements.email.value,
      Senha: e.target.elements.senha.value,
    }
    if(window.confirm("Deseja confirmar o cadastro?")){
      const request = await api.post('/api/Usuario',{
        ...data
      })

      console.log(request)
   }
  }

  function LoginClick(){
  navigate('/Pagina1');
  };
  
  
 /* const addPost = data => api.post('/api/Usuario',JSON.stringify(data))
  .then((item) => {
    console.log(item.data);
  })
  .catch((err) => {
    console.error("ops! ocorreu o erro " + err);
  })
*/
    
   const [users, setUsers] = useState([]);
    useEffect(() => {
        api.get('/api/Usuario')
        .then((item) => {
            setUsers(item.data);
          })
          .catch((err) => {
            console.error("ops! ocorreu o erro " + err);
          })
    },[]);
    console.log(users); 

return(

<Container>
  <ContainerBox>
   <h1>Cadastro</h1>
    <form  onSubmit={onSubmit}>
      <div className="form-group">
          <label htmlFor="name">Nome </label>
          <input className="form-control" id="name" name="name" type="text" placeholder="Nome"></input>
      </div>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Digite seu email"/>
      </div>
      <div className="form-group">
          <label htmlFor="exampleInputPassword1">Senha</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="senha" placeholder="Senha"/>
      </div>
      <button type="submit" className="btn btn-primary" >Cadastrar</button>
      <button type="button" class="btn btn-secondary" onClick={LoginClick}>Já sou cadastrado</button>
    </form>
    </ContainerBox>
</Container>
 

);
}