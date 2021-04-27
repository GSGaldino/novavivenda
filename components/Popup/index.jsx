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

import emailjs from 'emailjs-com';

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
    const templateParams = {
      name: nome_completo,
      message: 'Check this out!'
    };
    emailjs.init("user_xs0Z3XsGEQFbifdA0Ak0O");
    emailjs.send('default_service', 'template_4ycy9vo', templateParams)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFields({ ...fields, profile: '' })
      event.target.reset();
    }, 2000)
  }

  return (
    <>
      <div className={styles.popup} {...props}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label>Nome completo</label>
              <TextField
                type="text"
                fullWidth
                variant="outlined"
                margin="dense"
                onChange={handleChange}
                name="nome_completo"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <label>Em qual perfil você se encaixa?</label>
              <FormControl className={styles.formControl}>
                <Select
                  value={fields.profile}
                  onChange={handleChange}
                  variant="outlined"
                  margin="dense"
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
                    ].map((item, index) => (
                      <MenuItem key={index} value={item}>{item}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <label>CEP</label>
              <TextField
                type="text"
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
              <label>Telefone</label>
              <TextField
                type="text"
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
              <label>E-mail</label>
              <TextField
                type="text"
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
                label={<p className={styles.checkboxLabel}>Aceito receber novas mensagem da Nova vivenda</p>}
                labelPlacement="end"
                style={{ marginTop: "10px" }}
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
          Mensagem enviada com sucesso!
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
