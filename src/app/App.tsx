import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';
import './App.css'
import { AppRouter } from './providers/router/AppRouter';


function App() {
  return (
  <ThemeProvider>
    <BrowserRouter>
    <AppRouter>
    </AppRouter>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App
