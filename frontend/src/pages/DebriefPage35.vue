<template>
    <div>
      <h1>Project 35: Shipping rates</h1>
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
                        <strong>Good:</strong> We have successfully created shipping rates for blackjack and roulette books according to the indicated prices based on delivery country location and VIP tag.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We have successfully created products and plans for blackjack and roulette books accordingly.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We have successfully created orders for blackjack and roulette books.
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
                        <strong>Notice: </strong> It is still possible to check <strong>Shippable</strong> checkbox even there is no shipping rates defined. Perhaps it should not be possible?
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: Tags</strong> description is missing mentioning <strong>AML</strong> alongside customers and KYC docs. <a href="https://github.com/Rebilly/rebilly/issues/11309" target="_blank">GitHub issue.</a>
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> Customer tags dropdown should only show cutomer related tags. <a href="https://github.com/Rebilly/rebilly/issues/11314" target="_blank">GitHub issue.</a>
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: AML</strong> tag is not linkable. <a href="https://github.com/Rebilly/rebilly/issues/11326" target="_blank">GitHub issue.</a>
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> Delivery settings country update does not update shipping amount on the invoice.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> Delivery settings country update does not reset state/province on UI.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> Seems VIP tag does not work.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> If product is shippable and the appropriate criteria of shipping rate is not matching (or disabled) we get the validation errors.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> if there is only one plan for the product, maybe should be it automatically selected for better UX?
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Validation error appears once we tried to change Shipping rebilly to manual and set X CAD $.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> Going back to Rebilly calculator is not possible, because Save button is frozen.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> We could not reproduce it again, but somehow 0 shipping rate was applied once we disabled all the shipping rates. As usual, when all the shipping rates are disabled, validation errors appear.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project35/picture_1.png" alt="shippable checkbox" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project35/picture_2.png" alt="tags description" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project35/picture_3.png" alt="customer related tags" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project35/picture_4.png" alt="aml tags are not linkable" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project35/picture_5.png" alt="delivery settings country update" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project35/picture_6.png" alt="state/province" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project35/picture_7.png" alt="vip-tag" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project35/picture_8.png" alt="shippable rates disabled" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project35/picture_9.png" alt="one plan per product" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project35/picture_10.png" alt="manual X CAD amount" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project35/picture_11.png" alt="rebilly calculator button frozen" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project35/picture_12.png" alt="0 shipping rate (could not reproduce again)" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
