import { useState } from "react"
import { useEffect } from "react"
import { api } from "../../services/api"
import { CartContainer, CartContent, CartOrder } from "./styles"

interface Products {
    id: number;
    name: string;
    image: string;
    quantity: number;
    bestPriceFormated: string;
}

const Cart = (): JSX.Element => {
    const [products, setProducts] = useState<Products[]>([])

    useEffect(() => {
        api.get('/products')
            .then(response =>setProducts(response.data.products))
    }, [])

    return(
        <>
            <CartContainer>
                {products.map(product =>(
                    <CartContent key={product.id}>
                    <img 
                        src={product.image}
                        alt={product.name} />
                    <div>
                        <h4>{product.name}</h4>
                        <div>
                            <p>Qtd: {product.quantity}</p>
                            <p>{product.bestPriceFormated}</p>
                        </div>
                    </div>
                </CartContent>
                ))}

            </CartContainer>

            <CartOrder>
                <h3>Total do pedido: <strong>R$ 20.356,95</strong></h3>
                <button type="button">FINALIZAR COMPRA</button>
            </CartOrder>
        </>
    )
}

export default Cart