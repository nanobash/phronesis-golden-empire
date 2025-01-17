<template>
    <div id="deposit" class="d-flex justify-content-center"></div>
</template>

<script type="text/javascript">
import axios from 'axios';
import { BACKEND_URL } from '../config';

window.addEventListener('load', function () {
    async function makePostRequest() {
        const url = BACKEND_URL + 'create-deposit-request';

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.post(url, {}, { headers });
            const cashierToken = response.data.token;

            const mountElement = document.querySelector('#deposit');

            if (window.RebillyCashier) {
                RebillyCashier.renderDeposit({
                    mountElement,
                    cashierToken,
                });
            } else {
                console.error('RebillyCashier library not loaded');
            }
        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 2xx
                console.error('Error status:', error.response.status);
                console.error('Error response:', error.response.data);
            } else if (error.request) {
                // Request was made but no response received
                console.error('Error request:', error.request);
            } else {
                // Something else happened during the request setup
                console.error('Error message:', error.message);
            }
        }
    }

    makePostRequest();
});
</script>
