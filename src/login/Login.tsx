import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  useTheme,
  Link

} from "@mui/material";

const Login = () => {
  const theme = useTheme();
  return (
    <Container
      style={{
        color: theme.palette.primary.main,
      }}
    >
      <Stack spacing={"1.5rem"} marginTop={"20vh"}>
        <Typography variant="h5" color={"inherit"}>
          Ingresa a tu cuenta
        </Typography>
        <TextField
          id="standard-basic"
          label="Correo electronico"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Contraseña"
          variant="standard"
          type="password"
        />
      </Stack>
      <Container
        style={{
          display:"flex",
          justifyContent:"center",
          marginTop:"50px"
        }}
      >
        <Button
          variant="contained"
          style={{
            display:"flex",
            justifyContent:"center",
          }}
        >
          Iniciar Sesion
        </Button>
      </Container>
      <Container 
      style={{
        display:"flex",
        justifyContent:"center", 
        marginTop:"70px",
      }}
      >
        <Typography>
          ¿Olvidaste tu contraceña?
        </Typography>
      </Container>
      <Container
          style={{
            display:"flex",
            justifyContent:"center"
          }}
      >
        <Link href ="#" underline="none">
          Recuperarla
        </Link>

      </Container>
    </Container>
  );
};

export default Login;
