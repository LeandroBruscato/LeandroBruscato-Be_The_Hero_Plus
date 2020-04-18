import React, {useState} from 'react';
import './styles.css';
import '../../global.css';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

import {FiArrowLeft} from 'react-icons/fi';
import {Link,useHistory } from 'react-router-dom';
import Api from '../../services/api';

export default function Register()
{
    const[name, setName] = useState('');
    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[WhatsApp, setWhatsApp] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUf]= useState('');

    const history = useHistory();
    async function handleRegister(e)
    {
        e.preventDefault();
        const data = {
                name,
                email,
                WhatsApp,
                login,
                password,
                city,
                uf,
            };
        console.log(data);
        
        try
        {
            const response = await Api.post('ongs', data);
            alert(`Seu ONG, ${response.data.name}, foi cadastrada com sucesso.`)
            history.push('/')
        }
        catch(e)
        {
            alert(`Erro no cadasto, tente novamente. ${e}`)
        }   
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="Be The Hero" />
                
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarrem os casos de sua ONG.</p>
                <Link className="back-link" to="/">
                    <FiArrowLeft size ={16} color="#E0241"/>
                    Voltar
                </Link>
                </section>
                <form onSubmit={handleRegister}>
                <input type="text" placeholder="Nome da ONG" 
                    value= {name} 
                    onChange={e => setName(e.target.value)}/>
                    <input type="text" placeholder="Login" 
                    value= {login} 
                    onChange={e => setLogin(e.target.value)}/>
                    <input type="password" placeholder="Senha" 
                    value= {password} 
                    onChange={e => setPassword(e.target.value)}/>
                    <input type="email" placeholder="E-mail" 
                    value= {email} 
                    onChange={e => setEmail(e.target.value)}/>
                    <input type="text" placeholder="WhatsApp" 
                    value= {WhatsApp} 
                    onChange={e => setWhatsApp(e.target.value)}/>
                    <div className="input-group">
                    <input type="text" placeholder="Cidade" 
                    value= {city} 
                    onChange={e => setCity(e.target.value)}/>
                    
                    <select id="example" class="autocomplete" style={{width:80 }} value= {uf} onChange={e => setUf(e.target.value)}>
                        <option value="">UF</option>
                        <option value ="RO">RO</option>
                        <option value ="AC">AC</option>
                        <option value ="AM">AM</option>
                        <option value ="RR">RR</option>
                        <option value ="PA">PA</option>
                        <option value ="AP">AP</option>
                        <option value ="TO">TO</option>
                        <option value ="MA">MA</option>
                        <option value ="PI">PI</option>
                        <option value ="CE">CE</option>
                        <option value ="RN">RN</option>
                        <option value ="PB">PB</option>
                        <option value ="PE">PE</option>
                        <option value ="AL">AL</option>
                        <option value ="SE">SE</option>
                        <option value ="BA">BA</option>
                        <option value ="MG">MG</option>
                        <option value ="ES">ES</option>
                        <option value ="RJ">RJ</option>
                        <option value ="SP">SP</option>
                        <option value ="PR">PR</option>
                        <option value ="SC">SC</option>
                        <option value ="RS">RS</option>
                        <option value ="MS">MS</option>
                        <option value ="MT">MT</option>
                        <option value ="GO">GO</option>
                        <option value ="DF">DF</option>
                    </select>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}