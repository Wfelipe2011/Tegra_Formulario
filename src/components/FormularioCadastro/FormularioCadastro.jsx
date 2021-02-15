import React, { useState } from "react";
import { TextField, Switch, Button, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validarCPF}) {
  //function FormularioCadastro(props) seria o mesmo que 
  // const aoEnviar = props.aoEnviar; 
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocao, setPromocao] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState(
    {cpf: {valido:true, texto:""}})
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
       aoEnviar({nome, sobrenome, cpf, promocao, novidades})
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) =>{
          const ehValido = validarCPF(cpf);
          setErros({cpf: ehValido})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocao}
            onChange={(event) => {
              setPromocao(event.target.checked);
            }}
            defaultChecked={promocao}
            color="primary"
            name="Promoções"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            defaultChecked={novidades}
            color="primary"
            name="novidades"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
      />
      <Button variant="contained" color="primary" type="submit">
        CADASTRAR
      </Button>
    </form>
  );
}

export default FormularioCadastro;
