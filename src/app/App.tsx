import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';
import { store} from './providers/store/store';
import { Provider } from 'react-redux';
import './App.css'
import { AppRouter } from './providers/router/AppRouter';


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App
