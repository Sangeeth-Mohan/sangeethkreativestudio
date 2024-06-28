import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { SangeethPortfolioThemeProvider } from './context/sangeethPortfolioContext.js';
import LandingPageComponent from './components/landingPageComponent/LandingPageComponent.js';
import ProjectsComponent from './components/projects/ProjectsComponent.js';
import SkillsComponent from './components/skills/SkillsComponent.js';
import HeaderComponent from './components/header/HeaderComponent.js';
import FooterComponent from './components/footer/FooterComponent.js';
import ContactFormComponent from './components/contact/ContactFormComponent.js';


function App() {
  return (
    <SangeethPortfolioThemeProvider>
      <BrowserRouter>
        <div className='App'>
          <HeaderComponent/>
          <Routes>
            <Route path='/' element={<LandingPageComponent/>}/>
            <Route path='projects' element={<ProjectsComponent/>}/>
            <Route path='skills' element={<SkillsComponent/>}/>
            <Route path='contact' element={<ContactFormComponent/>}/>
          </Routes>
          <FooterComponent/>
        </div>
      </BrowserRouter>
    </SangeethPortfolioThemeProvider>
  );
}

export default App;
