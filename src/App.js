import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography  } from "@material-ui/core";
import 'fontsource-roboto';
function App(){
 
    return (
      <Container component="article" maxWidth="sm">
        <Typography
        align="center"
        variant="h3"
        component="h1"
        >Formulário de cadastro</Typography >
        <FormularioCadastro 
        validarCPF={validarCPF}
        aoEnviar={aoEnviarForm} />
      </Container>
    );
  }
  function aoEnviarForm(dados){
    console.log(dados);
  }

  function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve ter 11 digitos"}
    }else{
      return {valido:true, texto:""}
    }
  }

export default App;
