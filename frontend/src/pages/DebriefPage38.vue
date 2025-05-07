<template>
    <div>
      <h1>Project 38: PayPal</h1>
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
                        <strong>Notice: </strong> In documentation it says: <strong>To process reference transactions, activate this feature on both your Payflow and PayPal accounts. You must have admin permissions to perform these steps.</strong>
                        We weren't able to login to Payflow account because of some restriction.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> It should show some error to a customer when there is no payment methods available.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Some error related to <strong>billingAgreementToken</strong> in console. We couldn't find any info in our docs related to that.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> We tried to register new sandbox account for PayPal, but we did not get email for verification and thus could not make PayPal gateway active (stayed as pending) on Rebilly side.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project38/picture_1.png" alt="paypal manager" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project38/picture_2.png" alt="no pmt methods" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project38/picture_3.png" alt="billing agreement token error" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project38/picture_4.png" alt="billing agreement token error" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
