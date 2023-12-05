import feriadosNacionais from './dataFeriados';
import filtraFerriados from './filtros.js';
import {formataDiaSemana, formataDataFeriado} from './formataDataFeriado.js';

function retornaProximosFeriados(numeroFeriados)
{
    let feriadosFiltro = filtraFerriados(feriadosNacionais, numeroFeriados);

    let feriadosFiltroFormatados = [];

    feriadosFiltro.forEach(feriado => {
        const dataFeriado = feriado.data;
        let diaSemana = formataDiaSemana(dataFeriado);
        const dataFeriadoFormatado = formataDataFeriado(dataFeriado);
    
        feriadosFiltroFormatados.push({
            nome: feriado.nome,
            diaSemana: diaSemana,
            data: dataFeriadoFormatado
        })
    });

    return feriadosFiltroFormatados;
}

export default retornaProximosFeriados;
