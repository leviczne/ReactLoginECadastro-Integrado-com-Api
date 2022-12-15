
import React from 'react';
import { Container,ContainerBox} from './style';




export default  function Pagina1(){
return(

<Container>
  <ContainerBox>
   <h1>Login</h1>
    <form>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Digite seu email"/>
      </div>
      <div className="form-group">
          <label htmlFor="exampleInputPassword1">Senha</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="senha" placeholder="Senha"/>
      </div>
      <button type="submit" className="btn btn-primary" >Entrar</button>
    </form>
    </ContainerBox>
</Container>

);
}