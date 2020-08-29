export class Home extends React.Component {

    navigateTo = (ev) => {
        this.props.history.push(`/${ev.target.name}`)
    }

    render() {
        return (
            <section>
                {/* <h2>Appsus Sweet Appsus</h2> */}
                <div className="start">
                    <img className="gif-home" src="../assets/img/hello_gif.gif" />
                    <h2 className="what">What do you want to do today?</h2>
                </div>
                <div className="apps-home">
                    <button className="app-btn-mail" name="email" onClick={this.navigateTo}> Check Mail </button>
                    <button className="app-btn-books" name="book" onClick={this.navigateTo}> Search books </button>
                    <button className="app-btn-nots" name="keep" onClick={this.navigateTo}> Write some notes </button>
                </div>


            </section>
        )
    }
}