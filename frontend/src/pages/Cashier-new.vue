<script setup>
import { onMounted, ref } from 'vue';
import { BACKEND_URL } from '../config';

const currency = ref('USD');

const switchTo = (payload) => {
    currency.value = payload;
    refreshState();
};

async function refreshState() {
    const response = await fetch(BACKEND_URL + "create-cashier", {
        method: "POST",
        body: JSON.stringify({ currency: currency.value }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    const mountElement = document.querySelector("#deposit");
    const cashierToken = data.cashierToken;

    if (window.RebillyCashier) {
        window.RebillyCashier.renderDeposit({
            mountElement,
            cashierToken,
        });
    } else {
        console.error("RebillyCashier library not loaded");
    }
};

onMounted(async () => {
    refreshState();
});
</script>

<template>
    <button @click="switchTo('USD')" :disabled="currency==='USD'">USD</button>
    <button @click="switchTo('CAD')" :disabled="currency==='CAD'">CAD</button>

    <div id="deposit"></div>
</template>
