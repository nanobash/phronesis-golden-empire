<template>
    <div>
      <h1>Project 31</h1>
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
                        <strong>Good:</strong> We successfully created order with mixed monthly and yearly plan subscriptions.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We successfully created one-time order.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We successfully created order with monhtly plan subscription and one-time sale.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We successfully created order with metered billing plan.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We successfully created order with plan override.
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
                        <strong>Notice: </strong> Perhaps we should not have <strong>Autopay</strong> under <strong>Order details</strong> section for <strong>one-time</strong> type of Order, as it's not relevant and can be confusing.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: Upcoming invoice not found</strong> seems to be confusing while Order is still in pending state, as it should not have upcoming invoice.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> There are still legacy <strong>/subscriptions</strong> endpoint calls, that leads to incorrect error message <strong>Order not found</strong>.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> There are is not relevant (additional) upcoming-invoice endpoint call for <strong>one-time</strong> order.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Legacy endpoint calls on upcoming invoice page.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> We noticed, that while selecting the item from the dropdown of the <strong>Select your product</strong> field, first time it does not work.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> Seems there is a bug once opening metered billing quantity page.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Order status color missing the styling.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project31/picture_1.png" alt="autopay" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project31/picture_2.png" alt="upcoming invoice not found" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project31/picture_3.png" alt="order not found" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project31/picture_4.png" alt="upcoming invoice page" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project31/picture_5.png" alt="upcoming invoice page" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project31/picture_6.png" alt="usages" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project31/picture_7.png" alt="status color" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
