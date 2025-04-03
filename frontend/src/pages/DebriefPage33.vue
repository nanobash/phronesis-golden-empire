<template>
    <div>
      <h1>Project 33</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center">
        <div>Teammates: Tornike Nanobashvili, Egor Druzhinin</div>
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

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to successfully create $5 off year premium membership, that is redeemable once per customer and per plan.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to successfully create 10% off during April, that may not be combined with any other coupons.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to successfully create $20 off for orders of more than $500, that is redeemable once per customer.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to successfully created 10% off the first 3 months of the Premium monthly membership, that is redeemable once per customer and may not be combined with any other coupons.
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
                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> There was a bug creating country based customer restriction. <a href="https://github.com/Rebilly/rebilly/issues/11020" target="_blank">GitHub issue</a>.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: Restrict to bxgy</strong> dropdown does not show the selected value upon click, that is strange and not expected. 
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: Discount percent </strong> field is not highlighed as red in case of specified incorrect value.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>if restriction fields are marked as red, after updating the value in the field does not resolve the red highliting.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> There is not possible to <strong>Restrict to bxgy</strong> without specifying discount (fixed/percent) amount.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Perhaps will be good to have <strong>Coupon code</strong> copy button.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Perhaps will be good to have possibility to delete not (used) redeemed coupon?
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> If we try to <strong>Save coupon</strong> without any modification error will appear, but then if we toggle restrictions they are also marked directly as incorrect fields, that should not be expected.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Redemptions data table title max length is 25 chars, that might not be enough.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: Restrict to exclusive application</strong> title seems not self explanatory, perhaps will be good to improve the name?
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project33/picture_1.png" alt="copy coupon code" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project33/picture_2.png" alt="errors on toggling" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project33/picture_3.png" alt="errors on specifying quantities" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project33/picture_4.png" alt="toast error message on entering the percentage" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project33/picture_5.png" alt="countries" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project33/picture_6.png" alt="naming of restrict to exclusive application" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project33/picture_7.png" alt="country ids" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project33/picture_8.png" alt="no possibility to delete coupon" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project33/picture_9.png" alt="plan dropdown works strangely" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project33/picture_10.png" alt="restrict to bxgy" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
