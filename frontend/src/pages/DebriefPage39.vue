<template>
    <div>
      <h1>Project 39: Change orders</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center">
        <div>Teammates: Tornike Nanobashvili, Alexey Sukhikh</div>
    </div>

    <hr>

    <div class="container mt-4">
        <!-- What made you smile? -->
        <div class="row mb-4">
            <div class="col-12 text-center">
                <h4 class="text-primary">What made you smile?</h4>
            </div>

            <div class="col-12 bg-light p-3 mb-3 rounded shadow-sm">
                <ol class="list-group list-group-numbered text-start">
                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> The project requirements were clear.
                    </li>
                </ol>
            </div>
        </div>

        <hr>

        <!-- What did you find confusing? -->
        <div class="row">
            <div class="col-12 text-center mb-3">
                <h4 class="text-danger">What did you find confusing?</h4>
            </div>

            <div class="col-12 bg-light p-3 mb-3 rounded shadow-sm">
                <ol class="list-group list-group-numbered text-start">
                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Maybe rework history button to go to higher level, rather than browser history?
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Do we need to hide deliver address if there is no shipping? Also should we should zero discounts, shipping and taxes?
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Can we hide customer id in quote pdf? It looks not nice.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> When a customer pays a quote via hosted payment form - it disables autopay. <a href="https://github.com/Rebilly/rebilly/issues/11981" target="_blank">GitHub issue.</a>
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project39/picture_1.png" alt="hide zero amounts" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project39/picture_2.png" alt="customer id" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project39/picture_3.png" alt="autopay toggle off" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
