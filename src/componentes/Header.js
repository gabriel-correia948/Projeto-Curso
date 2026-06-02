import { Link } from "react-router-dom";

function Header(){

    return (
        <header>
        <div className="headerTopo">
        <h1>Curso Técnico em Desenvolvimento do Sistema</h1>
        </div>
        <nav className="headerMenu">
            <ul>
                <li><Link to= "/">Home</Link></li>
                <li><Link to= "/sobreCurso">Sobre o Curso</Link></li>
                <li><Link to= "/disciplinasCurriculares">Disciplina Curricular</Link></li>
                <li><Link to= "/disciplinasTecnicnicas"> DisciplinaS Técnicas</Link></li>
                <li><Link to= "/equipe">Equipe</Link></li>
       
            </ul>
        </nav>

    </header>

    )
}

export default Header;