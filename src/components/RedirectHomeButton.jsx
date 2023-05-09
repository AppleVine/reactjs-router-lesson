import { Component } from "react";
import { Navigate } from "react-router-dom";

export default class RedirectHomeButton extends Component {
    constructor(props){
        super(props);

        this.state = {
            shouldRedirect: false
        }
    }

    handleClick = () => {
        this.setState({ shouldRedirect: true });
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>
                    Return Home
                </button>

                {this.state.shouldRedirect && <Navigate to="/" />}
            </div>
        )
    }
}

export { RedirectHomeButton };