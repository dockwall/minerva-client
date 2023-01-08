import React from "react";
import jwtDecode from "jwt-decode";
import { clientKey } from "../api/google";

class GoogleAuth extends React.Component {
    state = { user: {} }

    handleCallbackResponse = (response) => {
        const currentUser = jwtDecode(response.credential);

        this.setState({ user: currentUser });
    };

    componentDidMount() {
        /* global google */

        const idConfig = {
            client_id: clientKey,
            callback: this.handleCallbackResponse
        };

        const BtnConfig = {
            theme: 'outline',
            size: 'large'
        }

        google.accounts.id.initialize(idConfig);
        google.accounts.id.renderButton(document.getElementById('signInBtn'), BtnConfig)
    }


    // If we don't have user - show sign in
    // If we don't have user - show sign out
    render() {
        return (
            <div>
                {this.state.user.email ? '' : <div id='signInBtn'></div>}
            </div>

        )
    }
}

export default GoogleAuth;
