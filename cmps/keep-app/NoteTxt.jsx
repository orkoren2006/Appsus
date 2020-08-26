
export class NoteTxt extends React.Component {

    componentDidMount(){
        console.log(this.props)
    }

    state = {
        style: null,
    }

    render() {
        return (
            <section className="text-note">
                <h5>{this.props.note.info.txt}</h5>
                <button className="remove-btn">X</button>
            </section>
        )

    }
}