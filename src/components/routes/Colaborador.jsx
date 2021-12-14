import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { MSubtitle } from '../../styles/app';
import axios from '../../services/api';
import { useHistory } from 'react-router-dom';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}


export default function Colaborador() {
  return (
    <>
      <div className="menu-title cadastro">
        <MSubtitle>Cadastro de Colaborador</MSubtitle>
      </div>
      <FormCadastro />
    </>
  )
}

export function FormCadastro() {

  const history = useHistory();

  const [colaborador, setColaborador] = useState([]);
  const [cargoFilter, setCargoFilter] = useState([]);

  const [nome, setNome] = useState('');
  const [workday, setWorkday] = useState('');
  const [cpf, setCpf] = useState('');
  const [cargo, setCargo] = useState('');
  const [gestor, setGestor] = useState('');
  const [idGestor, setIdGestor] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  const [empresa, setEmpresa] = useState([]);
  const [idempresa, setIdEmpresa] = useState(0);

  const [msgSucess, setMsgSucess] = useState('');
  const [msgFail, setMsgFail] = useState('');

  useEffect(() => {

    (async () => {

      try {
        const [
          req_colaborador,
          req_empresa
        ] = await Promise.all([
          axios.get("colaborador"),
          axios.get("empresa"),
        ]);

        setColaborador(req_colaborador.data);
        setEmpresa(req_empresa.data);

        await sleep(1e3);
      } catch (error) {

        try {
          const { status } = error.response;

          if (status === 401)
            return history.push('/sigin');

          setMsgFail(error.response.data.error.originalError.info.message);
        } catch {
          setMsgFail('Falha ao inserir dados');
        }
      }

    })();

    setIsUpdate(false);

  }, [isUpdate]);

  useEffect(() => {
    setMsgSucess('');
    setMsgFail('');
   // setCargo('');
  }, [nome, workday, cpf, cargo, gestor]);


  function limparCampos() {
    setNome('');
    setWorkday('');
    setCpf('');
    setCargo('');
    setGestor('');
    setIdGestor(0);
    setIdEmpresa(0);
  }

  async function handleSubmit() {

    try {
      await axios.post("colaborador", {
        nm_colaborador: nome,
        workday: workday,
        cpf: cpf,
        nm_cargo: cargo,
        id_gestor: idGestor,
        id_empresa: idempresa
      });

      limparCampos();
      setIsUpdate(true);
      setMsgSucess(`Colaborador: ${nome} cadastrado com sucesso!!!`);


    } catch (error) {

      const { status } = error.response;

      if (status === 401) {
        return history.push('/sigin');
      }

      try {
        setMsgFail(error.response.data.error.originalError.info.message);
      } catch {
        setMsgFail('Falha ao inserir dados');
      }

    }
  }


  return (
    <>

      <form  onSubmit={(e) => handleSubmit(e.preventDefault())}>
        <div className="cad-colaborador">

          <label className="cad-label" >Nome</label>
          <input className="cad-input" type="text" name="" id="" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} required="*" />

          <label className="cad-label" >Workday</label>
          <input className="cad-input" type="text" name="" id="" placeholder="Workday" value={workday} onChange={(e) => setWorkday(e.target.value)} />

          <label className="cad-label" >CPF</label>
          <input className="cad-input" type="text" name="" id="" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />

          <label className="cad-label" >Cargo</label>
          <Autocomplete className="form-input"
            id="clear-on-escape"
            options={colaborador}
            getOptionLabel={(option) => option.nm_cargo  || ""}
            value={colaborador.find(v => v.nm_cargo === cargo) || {}}
            onChange={(event, newValue) => {
              setCargo(newValue?.nm_cargo);
            }}

            style={{ width: 275 }}
            renderInput={(params) => <TextField {...params} label="Cargo..." variant="standard"
            />}
          />

          <label className="cad-label" >Gestor</label>
          <Autocomplete className="form-input"
            id="clear-on-escape"
            options={colaborador}
            getOptionLabel={(option) => option.nm_gestor  || ""}
            value={colaborador.find(v => v.id_gestor === idGestor) || {}}
            onChange={(event, newValue) => {
              setIdGestor(newValue?.id_gestor);
            }}

            style={{ width: 275 }}
            renderInput={(params) => <TextField {...params} label="Cargo..." variant="standard"
            />}
          />


          <label className="cad-label" >Empresa</label>
          <Autocomplete className="form-input"
            id="clear-on-escape"
            options={empresa}
            getOptionLabel={(option) => option.nm_empresa || ""}
            defaultValue={empresa.find(v => v.id === idempresa) || {}}
            value={empresa.find(v => v.id === idempresa) || {}}
            onChange={(event, newValue) => {
              setIdEmpresa(newValue?.id);
            }}
            style={{ width: 275 }}
            renderInput={(params) => <TextField {...params} label="Empresa..." variant="standard" />}
          />


          <button className="cad-button">Cadastrar</button>

          <strong className="setSuccess">{msgSucess}</strong>
          <strong className="setError2">{msgFail}</strong>

        </div>
      </form >
    </>
  )
}