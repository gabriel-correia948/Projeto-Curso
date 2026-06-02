import dadosDisciplinasCurriculares from '../dados/dadosDisciplinasCurriculares'

function DisciplinasCurriculares(){
    return(
        <section className='disciplina'>
            <header className='headerDisciplina'>
            <h1>Disciplinas Curriculares</h1>
            </header>
            <div className='contentDisciplina'>

            {
            dadosDisciplinasCurriculares.map(
                (item, index) => (
                    <article key={index}>
                        <img src={item.link_imagem}
                        alt={item.nome}
                        title={item.nome} />
                        <h2>{item.nome} - {item.sigla}</h2>
                        </article>
                )

            )
        }
        </div>
        </section>
    )
}

export default DisciplinasCurriculares;