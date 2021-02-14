import React from "react";
import { TextField, Switch, Button, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
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
            defaultChecked
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
            defaultChecked
            color="primary"
            name="Novidades"
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
