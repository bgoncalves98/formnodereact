import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import validator from "validator";
import axios from "axios";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Register() {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null);
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleOnSubmit = async event => {
        event.preventDefault();
        setEmailError(null);
        setPasswordError(null);
        let errors = 0;

        if (!validator.isEmail(email))
        {
            setEmailError("O e-mail não está no formato correto!");
            errors++;
        }

        if (password !== passwordConfirmation) {
            setPasswordError("As senhas não coincidem!");
            errors++;
        }

        if (errors) return;

        const data = {
            name,
            email,
            password
        };

        try {
            await axios.post("/api/auth/register", data);
        } catch (e) {
            const message = e.response.data.message;
            if (message === "email_exists") {
                setEmailError("Esse e-mail já está cadastrado!");
            }
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registre-se para usufruir do fórum!
                </Typography>
                <form className={classes.form} onSubmit={handleOnSubmit}>
                    <TextField
                    variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Name"
                        autoFocus
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                    variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Endereço de e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        error={!!emailError}
                        helperText={emailError}
                    />
                    <TextField
                    variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Digite sua senha"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        error={!!passwordError}
                        helperText={passwordError}
                    />
                    <TextField
                    variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password Confirmation"
                        type="password"
                        value={passwordConfirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Registrar-se
                    </Button>
                </form>
            </div>
        </Container>
    );
}