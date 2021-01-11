import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import { IconButton } from '@material-ui/core'
import Card from '../Card'
import Tooltip from '../Tooltip'
import { decreaseText } from '../../utils/web_functions'
import { card_menu } from '../../lists/options'
import './style.css'

export default ({ item }) => {
    return (
        <div className='book-information-content'>
            <div className='book-information-content-card'>
                <Card noMenu />
            </div>
            <div className='book-information-content-details'>
                <Typography variant='h6'>
                    Título teste
                </Typography>
                <Typography variant='body1'>
                    {decreaseText('Na intrincada arquitetura do pensamento freudiano, alguns temas estiveram relegados ao limbo das questões pouco elaboradas ou de respostas aparentemente fáceis e óbvias. Tal foi o destino do teste de realidade, os processos envolvidos na separação entre os mundos interno e externo, entre fantasia e realidade. No entanto, nem esses processos são tão evidentes quanto podem parecer, nem foram tão pouco desenvolvidos por Freud quanto alguns supõem. É um mérito do trabalho de Patrícia Porchat resgatar detalhada e rigorosamente a complexidade do problema, trazendo uma contribuição importante para o entendimento de Freud e, mais amplamente, para a compreensão detalhada dos mecanismos mais básicos da constituição do psiquismo. Uma produção relevante no campo da metapsicologia. O livro traz os seguintes assuntos - Teste de realidade; O texto de 1911; Retrospectivamente - os textos de 1895 e 1900; O texto de 1917; O texto de 1921; O texto de 1925; O texto de 1938; Inibição; A vivência de satisfação; A vivência de dor; Atenção; Exploração do mundo externo e consciência das percepções; Atenção e percepção ativa; Julgamento, pensamento e açao motora; entre outros.', 500)}
                </Typography>
                <div className='book-information-content-details-menu'>
                    {card_menu.map((prop, key) => (
                        <Fragment key={key}>
                            <Tooltip text={prop.hover}>
                                <IconButton>
                                    {prop.icon}
                                </IconButton>
                            </Tooltip>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}