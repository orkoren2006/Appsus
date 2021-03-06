const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { MissBookGallery } from './MissBookGallery.jsx'
import { BookAdd } from './BookAdd.jsx'
import { BookDetails } from './BookDetails.jsx'
import { NavBarBooks } from '../../cmps/book-app/NavBarBooks.jsx'
export class MissBookApp extends React.Component {

    render() {

        return (
            <Router>
                <div className="books-app-container container">
                    <header className="books-header">
                        <h1>SusBook</h1>
                        <NavBarBooks />
                    </header>
                    <main>
                        <Switch>
                            <Route component={BookDetails} path="/book/gallery/:bookId" />
                            <Route component={BookAdd} path="/book/bookAdd" />
                            <Route component={MissBookGallery} path="/book/gallery" />
                        </Switch>
                    </main>

                </div>

            </Router>)
    }
}