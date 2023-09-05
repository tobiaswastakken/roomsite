import { Stack, Container, TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem, Box} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import DatePicker from '@mui/x-date-pickers'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import TuneIcon from '@mui/icons-material/Tune';
import React from 'react'
import { Search } from '@mui/icons-material';

const Inicio = () => {
  return (
    
     <>
        <Box style={{backgroundColor:"#3851AC", height:"400px", borderRadius:"30px"}}>
          <Box style={{
           display:"flex",
           justifyContent:"center"}}>
                  <TextField label="Ingrese Ubicacion" style={{
                   backgroundColor:"white",
                   width:"350px",
                   borderRadius:"10px",
                   marginTop:"20px"
                   }} InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search style={{color:"#3851AC"}}/>
                      </InputAdornment>
                ), endAdornment:(
                  <InputAdornment position="end">
                    <TuneIcon style={{color:"#3851AC"}}/>
                  </InputAdornment>
                )}}/>
          </Box>
          
          <Box style={{marginTop:"20px", display:"flex", justifyContent:"center"}}>  
           <FormControl>
               <InputLabel>Seleccione Huespedes</InputLabel>
                 <Select style={{backgroundColor:"white", width:"350px", borderRadius:"10px"}} 
                 inputProps={{
                  startAdornment:(
                    <InputAdornment position="start">
                      <PersonAddAlt1Icon/>
                    </InputAdornment>
                  )}}>    
                       <MenuItem>1</MenuItem>
                       <MenuItem>2</MenuItem>
                       <MenuItem>3</MenuItem>
                       <MenuItem>4</MenuItem>
                       <MenuItem>5</MenuItem>
                  </Select>
           </FormControl>
          </Box>
        </Box>

      
                    
            {/* 
                
                el <DataPicker/> no funciona incluso installando sus dependencias, asi que no puedo
                crear el selector de fechas.

                el <Select/> pareciera no funcionar con el InputProps, por lo tanto no puedo poner 
                un icono dentro del input.

            */}

       

                </>
  ) 
}

export default Inicio