import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
    
    function Copyright() {
      return (
        <Typography variant="body2" color="textSecondary">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            UNIP - Fórum ADS
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
    }
    
    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
      main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
      },
      footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      },
    }));
    
    export default function Home() {
      const classes = useStyles();
    
      return (
        <div className={classes.root}>
          <CssBaseline />
          <Container component="main" className={classes.main} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
              Seja bem-vindo!
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              {'Esse é um espaço para compartilhamento de informações. Sinta-se a vontade para criar uma thread com suas dúvidas e sugestões!'}
            </Typography>
          </Container>
          <footer className={classes.footer}>
            <Container maxWidth="sm">
              <Typography variant="body1">Esse site foi desenvolvido por Bruno Gonçalves - UNIP Pinheiros</Typography>
              <Copyright />
            </Container>
          </footer>
        </div>
      );
    }
/*
    return (

        <div class="Home">

        	<p><br/ >
            <h1>Bem-vindo ao portal de estudos da UNIP!</h1>
            <p>Aqui você terá acesso ao conteúdo exclusivo compartilhado pelos alunos da Universidade.</p>
            </p>
        </div>

    )
*/

    