import React, {useState, useEffect} from 'react';
import './styles.css';
import '../../global.css';

 import logoImg from '../../assets/logo.svg';
// import herosImg from '../../assets/heroes.png';


 import {FiPower, FiTrash2} from 'react-icons/fi';
 import {Link,useHistory } from 'react-router-dom';
 import Api from '../../services/api';

export default function Profile()
{
    const[incidents,setIncidents] = useState([]);
    const ongName =  window.localStorage.getItem('ongName');
    const ongId =  window.localStorage.getItem('ongId');
    const history = useHistory();

    async function handleDeleteIncident(id)
    {
        try
        {
            await Api.delete(`incidents/${id}`,
            {
                headers :
                    {
                        Authorization : ongId,
                    }
            });
            setIncidents(incidents.filter(incident => incident.id !== id ));
        }
        catch(error)
        {
            alert('Error ao deleter esste caso. Tente novamente');
        }
    }

    function handleLogout(id)
    {
        window.localStorage.clear();
        history.push('/');
    }

    useEffect(()=>{
        Api.get('profile', {
                headers :
                {
                    Authorization : ongId,
                }
        }).then(Response=>{
            setIncidents(Response.data);
        })
    },[ongId]);

    return(
        <div className="profile-container">
             
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span> Bem-vida, {ongName} </span>
                <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
                <button type="submit" onClick={handleLogout} >
                    <FiPower ower size ={18} color="#E0241"/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong> Caso</strong>
                        <p>{incident.title}</p>
                        <strong> Descrição</strong>
                        <p>{incident.description}</p>
                        <strong> Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                        <button onClick={()=>handleDeleteIncident(incident.id)} >
                            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                        </button>
                    </li> 
                ))}
            </ul>
        </div>
    );
}