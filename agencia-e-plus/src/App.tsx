import { BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart';

import Routes from './routes';
import GlobalStyles from './styles/global'

const App = (): JSX.Element =>{
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Routes/>
      <Cart/>
    </BrowserRouter>
  )
}

export default App;
