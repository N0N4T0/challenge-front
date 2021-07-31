import { useState } from "react"
import { useEffect } from "react"
import { useCart } from "../../hooks/useCart"
import { api } from "../../services/api"
import { formatPrice } from "../../util/format"
import { CartContainer, CartContent, CartOrder } from "./styles"

interface Products {
    id: number;
    name: string;
    image: string;
    quantity: number;
    bestPrice: number;
}

const Cart = (): JSX.Element => {
    // const [products, setProducts] = useState<Products[]>([])

    const {cart} = useCart()

    const cartFormatted = cart.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.bestPrice/100),
    }))

    const total = 
        formatPrice(
            cart.reduce((sumTotal, product) => {
                return sumTotal + (product.bestPrice * product.quantity)/100
            }, 0)
        )
    
   
    // useEffect(() => {
    //     api.get('/products')
    //         .then(response =>setProducts(response.data.products))
    // }, [])  
    
    return(
        <>
            <CartContainer>
                {cartFormatted.map(product =>(
                    <CartContent key={product.id}>
                    <img 
                        src={product.image}
                        alt={product.name} />
                    <div>
                        <h4>{product.name}</h4>
                        <div>
                            <p>Qtd: {product.quantity}</p>
                            <p>{product.priceFormatted}</p>
                        </div>
                    </div>
                </CartContent>
                ))}

            </CartContainer>

            <CartOrder>
                <h3>Total do pedido: <strong>{total}</strong></h3>
                <button type="button">FINALIZAR COMPRA</button>
            </CartOrder>
        </>
    )
}

export default Cart