const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { MissBookGallery } from './MissBookGallery.jsx'
import { BookAdd } from './BookAdd.jsx'
import { BookDetails } from './BookDetails.jsx'
// import { Home } from './pages/Home.jsx'
// import { About } from './pages/About.jsx'
import { NavBarBooks } from '../../cmps/book-app/NavBarBooks.jsx'
export class MissBookApp extends React.Component {

    render() {

        return (
            <Router>
                <div className="books-app-container container">
                    <header className="books-header">
                        <h1>Lets Book</h1>
                        <NavBarBooks />
                    </header>
                    <main>
                        <Switch>
                            <Route component={BookDetails} path="/book/gallery/:bookId" />
                            <Route component={BookAdd} path="/book/bookAdd" />
                            <Route component={MissBookGallery} path="/book/gallery" />
                            {/* <Route component={About} path="/about" /> */}
                            {/* <Route component={Home} path="/" /> */}
                        </Switch>
                    </main>

                </div>

            </Router>)
    }
}