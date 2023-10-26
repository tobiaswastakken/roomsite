import { Box, Container } from "@mui/material";
import {useRouter} from "next/router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NavLogo = () => {
    const ubi = useRouter()
    return (
        <Container style={{display:"flex",flexDirection:"row"}}>
            <ArrowBackIcon
            style={{marginRight:"10px"}}
            />
            {ubi.pathname === "/" && <Box>Home</Box>}
            {ubi.pathname === "/login" && <Box>Login</Box>}
            {ubi.pathname === "/homepage" && <Box>Bienvenido</Box>}
        </Container> 

    )


}

export default NavLogo;
