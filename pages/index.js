import Head from 'next/head'
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import { createTheme } from '@mui/material/styles';
import { Box, color, ThemeProvider } from '@mui/system';
import Todo from '../comps/Todo';
import { useEffect, useState } from 'react';
import { Button, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';


const theme = createTheme({
  palette: {
    primary: {
      light: '#546E7A',
      main: '#CFD8DC',
      dark: '#002884',
      danger: '#EF9A9A',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    warning: {
      main: "#EF5350"
    },
    success: {
      main: "#90A4AE"
    }
  },
});

export default function Home() {

  

const [zadaci, setZadaci] = useState([])
const [input, setInput] = useState("")



const handleChange = (event) => {
  setInput(event.target.value)
}




const handleKeyDown = (event) => {

  if (event.key === 'Enter' && input.length > 0) {

    setZadaci((prevZadaci) => {


      let todoComp = <Todo trashValue={input}  key={prevZadaci.length + 1} todoText={input} handleDelete={deleteTodo}  />
      
      zadaci = [todoComp, ...prevZadaci ]
      setInput("")
      
      return zadaci
      
    })
  }
  
}



const deleteTodo = (event) => {


    setZadaci((prevState) => {
      const filtered = [...prevState]
      let indeks = filtered.findIndex(item => item.props.todoText === event.currentTarget.value)
      if (indeks !== -1) {
      filtered.splice(indeks, 1)
      return [...filtered]
      }
    })
  

}

const resetuj = () => {
  setZadaci([])
}



  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Container maxWidth="sm" >
        <ThemeProvider theme={theme}>
          <Typography align="center" variant="h1" color="primary" fontWeight="bold" sx={{ mt: 5 }}>Todo</Typography>
          <Card  variant="outlined" sx={{ mt: 3, bgcolor: 'primary.light', p: 3 }}>
            <Input onChange={handleChange} value={input} placeholder="Upiši zadatak" align="center" fullWidth style={{color:"#CFD8DC"}} onKeyDown={handleKeyDown}  />
          </Card>

          <Card  variant="outlined" sx={{ mt: 3, bgcolor: 'primary.light', pb: 3 , pt:3, px:3}}>
            {zadaci.length > 0 ? zadaci : <Typography color="primary">Nema zadataka. Upiši novi!</Typography>}
          </Card>
          <Box textAlign='center' sx={{ alignContent: 'center', mt:3 }}>
            <Button onClick={resetuj}  variant="outlined">Resetuj</Button>
            <IconButton  color="primary">
              <SaveIcon />
            </IconButton>
          </Box>
        
        </ThemeProvider>

      </Container>
    </div>
  )
}
