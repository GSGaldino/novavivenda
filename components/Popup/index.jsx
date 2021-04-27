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
  const [successText, setSuccessText] = React.useState('');
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
    const { nome_completo, profile, email, cep, mobilephone, checkbox } = fields;
    const templateParams = {
      name: nome_completo,
      profile: profile,
      email: email,
      cep: cep,
      mobilephone: mobilephone,
      checkbox: checkbox
    };

    emailjs.init("user_xs0Z3XsGEQFbifdA0Ak0O");
    emailjs.send('default_service', 'template_4ycy9vo', templateParams)
      .then(function (response) {
        setSuccessText('✓ Mensagem enviada com sucesso!')
      }, function (error) {
        console.log('FAILED...', error);
      });

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
                name="cep"
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
                name="email"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                value="checkbox"
                control={<Checkbox color="primary" />}
                label={<p className={styles.checkboxLabel}>Aceito receber novas mensagem da Nova vivenda</p>}
                labelPlacement="end"
                name="checkbox"
                style={{ marginTop: "10px" }}
                onChange={e => setFields({...fields, checkbox: e.target.checked})}
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
                  color: 'var(--background-light)',
                  fontFamily: "Lemonmilk Bold",
                  borderRadius: "0px"
                }}
              >ENVIAR
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

        <p style={{
          fontFamily: 'sans-serif',
          marginBottom: "20px"
        }}>{successText}</p>
      </div>

    </>
  )
}
