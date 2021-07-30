import { CartContainer, CartContent } from "./styles"


const Cart = (): JSX.Element => {
    return(
        <>
            <CartContainer>
                <CartContent>
                    <img 
                        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                        alt="Computador" />
                    <div>
                        <h4>Notebook Samsung Intel Core</h4>
                        <div>
                            <p>Qtd: 1</p>
                            <p>R$ 6240,00</p>
                        </div>
                    </div>
                </CartContent>

                <CartContent>
                    <img 
                        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                        alt="Computador" />
                    <div>
                        <h4>Notebook Samsung Intel Core</h4>
                        <div>
                            <p>Qtd: 1</p>
                            <p>R$ 6240,00</p>
                        </div>
                    </div>
                </CartContent>

                <CartContent>
                    <img 
                        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                        alt="Computador" />
                    <div>
                        <h4>Notebook Samsung Intel Core</h4>
                        <div>
                            <p>Qtd: 1</p>
                            <p>R$ 6240,00</p>
                        </div>
                    </div>
                </CartContent>

                <h3>Total do pedido: <strong>R$ 20.356,95</strong></h3>

                <button type="button">FINALIZAR COMPRA</button>
            </CartContainer>
        </>
    )
}

export default Cart