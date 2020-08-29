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
                    <h2 className="what"> What do you want to do today?</h2>
                
                    <div className="apps-home">
                    <button className="app-btn effect04" name="email" onClick={this.navigateTo}> Check<br></br> mail </button>
                    <button className="app-btn effect05" name="book" onClick={this.navigateTo}> Search books </button>
                    <button className="app-btn effect06" name="keep" onClick={this.navigateTo}> Write a <br></br> note </button>
                </div>
                </div>


            </section>
        )
    }
}