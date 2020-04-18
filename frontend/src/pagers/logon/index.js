/* global localStorage */
import React, {useState, localStorage} from 'react';
import './styles.css';
import '../../global.css';

//import { LocalStorage } from "node-localstorage";
 
// global.localStorage = new LocalStorage('./scratch');

import {FiLogIn} from 'react-icons/fi';
import {Link, useHistory } from 'react-router-dom';

import Api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';


export default function Logon()
{
    const [login, setLogin] = useState('');
    const [password, SetPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e)
    {
        e.preventDefault();
        try
        {
            const rep = await Api.post('sessions', {login, password});
            // console.log(login);
            // console.log(rep.data);

            
            window.localStorage.setItem('onglogin', login);
            window.localStorage.setItem('ongName', rep.data.name);
            history.push('/profile')
        }
        catch(error)
        {
            alert('Login e/ou senha não conferem')
        }
    }
    return(
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="Be The Hero" />
            <form onSubmit={handleLogin}>
                <h1>Faça seu Logoin</h1>
                <input type="text" placeholder="Seu Login" 
                value={login}
                onChange={e => setLogin(e.target.value)}/>
                <input type="Password" placeholder="Senha" 
                value={password}
                onChange={e => SetPassword(e.target.value)}/>
                <button className="button" type="submit">Entrar</button>
                <Link className="back-link" to="/register">
                    <FiLogIn size ={16} color="#E0241"/>
                    Não tenho Cadastro
                </Link>
            </form>
            </section>
            <img src={herosImg} alt="Heros" />
        </div>        
    );
}