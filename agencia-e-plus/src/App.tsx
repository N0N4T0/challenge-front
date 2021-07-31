import { BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart';

import Routes from './routes';
import GlobalStyles from './styles/global'
import { CartProvider } from './hooks/useCart'

const App = (): JSX.Element =>{
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles/>
        <Routes/>
        <Cart/>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;
