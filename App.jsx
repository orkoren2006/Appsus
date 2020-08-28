// TODO - misterEmail, missKeep, missBooks - router components
// TODO - NAVBAR
// TODO - ROUTING

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { Home } from './pages/Home.jsx'
import { MissBookApp } from './pages/book-app/MissBookApp.jsx'
import { MisterEmailApp } from './pages/email-app/MisterEmailApp.jsx'
import { MissKeepApp } from './pages/keep-app/MissKeepApp.jsx'
import { NavBar } from './cmps/NavBar.jsx'

export class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <header>
                        <h1>Lets Appsus</h1>
                        <NavBar />
                    </header>
                    <main>
                        <Switch>
                            <Route component={MisterEmailApp} path="/email" />
                            <Route component={MissBookApp} path="/book" />
                            <Route component={MissKeepApp} path="/keep" />
                            {/* <Route component={Home} path="/" /> */}
                        </Switch>
                    </main>

                </div>
            </Router>
        )
    }
}

