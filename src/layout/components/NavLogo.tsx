import { Box } from "@mui/material";
import {useRouter} from "next/router";

const NavLogo = () => {
    const ubi = useRouter()
    return (
        <>
        {ubi.pathname === "/" && <Box>Home</Box>};
        {ubi.pathname === "/login" && <Box>Login</Box>};
        {ubi.pathname === "/homepage" && <Box>Bienvenido</Box>};
        </> 

    )


}

export default NavLogo;
