import React from 'react';

const Modal = WrappedComponent => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isOpened: props.isOpened
            }
        }

        close = () => {
            this.setState({
                isOpened: false
            })
        };

        open = () => {
            this.setState({
                isOpened: true
            })
        };

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    close={this.close}
                    open={this.open}
                    isOpened={this.state.isOpened}
                />
            )
        }
    }
};

export default Modal;