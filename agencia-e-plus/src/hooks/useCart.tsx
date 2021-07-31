import {useState, ReactNode, createContext, useContext, useEffect} from 'react'
import { api } from '../services/api'

interface Product {
    id: number;
    name: string;
    image: string;
    quantity: number;
    bestPrice: number;
}

interface CartProviderProps {
    children: ReactNode;
}

interface CartContextData {
    cart: Product[];
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({children}: CartProviderProps): JSX.Element {
    const [cart, setCart] = useState<Product[]>([])

    useEffect(() => {
        api.get('/products')
            .then(response =>setCart(response.data.products))
    }, [])  

    return(
        <CartContext.Provider
            value={{cart}}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): CartContextData {
    const context = useContext(CartContext)

    return context
}