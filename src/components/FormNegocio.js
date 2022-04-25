import { Input, Box, TextareaAutosize, Avatar, TextField, InputLabel } from "@mui/material";
import React from "react";

class FormNegocio extends React.Component{
    render(){
        return (
            <Box sx={{ display: 'flex', width: 'maxWidth'}}>
                <form>
                    <TextField
                        type="text"
                        label="Nome do negócio"
                        variant="outlined" 
                        required
                        style={{margin:"5px", width:"250px"}}
                        sx={{display: 'flex'}}
                        />
                    <br />
                    <InputLabel style={{margin:"5px"}}>Descrição do negócio</InputLabel>
                    <TextareaAutosize 
                    label="feliz"
                    id="business-description" 
                    aria-describedby="descrição-do-negocio"
                    minRows={7}
                    width={"200px"}
                    required
                    style={{margin:"5px", width:"250px"}}
                    />
                    <br/>
                    <InputLabel style={{margin:"5px"}}>Foto do logo</InputLabel>
                    <Avatar
                        alt="Logo do negócio"
                        src=""
                        sx={{ width: 200, height: 200, marginTop: 2,marginBottom:2}}
                    />
                    
                    <Input 
                        type="file" 
                        id="file-input"
                        aria-describedby="upload-de-arquivo"
                        style={{margin:"5px"}}
                        />
                
                </form>

            </Box>
        );
    }
}

export default FormNegocio;