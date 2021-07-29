import {Route} from 'react-router-dom'

import Home from './pages/Home'

const Routes = (): JSX.Element => {
    return(
        <Route path="/" exact component={Home}/>
    )
}

export default Routes