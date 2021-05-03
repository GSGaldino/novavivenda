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

import emailjs from 'emailjs-com';

import styles from './index.module.css';

export default function Popup(props) {
  const [loading, setLoading] = React.useState(false);
  const [successText, setSuccessText] = React.useState('');
  const [fields, setFields] = React.useState({
    profile: ''
  })

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

    emailjs.init("user_dMmhZ3H0rHrltk4xI88Ob");
    emailjs.send('default_service', 'template_rfsmd1i', templateParams)
      .then(function (response) {
        setSuccessText('✓ Mensagem enviada com sucesso!');
        setLoading(false);
        setFields({
          name: '',
          profile: '',
          email: '',
          cep: '',
          mobilephone: '',
        })
      }, function (error) {
        console.log('FAILED...', error);
        setLoading(false);
        setFields({
          name: '',
          profile: '',
          email: '',
          cep: '',
          mobilephone: '',
        })
      });

  }

  return (
    <>
      <div className={styles.popup} {...props}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <label style={{ margin: "0px 0px -8px 8px" }}>Nome completo</label>
            <Grid item xs={12}>
              <TextField
                type="text"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                name="nome_completo"
                required
                margin="dense"
              />
            </Grid>
            <label style={{ margin: "0px 0px 0px 8px" }}>Em qual perfil você se encaixa?</label>
            <Grid item xs={12}>
              <FormControl className={styles.formControl}>
                <Select
                  value={fields.profile}
                  onChange={handleChange}
                  variant="outlined"
                  name="profile"
                  native
                  margin="dense"
                >
                  <MenuItem value="">
                    <em>Vazio</em>
                  </MenuItem>
                  {
                    ["",
                      "Quero comprar a reforma da minha casa com a Nova vivenda",
                      "Quero ser um player da causa e empreender com a Nova vivenda",
                      "Quero fornecer materiais para a Nova vivenda",
                      "Quero saber mais sobre a nova vivenda"
                    ].map((item, index) => (
                      <option key={index} value={item}>{item}</option>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <label style={{ margin: "0px 0px -8px 8px" }}>CEP</label>
            <Grid item xs={12}>
              <TextField
                type="text"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                style={{ marginRight: '6px', }}
                name="cep"
                required
                margin="dense"
              />
            </Grid>
            <label style={{ margin: "0px 0px -8px 8px" }}>Telefone</label>
            <Grid item xs={12}>
              <TextField
                type="text"
                fullWidth
                variant="outlined"
                style={{ marginRight: '6px' }}
                onChange={handleChange}
                name="mobilephone"
                required
                margin="dense"
              />
            </Grid>
            <label style={{ margin: "0px 0px -8px 8px" }}>E-mail</label>
            <Grid item xs={12}>
              <TextField
                type="text"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                style={{ marginRight: '6px' }}
                name="email"
                required
                margin="dense"
              />
            </Grid>

            <div className={styles.flexSection}>
              <div>
                <FormControlLabel
                  value="checkbox"
                  control={<Checkbox color="primary" />}
                  label={<p className={styles.checkboxLabel}>Aceito receber novas mensagem da Nova vivenda<br />- prometemos mandar só coisa legal 🙂</p>}
                  labelPlacement="end"
                  name="checkbox"
                  style={{ marginTop: "10px" }}
                  onChange={e => setFields({ ...fields, checkbox: e.target.checked })}
                />
              </div>
              <div>
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
              </div>
            </div>
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
