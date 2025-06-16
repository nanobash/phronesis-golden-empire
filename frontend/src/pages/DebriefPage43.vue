<template>
    <div>
      <h1>Project 43: Cancellations</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center">
        <div>Teammates: Dávid Pörös, Alexander Kochetov, Tornike Nanobashvili, Maciej Ziemichod</div>
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
                        <strong>Good:</strong> The project requirements were more or less clear.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> We were not able to finish the training. After the cancellation, we were not sure where to find the credit memos, so we checked the user page → Segments → Billing → Credit Memos, but nothing was there. We have tried both cancel now and at specific time options.
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
                        <strong>Bug: </strong> On the payment page for an activation invoice, a "Reissue" button is shown even though the invoice is neither paid nor past due. The reason for displaying this button in this context is unclear.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> The "Add pro rata credit" checkbox is rendered under the "Specific time" radio button, even when the "Now" option is selected, which may confuse users.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> When canceling an order with the "Now" option selected and "Add pro rata credit" enabled, the system returns the user to the activation invoice page, which may not reflect the actual state of the cancellation process.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> The actions section on the cancellation invoice page contains multiple options that are not relevant to the current context, which can be misleading.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> The cancellation invoice page includes a "Pay Invoice" button, which is confusing, as cancellation invoices typically do not require payment.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Attempting to pay a cancellation invoice resulted in an ambiguous outcome, with no clear feedback or confirmation of what occurred.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project43/picture_1.png" alt="reissue button" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project43/picture_2.png" alt="add pro rata checkbox on now" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project43/picture_3.png" alt="add pro rata checkbox on specific time" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project43/picture_4.png" alt="inconsistent flow after order cancellation" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project43/picture_5.png" alt="misleading buttons on cancellation invoice page" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project43/picture_6.png" alt="unclear outcome after attempting to pay cancellation invoice" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
