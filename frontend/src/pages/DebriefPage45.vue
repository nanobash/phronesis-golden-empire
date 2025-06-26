<template>
    <div>
      <h1>Project 45: Extending resources</h1>
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
                        <strong>Good:</strong> The project requirements more or less clear.
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
                        <strong>Notice: </strong>Can't edit label, would be useful, because of typos for instance.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Adds dash(es) for label, but initially it shows whitespaces instead.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Required custom field is not validated, it allows empty value.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Back button in rules engine is glitching, hard to go to higher level if there is too much history.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Notification events names inconsistency, some billing events start with <strong>Order</strong>, some with <strong>Subscription</strong>.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Can't select custom fields array value in notification conditions.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Default <strong>true</strong> value for boolean fields doesn't work in subscriptions.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project45/picture_1.png" alt="can not edit label" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project45/picture_2.png" alt="required custom field" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project45/picture_3.png" alt="event names inconsistency" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project45/picture_4.png" alt="notification conditions error" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project45/picture_5.png" alt="default boolean field" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
