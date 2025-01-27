<template>
    <div>
        <h1>Project 23</h1>
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
                        <strong>Good:</strong> The project was easy to understand.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We manage to successfully create a checkout sandbox account.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We manage to successfully integrate checkout gateway into Rebilly.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We manage to simulate a successful transaction.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We manage to simulate a decline transaction.
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
                        <strong>Notice:</strong> At first, we struggled with the CheckoutCom settings in the Gateway configuration.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice:</strong> <strong>Processing channel ID</strong> should be required field.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice:</strong> Would be nice to have more information regarding <strong>Mark as waiting gateway on pending payout</strong>, <strong>Sub entity ID website custom field</strong>, <strong>Processing channel ID</strong> options.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project23/picture_1.png" alt="Successful and declined transactions" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project23/picture_2.png" alt="Checkout sandbox dashboard" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project23/picture_3.png" alt="Integration to Rebilly" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project23/picture_4.png" alt="CheckoutCom settings" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
