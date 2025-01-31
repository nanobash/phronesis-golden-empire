<template>
    <div>
        <h1>Project 24</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center">
        <div>Teammates: Tornike Nanobashvili, Vladimir Berdnik</div>
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
                        <strong>Good:</strong> The project was clear to understand.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We manage to successfully create value list of 3DS bins.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We manage to successfully configure gateways.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We manage to successfully activate 3DS on Rebilly side and accomplish frictionless and challenge flows.
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
                        <strong>Notice: </strong> We could not accomplish 3DS frictionless/challenge flows with Checkout.com 3DS test cards. Seems, that once <strong>3D Secure</strong> option is enabled on gateway, it only works with Rebilly test cards.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Not clear how Rebilly test card gets approved on Checkout.com gateway.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> We tried to use test cards from Checkout.com that should have failed, however transactions were approved.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice:</strong> At the very first glance we thought, that there was bug that prevented reordering the rules. But after some time, we saw, that it was locked. Perhaps will be less confusing to tooltip appropriate text when trying to reorder the locked rules to enhance UI experience.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project24/picture_1.png" alt="3DS bins" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project24/picture_2.png" alt="Gateways" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project24/picture_3.png" alt="locked rules" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
