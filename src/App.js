import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./componentes/Header";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";

import Erro from './componentes/Erro';
import Equipe from './componentes/Equipe';
import DisciplinasCurriculares from './componentes/DisciplinasCurriculares';
import DisciplinasTecnicas from "./componentes/DisciplinasTecnicas";
import ListarDisciplinaCurricular from './componentes/ListarDisciplinaCurricular';
import ListarDisciplinaTecnica from './componentes/ListarDisplinaTecnica';
import SobreCurso from "./componentes/SobreCurso";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
        <Route path="*" element={<Erro/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/sobreCurso" element = {<SobreCurso/>}/>
        <Route path="/disciplinasTecnicas" element = {<DisciplinasTecnicas/>}/>
        <Route path="/disciplinasCurriculares" element = {<DisciplinasCurriculares/>}/>

<Route path="/disciplinaTecnica/:id" element = {<ListarDisciplinaTecnica   />}/>
<Route path="/disciplinaCurricular/:id" element = {<ListarDisciplinaCurricular/>}/>

        <Route path="/equipe" element = {<Equipe/>}/>
        </Routes>
        <Footer />
      </>
    </BrowserRouter>


  );
}

export default App;
