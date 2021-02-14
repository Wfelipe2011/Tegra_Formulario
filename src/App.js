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
        <FormularioCadastro />
      </Container>
    );
  }


export default App;
