import { Stack, Container, TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem, Box} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import TuneIcon from '@mui/icons-material/Tune';
import React from 'react'
import { Search } from '@mui/icons-material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const Inicio = () => {
  return (
    
     <>
        <Box style={{backgroundColor:"#3851AC", height:"400px"}}>
          <Box style={{
           display:"flex",
           justifyContent:"center"}}>
                  <TextField  label="Ingrese Ubicacion" variant='filled' style={{
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
           <FormControl variant="filled">
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
          <Box>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="Basic date picker" />
                </DemoContainer>
              </LocalizationProvider>

          </Box>
        </Box>

      
                    
            {/* 
                
                el <DatePicker/> no funciona incluso installando sus dependencias, asi que no puedo
                crear el selector de fechas.
                 
                aparentemente el DatePicker pertence a MUI X, no tengo idea cual es la diferencia pero la pagina
                del MUI donde lei eso decia que a partir de 2021 ya no se podian usar "styled"

             \
            */}

       

                </>
  ) 
}

export default Inicio