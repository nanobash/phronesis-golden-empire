<template>
    <div>
        <h1>Project 68: New orders with feature flag (again)</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center">
        <div>Teammates: Tornike Nanobashvili, Victor Goncearencu</div>
    </div>

    <hr />

    <div class="container mt-4">
        <!-- What made you smile? -->
        <div class="row mb-4">
            <div class="col-12 text-center">
                <h4 class="text-primary">What made you smile?</h4>
            </div>

            <div class="col-12 bg-light p-3 mb-3 rounded shadow-sm">
                <ol class="list-group list-group-numbered text-start">
                    <li class="list-group-item list-group-item-success">
                        <strong>Good: </strong>The task requirements were clear
                        and we accomplished the task.
                    </li>
                </ol>
            </div>
        </div>

        <hr />

        <!-- What did you find confusing? -->
        <div class="row">
            <div class="col-12 text-center mb-3">
                <h4 class="text-danger">What did you find confusing?</h4>
            </div>

            <div class="col-12 bg-light p-3 mb-3 rounded shadow-sm">
                <ol class="list-group list-group-numbered text-start">
                    <li class="list-group-item list-group-item-warning">
                        <strong>Suggestion: </strong>Orders information (page)
                        can have a dedicated page, rather than upcoming-invoice
                        page.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Suggestion: </strong>On invoices page, perhaps
                        we should not have duplicated buttons for order cancel,
                        pause, redeem, renewal, etc (operations). Also
                        <strong>Invoices for this order</strong> section does
                        not show initial paid invoice, that can be removed too.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Suggestion: </strong>On upcoming-invoice page
                        timeline messages, tags like activated, churned, voided
                        can be highlighted.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project68/picture_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Suggestion: </strong>On pricing plans page,
                        dropdown menu item
                        <strong>Delete pricing plan</strong> should not be
                        visible unless it's possible to delete the pricing plan.
                        (If pricing plan is already used, it's not possible to
                        delete the pricing plan).
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project68/picture_2.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Confusion: Fixed fee price expects quantity of
                            1.</strong
                        >
                        validation message seems confusing upon adding metered
                        billing usage.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project68/picture_3.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> Adding large quantity number
                        leads to 500 error.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project68/picture_4.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Suggestion: </strong>For trial only metered
                        billing order, we should not show metered billing
                        quantity on invoice page.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project68/picture_5.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Suggestion: </strong>Upcoming-invoice page can
                        have clickable customer name (to go to customer page).
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project68/picture_6.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>
                </ol>
            </div>
        </div>
    </div>
</template>
