import { HeaderContainer, HeaderContent } from "./styles"

const Home = ():JSX.Element => {
    return(
        <>
            <HeaderContainer>
                <HeaderContent>
                    <img 
                        src="/images/logo/agencia-eplus-n-logo.png"
                        alt="agencia eplus"
                    />
                    <nav>
                        <a>Lorem ipsum</a>
                        <a>Lorem ipsum</a>
                        <a>Lorem ipsum</a>
                        <a>Lorem ipsum</a>
                        <a>Lorem ipsum</a>                        
                    </nav>

                    <nav>
                        <a>
                            <span className="material-icons">search</span>
                        </a>
                        <a>
                            <span className="material-icons">person</span>
                        </a>
                        <a>
                            <span className="material-icons">shopping_cart</span>
                        </a>
                    </nav>
                </HeaderContent>
            </HeaderContainer>
        </>
    )
}

export default Home