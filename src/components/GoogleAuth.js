import React from "react";
import { clientKey } from "../api/google";

class GoogleAuth extends React.Component {
    componentDidMount() {
        /* global google */

        function handleCallbackResponse(response) {
            console.log(response);
        };

        const idConfig = {
            client_id: clientKey,
            callback: handleCallbackResponse
        };

        const BtnConfig = {
            theme: 'outline',
            size: 'large'
        }

        google.accounts.id.initialize(idConfig);

        google.accounts.id.renderButton(document.getElementById('signInBtn'), BtnConfig)
    }

    render() {
        return (
            <div id='signInBtn'></div>
        );
    }
}

export default GoogleAuth;
