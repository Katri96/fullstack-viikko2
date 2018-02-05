import React from 'react';

class Notification extends React.Component {
    constructor(props) {
        super(props)
        this.state = { notice: this.props.notices }
    }

    componentDidMount() {
        setTimeout(() => this.setState({ notice: '' }), 3000)
    }

    componentWillReceiveProps() {
        this.setState({ notice: this.props.notices })
    }

    componenDidUpdate() {
        setTimeout(() => this.setState({ notice: '' }), 3000)
    }

    render() {
        return (
            <div style={styles.t}>
                {this.state.notice}
            </div>
        )
    }
}

const styles = {
    t: {
        backgroundColor: 'green'
    }
}

export default Notification;