export class Modal extends React.Component {
    state = {
        isShown: true
    }
    closeModal = () => {
        this.setState({ isShown: false })
    }
    render() {
        const { isShown } = this.state
        const { children } = this.props
        return (
            <div className={`modal-wrapper ${isShown ? '' : 'hide'}`} onClick={this.closeModal} >
                <div className="modal-content" onClick={(ev) => ev.stopPropagation()}>
                    <button onClick={this.closeModal}>X</button>

                    {children}
                </div>
            </div >
        )
    }
}


{/* <form onSubmit={this.addPet}>
    <input name="name" value={this.state.petToAdd.name}
        placeholder="Pet Name" type="text"
        onChange={this.onInputChange}
    />
    <input name="power" value={this.state.petToAdd.power}
        placeholder="Pet Power" type="text"
        onChange={this.onInputChange}
    />

    <input type="text" placeholder="Filter by Name" onChange={(ev) => {
        props.onSetFilter(ev.target.value)
    }} />
    <button onClick={this.addPet}>Add Pet</button>
</form> */}

