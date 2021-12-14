import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { OptionSubtitle } from '../../styles/app'
import axios from '../../services/api';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import moment from 'moment';
moment.locale('pt-br');


function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}


export default function Controle() {

  return (
    <>
      <div className="menu-title controle">
        <OptionSubtitle>Controle de Colaboradores Vacinados</OptionSubtitle>
      </div>
      <FormControle />

    </>
  )
}

export function FormControle() {

  const history = useHistory();

  const [idvacinometro, setIdVacinometro] = useState(0);

  const [colaborador, setColaborador] = useState([]);
  const [idcolaborador, setIdColaborador] = useState(0);

  const [empresa, setEmpresa] = useState([]);
  const [idempresa, setIdEmpresa] = useState(0);
  const [atualizaEmpresa, setAtualizaEmpresa] = useState(false);

  const [risco, setRisco] = useState([]);
  const [idrisco, setIdrisco] = useState(0);

  const [gruporisco, setGruporisco] = useState([]);
  const [idgruporisco, setIdGruporisco] = useState(0);

  const [dtPrimeiraDose, setDtPrimeiraDose] = useState('');
  const [dtSegundaDose, setDtSegundaDose] = useState('');
  const [dtAgendamento, setDtAgendamento] = useState('');

  const [statusPrimeiraDose, setStatusPrimeiraDose] = useState('');
  const [statusSegundaDose, setStatusSegundaDose] = useState('');
  const [statusVacina, setStatusVacina] = useState('');

  const [msgSucess, setMsgSucess] = useState('');
  const [msgFail, setMsgFail] = useState('');


  useEffect(() => {

    (async () => {

      try {
        const req_colaborador = await axios.get("colaborador");
        await sleep(1e3);
        setColaborador(req_colaborador.data);
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

    return () => {
      setAtualizaEmpresa(false);
    };

  }, []);

  useEffect(() => {

    (async () => {
      try {

        if (!!idcolaborador) {

          console.log('atualiza');
          const request = await axios.get(`colaborador/${idcolaborador}`);
          const {
            id,
            id_empresa,
            id_risco,
            id_grupo_risco,
            dt_primeira_dose,
            dt_segunda_dose,
            dt_agendamento,
            nm_status_primeira_dose,
            nm_status_segunda_dose,
            status
          } = request.data[0];

          console.log(request.data[0]);

          setIdVacinometro(id);
          setIdEmpresa(id_empresa);
          setIdrisco(id_risco);
          setIdGruporisco(id_grupo_risco);
          setDtPrimeiraDose(formatData(dt_primeira_dose));
          setDtSegundaDose(formatData(dt_segunda_dose));
          setDtAgendamento(formatData(dt_agendamento));
          setStatusPrimeiraDose(nm_status_primeira_dose);
          setStatusSegundaDose(nm_status_segunda_dose);
          setStatusVacina(status);

        } else {

          setIdEmpresa(0);
          setIdrisco(0);
          setIdGruporisco(0);
          setDtPrimeiraDose('');
          setStatusPrimeiraDose('');
          setDtSegundaDose('');
          setStatusSegundaDose('');
          setDtAgendamento('');
          setStatusVacina('');

        }

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

  }, [atualizaEmpresa])

  async function handleBuscarColaborador() {

    try {

      const [
        req_empresa,
        req_risco,
        req_gruporisco,
      ] = await Promise.all([
        axios.get("empresa"),
        axios.get("risco"),
        axios.get("gruporisco"),
      ]);

      setEmpresa(req_empresa.data);
      setRisco(req_risco.data);
      setGruporisco(req_gruporisco.data);
      setDtPrimeiraDose(formatData(dtPrimeiraDose));
      setDtSegundaDose(formatData(dtSegundaDose));
      setDtAgendamento(formatData(dtAgendamento));
      setStatusVacina(statusVacina);

    } catch (error) {
      try {
        const { status } = error.response;

        if (status === 401)
          return history.push('/sigin');

        setMsgFail(error.response.data.error.originalError.info.message);
      } catch {
        setMsgFail('Fail serch data colaborador.');
      }

    } finally {
      setAtualizaEmpresa(true);
    }
  }

  async function handleUpdateColaborador() {

    const vacinometro = {
      id: validaDadosInt(idvacinometro),
      id_colaborador: validaDadosInt(idcolaborador),
      id_empresa: validaDadosInt(idempresa),
      id_risco: validaDadosInt(idrisco),
      id_grupo_risco: validaDadosInt(idgruporisco),
      dt_primeira_dose: validaDadosDate(dtPrimeiraDose),
      dt_segunda_dose: validaDadosDate(dtSegundaDose),
      nm_status_primeira_dose: validaDadosText(statusPrimeiraDose),
      nm_status_segunda_dose: validaDadosText(statusSegundaDose),
      dt_agendamento: validaDadosDate(dtAgendamento),
      nm_status: validaDadosText(statusVacina)
    }

    const request = await axios.put('/vacinometro', {
      id: vacinometro.id,
      id_empresa: vacinometro.id_empresa,
      id_risco: vacinometro.id_risco,
      id_grupo_risco: vacinometro.id_grupo_risco,
      id_colaborador: vacinometro.id_colaborador,
      dt_primeira_dose: vacinometro.dt_primeira_dose,
      nm_status_primeira_dose: vacinometro.nm_status_primeira_dose,
      dt_segunda_dose: vacinometro.dt_segunda_dose,
      nm_status_segunda_dose: vacinometro.nm_status_segunda_dose,
      dt_agendamento: vacinometro.dt_agendamento,
      status: vacinometro.nm_status
    }).then((res) => {
      setMsgSucess('Cadastro ralizado com sucesso!');
      setMsgFail('');
      limparCampos();
    }).catch((error) => {
      setMsgFail(error.request.responseText);
      setMsgSucess('');
      console.log(error.request.responseText);
    }).finally(()=>{
      console.log(vacinometro);
    })

  }

  function validaDadosInt(param) {
    return param === undefined ? null : param
  }

  function validaDadosDate(param) {
    return param === undefined || param === "Invalid date" ? null : param
  }

  function validaDadosText(param) {
    return param === undefined ? null : param
  }

  function formatData(data) {
    return moment(data).format('YYYY-MM-DD').toString();
  }

  function formatDataCalendar(data) {
    return moment(data).add(1, 'days').format('YYYY-MM-DD').toString();
  }

  function limparCampos() {

    setIdColaborador(0);
    setIdEmpresa(0);
    setIdrisco(0);
    setIdGruporisco(0);
    setDtPrimeiraDose('');
    setStatusPrimeiraDose('');
    setDtSegundaDose('');
    setStatusSegundaDose('');
    setDtAgendamento('');
    setStatusVacina('');

  }

  const label = { inputProps: {'aria-label': 'Checkbox demo'}};

  return (
    <>
      <form onSubmit={(e) => handleUpdateColaborador(e.preventDefault())}>
        <div className="form-controle" >
          <label className="form-label">Colaborador</label>
          <Autocomplete className="form-input"
            id="clear-on-escape"
            options={colaborador}
            getOptionLabel={(option) => option.nm_colaborador + " - " + option.workday}
            //defaultValue={colaborador.find(v => v.id === idcolaborador) || {}}
            //value={colaborador.find(v => v.id === idcolaborador ) || {}}
            onChange={(event, newValue) => {
              setIdColaborador(newValue?.id);
              setAtualizaEmpresa(!atualizaEmpresa);
              setMsgFail('');
              setMsgSucess('');
            }}
            onSelect={() => {
              handleBuscarColaborador()
            }
            }
            style={{ width: 275 }}
            renderInput={(params) => <TextField {...params} label="Colaborador..." variant="standard"
            />}
          />

          <label className="form-label">Empresa</label>
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

          <label className="form-label">Risco</label>
          <Autocomplete className="form-input"
            id="clear-on-escape"
            options={risco}
            getOptionLabel={(option) => option.nm_risco || ""}
            defaultValue={risco.find(v => v.id === idrisco) || {}}
            value={risco.find(v => v.id === idrisco) || {}}
            onChange={(event, newValue) => {
              setIdrisco(newValue?.id);
            }}
            style={{ width: 275 }}
            renderInput={(params) => <TextField {...params} label="Risco..." variant="standard" />}
          />

          <label className="form-label">Grupo de Risco</label>
          <Autocomplete className="form-input"
            id="clear-on-escape"
            options={gruporisco}
            getOptionLabel={(option) => option.nm_grupo_risco || ""}
            defaultValue={gruporisco.find(v => v.id === idgruporisco) || {}}
            value={gruporisco.find(v => v.id === idgruporisco) || {}}
            onChange={(event, newValue) => {
              setIdGruporisco(newValue?.id);
            }}
            style={{ width: 275 }}
            renderInput={(params) => <TextField {...params} label="Grupo Risco..." variant="standard"

            />}
          />

          <label className="form-label">Primeira Dose</label>
          <input className="form-input" type="date" name="" id="" placeholder="1º Dose" value={dtPrimeiraDose} onChange={(e) => setDtPrimeiraDose(formatDataCalendar(e.target.valueAsDate))} />

          {/* <label className="form-label">Status 1ª Dose</label>
          <input className="form-input" type="text" name="" id="" placeholder="Status Primeira Dose" value={statusPrimeiraDose} onChange={(e) => setStatusPrimeiraDose(e.target.value)} /> */}

          <label className="form-label">Dose Única</label>
          <select className="form-input" type="text" name="" id="" placeholder="Status Primeira Dose" value={statusPrimeiraDose} onChange={(e) => setStatusPrimeiraDose(e.target.value)} >
            <option value="NAO">NÃO</option>
            <option value="UNICA">UNICA</option>
          </select>

          <label className="form-label">Segunda Dose</label>
          <input className="form-input" type="date" name="" id="" placeholder="2º Dose" value={dtSegundaDose} onChange={(e) => setDtSegundaDose(formatDataCalendar(e.target.valueAsDate))} />

          <label className="form-label">Status 2ª Dose</label>
          <input className="form-input" type="text" name="" id="" placeholder="2ª Dose" value={statusSegundaDose} onChange={(e) => setStatusSegundaDose(e.target.value)} />

          <label className="form-label">Agendamento</label>
          <input className="form-input" type="date" name="" id="" data-date-format="DD MMMM YYYY" placeholder="Data Agendamento" value={dtAgendamento} onChange={(e) => setDtAgendamento(formatDataCalendar(e.target.valueAsDate))} />

          <label className="form-label">Status</label>
          <input className="form-input" type="text" name="" id="" placeholder="Status" value={statusVacina} onChange={(e) => setStatusVacina(e.target.value)} />

          <label className='form-label'>Situação do Colaborador</label>
          {/* <select className='form-input'>
            <option value="true">Ativo</option>
            <option value="false">Desligado</option>
          </select> */}
            <FormGroup className="form-checkbox">
              <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Ativo"/>
            </FormGroup>

          <div>
            <button className="form-button" onClick={(e) => handleUpdateColaborador(e.preventDefault())}>atualizar</button>
          </div>

          <strong className="sucesso-control">{msgSucess}</strong>
          <strong className="error-control">{msgFail}</strong>

        </div>
      </form>)

    </>
  )
}