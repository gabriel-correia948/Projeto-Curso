import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Main from "./componentes/Main";

import Erro from './componentes/Erro';
import Equipe from './componentes/Equipe';
import DisciplinasCurriculares from './componentes/DisciplinasCurriculares';
import DisciplinasTecnicas from "./componentes/DisciplinasTécnicas";
import ListarDisciplinaCurricular from './componentes/ListarDisciplinasCurricular';
import ListarDisciplinaTecnica from './componentes/ListarDisciplinaTecnica';
import SobreCurso from "./componentes/SobreCurso";


function App() {
  return (
    <BrowserRouter>

      <>
        <Header />
        <Routes>
          <Route path="*" element={<Erro />} />
          <Route path="/" element={<Main />} />
          <Route path="/sobreCurso" element={<SobreCurso />} />
          <Route path="/disciplinasTecnicas" element={<DisciplinasTecnicas />} />
          <Route path="/disciplinasCurriculares" element={<DisciplinasCurriculares />} />

          <Route path="/disciplinaTecnica/:id" element={<ListarDisciplinaTecnica />} />
          <Route path="/disciplinaCurricular/:id" element={<ListarDisciplinaCurricular />} />

          <Route path="/equipe" element={<Equipe />} />

        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
