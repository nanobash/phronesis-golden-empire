<script setup>
import { onMounted } from 'vue';
import { BACKEND_URL } from '../config';

onMounted(async () => {
    const response = await fetch(BACKEND_URL + "create-cashier", {
        method: "POST",
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
});
</script>

<template>
    <div id="deposit"></div>
</template>
