// TODO - some nice home page
// TODO - BIG LOGO IN THE MIDDLE + 
// TODO - list of apps icons + links to apps

export class Home extends React.Component {

    render() {
        return (
            <section>
                {/* <h2>Appsus Sweet Appsus</h2> */}
                <div className="start">
                <img className="gif-home" src="../assets/img/hello_gif.gif"/>
                <h2 className="what">What do you want to do today?</h2>
                </div>
                <div className= "apps-home">
                <button className="app-btn-mail"> Check Mail </button>
                <button className="app-btn-books"> Search books </button>
                <button className="app-btn-nots"> Write some notes </button>
                </div>

                
            </section>
        )
    }
}