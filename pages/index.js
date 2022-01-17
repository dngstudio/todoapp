import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useFormControl } from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { createTheme } from '@mui/material/styles';
import { color, ThemeProvider } from '@mui/system';
import Todo from '../comps/Todo';
import data from './api/hello'
import { useState } from 'react';

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
    }
  },
});

export default function Home() {

  const [zadaci, setZadaci] = useState([])

  const handleKeyDown = (event) => {
    const newArr = []
    if (event.key === 'Enter') {
      setZadaci(() => {
        newArr = [...zadaci, <Todo todoText={event.target.value} handleDelete={handleDelete}/>]
        return newArr
      })
     
    }
  }

  
const handleDelete = () => {
  console.log(zadaci)
}


  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Container maxWidth="sm">
        <ThemeProvider theme={theme}>
          <Typography align="center" variant="h1" color="primary" fontWeight="bold" sx={{ mt: 5 }}>Todo</Typography>
          <Card  variant="outlined" sx={{ mt: 3, bgcolor: 'primary.light', p: 3 }}>
            <Input placeholder="Upiši zadatak" align="center" fullWidth style={{color:"#CFD8DC"}} onKeyDown={handleKeyDown}  />
          </Card>

        <Card  variant="outlined" sx={{ mt: 3, bgcolor: 'primary.light', pb: 3 , pt:2, px:3}}>
          {zadaci}
        </Card>
        
        </ThemeProvider>
        

      </Container>
    </div>
  )
}
