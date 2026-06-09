import dadosDisciplinasCurriculares from "../dados/dadosDisciplinasCurriculares";
function DisciplinasCurriculares(){
    return (
        <section className='disciplinas'>
            <header className='headerDisclinas'>
               <h1>disciplinas Curriculares</h1>
            </header>
            <div className='contentDisciplinas'>
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
