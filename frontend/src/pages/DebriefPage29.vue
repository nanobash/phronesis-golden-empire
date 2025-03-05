<template>
    <div>
      <h1>Project 29</h1>
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
                        <strong>Good:</strong> The project requirements were clear to understand.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to successfully integrate new deposit form.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to successfully test payment instruments on the deposit form.

                        <div class="col-12 bg-light p-3 mb-3 rounded shadow-sm">
                            <ol class="list-group list-group-numbered text-start">
                                <li class="list-group-item list-group-item-success">Go back and try different payment instrument.</li>
                                <li class="list-group-item list-group-item-success">Add new payment instrument.</li>
                                <li class="list-group-item list-group-item-success">Change amounts.</li>
                                <li class="list-group-item list-group-item-success">Starting over after declining the transaction.</li>
                                <li class="list-group-item list-group-item-success">Provide new address on new payment instrument.</li>
                            </ol>
                        </div>
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to make a successful and declined transactions via payment cards.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to make a successful transaction via <strong>Google pay</strong>.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to make a successful transaction via <strong>Interac</strong>.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to make a successful transaction via <strong>Skrill</strong>.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We also modified radius of the buttons and payment method items, as well as changed colors on hover events.
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
                        <strong>Notice: </strong> Go back does not work with browser back button.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> For non- AMEX cards maybe we should have only 3 digits CVV available instead of providing validation error message.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> If we pay upper limit amount, buttons are rendered starting from the upper limit even though it should be limited. Also, it will succeed on next try with more than upper limit amount if we proceed with the generated buttons.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> More than 4 buttons, UI looks not good.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: Deposit request is not started</strong> message appears when trying to <strong>Google pay</strong> initially with new amount.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Maybe we should have <strong>Continue</strong> button on <strong>abandoned</strong> and <strong>cancel</strong> actions like on <strong>approve</strong> for <strong>Interac</strong> and <strong>Skrill</strong>.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project29/picture_1.png" alt="Email notification reminder" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project29/picture_2.png" alt="Email notification reminder" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project29/picture_3.png" alt="Email notification reminder" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project29/picture_4.png" alt="Email notification reminder" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
