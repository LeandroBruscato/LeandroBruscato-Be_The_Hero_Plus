import React, { useState} from 'react';
import './styles.css';
import '../../global.css';

 import logoImg from '../../assets/logo.svg';
// import herosImg from '../../assets/heroes.png';

 import {FiPower, FiTrash2,FiArrowLeft} from 'react-icons/fi';
 import {Link,useHistory } from 'react-router-dom';
 import Api from '../../services/api';


export default function NewIncident()
{
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [value,setValue] = useState('');

    const ongId =  window.localStorage.getItem('ongId');
    const history = useHistory();

    async function handelNewIncident(e)
    {
        e.preventDefault();
        const data = {
            title,
            description,
            value,

            };
        
        try
        {
            await Api.post('incidents', data,{
                headers :
                {
                    Authorization : ongId,
                }
            }
            );
            history.push('/profile')
        }
        catch(e)
        {
            alert('Erro nao cadastrar caso. Tente novamebte.')
        }  
    }
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="Be The Hero" />
                
                <h1>Cadastro novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size ={16} color="#E0241"/>
                    Voltar para Home
                </Link>
                </section>
                <form action="">
                    <input type="text" 
                    placeholder="Título do caso"
                    value={title}
                    onChange= {e=>setTitle(e.target.value)}/>
                    <textarea type="text" 
                    placeholder="Descrição"
                    value={description}
                    onChange= {e=>setDescription(e.target.value)}/>
                    <input type="text" 
                    placeholder="Valor em reais"
                    value={value}
                    onChange= {e=>setValue(e.target.value)}/>
                   
                    <button className="button" type="submit" onClick={handelNewIncident}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}