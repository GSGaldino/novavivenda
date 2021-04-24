import React from 'react';

import {
  TextField,
  Grid,
  Button,
  CircularProgress,
  Collapse,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Close } from '@material-ui/icons';

import { AlertTitle } from '@material-ui/lab';

import styles from './index.module.css';

export default function Popup(props) {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [fields, setFields] = React.useState({
    profile: ''
  })
  const [isPageFullyLoaded, setisPageFullyLoaded] = React.useState(false);

  React.useEffect(() => {
    window.onload = () => setisPageFullyLoaded(true)
  }, [])

  const handleChange = event => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value })
  }

  const handleSubmit = async event => {
    setLoading(true);
    event.preventDefault();
    const { nome_completo, city, company, email, mensagem, mobilephone } = fields;
    const payload = {
      "submittedAt": Date.now(),
      "fields": [
        {
          "name": "nome_completo",
          "value": nome_completo,
        },
        {
          "name": "city",
          "value": city,
        },
        {
          "name": "company",
          "value": company,
        },
        {
          "name": "email",
          "value": email,
        },
        {
          "name": "mensagem",
          "value": mensagem,
        },
        {
          "name": "mobilephone",
          "value": mobilephone,
        }
      ]
    }

    try {
      const response = await fetch("https://api.hsforms.com/submissions/v3/integration/submit/6331207/ee38b1fd-e826-447a-942b-64e9c6ad30dc", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        event.target.reset();
        setLoading(false);
        setSuccess(true)

        return
      } else {
        console.log(response)
        setLoading(false);
        setFailed(true);
        return
      }
    } catch (error) {
      console.log(error)
      setLoading(false);
      setFailed(true);
      return
    }
  }

  return (
    <>
      <div className={styles.popup} {...props}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Nome completo"
                fullWidth
                variant="outlined"
                margin="dense"
                onChange={handleChange}
                name="nome_completo"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={styles.formControl}>
                <InputLabel
                  style={{
                    margin: "-10px 0px 0px 16px"
                  }}
                >
                  Em qual perfil você se encaixa?
                </InputLabel>
                <Select
                  value={fields.profile}
                  onChange={handleChange}
                  variant="outlined"
                  margin="dense"
                  label="Em qual perfil você se encaixa?"
                  name="profile"
                >
                  <MenuItem value="">
                    <em>Vazio</em>
                  </MenuItem>
                  {
                    [
                      "Quero comprar a reforma da minha casa com a Nova vivenda",
                      "Quero ser arquiteto da causa e empreender com a Nova vivenda",
                      "Quero fornecer materiais para a Nova vivenda",
                      "Quero saber mais sobre a nova vivenda"
                    ].map(item => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="CEP"
                fullWidth
                variant="outlined"
                margin="dense"
                onChange={handleChange}
                style={{ marginRight: '6px' }}
                name="company"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Telefone"
                fullWidth
                variant="outlined"
                margin="dense"
                style={{ marginRight: '6px' }}
                onChange={handleChange}
                name="mobilephone"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="E-mail"
                fullWidth
                variant="outlined"
                margin="dense"
                onChange={handleChange}
                style={{ marginRight: '6px' }}
                name="company"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label={<p style={{
                  color: "#1B2021",
                  fontSize: "14px",
                  lineHeight: "18px"
                }}>Aceito receber novas mensagem da Nova vivenda</p>}
                labelPlacement="end"
                style={{marginTop: "10px"}}
              />
            </Grid>
            <Grid item xs={6} style={{ margin: '10px auto' }}>
              <Button
                disabled={loading}
                color="primary"
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                style={{
                  position: 'relative',
                  fontWeight: 600,
                  color: 'var(--background-light)'
                }}
              >SAIBA MAIS
                  {loading &&
                  <CircularProgress
                    size={24}
                    style={{
                      position: 'absolute',
                      left: '50%', color: '#11333D'
                    }}
                  />}
              </Button>
            </Grid>

          </Grid>

        </form>
      </div>

      {isPageFullyLoaded && <Collapse in={success} className={styles.successMessage} >
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="large"
              onClick={() => {
                setSuccess(false);
              }}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Sucesso!</AlertTitle>
          Formulário enviado com sucesso! Em breve entraremos em contato.
        </Alert>
      </Collapse>}

      {isPageFullyLoaded && <Collapse in={failed} className={styles.failedMessage}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="large"
              onClick={() => {
                setFailed(false);
              }}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Erro!</AlertTitle>
          Desculpe, houve um erro. Tente novamente.
        </Alert>
      </Collapse>}
    </>
  )
}
