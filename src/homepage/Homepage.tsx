import { Stack, Container, Typography, Button } from "@mui/material"


const Homepage = () => {
  return (
    <Stack>
      <Container>
           <Container style={{
             display:"flex",
             justifyContent:"center"
           }}>
             <img style={{
               width:"300px",
               height:"300px"
             }} src="https://cdn.pixabay.com/photo/2013/07/12/15/05/buildings-149392_960_720.png" alt="tres edificios" />
           </Container>
           <Container style={{marginTop:"20px"}}>
             <Typography style={{
               fontWeight:"bold",
               color:"#3851AC",
               textAlign:"center"
             }}>
               Usar Roomsite es realmente sencillo!
             </Typography>
             <Typography style={{
               fontWeight:"bold",
               color:"#3851AC",
               textAlign:"center"}}>
                Sigue estos tips para que tu experiencia sea realmente sensacional.
             </Typography>
           </Container>
           <Container style={{
             display:"flex",
             justifyContent:"center",
             marginTop:"40px"
           }}>
             <Button style={{
               backgroundColor:"#1b3670",
               color:"white",
               width:"170px",
               borderRadius:"10px"
             }}>
               Siguiente
             </Button>
           </Container>
           <Container style={{marginTop:"50px"}}>
             <Typography style={{textAlign:"center", fontWeight:"bold", color:"#3851AC"}}>
             No quieres ver esto?
             </Typography>
             <Typography style={{textAlign:"center",fontWeight:"bold", color:"#46d460"}}>
             SALTAR
             </Typography>
           </Container>
      </Container>
    </Stack>
  )
}

export default Homepage
