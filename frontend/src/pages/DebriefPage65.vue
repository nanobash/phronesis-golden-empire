<template>
    <div>
      <h1>Project 65: New orders with feature flag</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center">
        <div>Teammates: Tornike Nanobashvili, Victor Goncearencu</div>
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
                        <strong>Good: </strong>The task requirements were clear.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good: </strong>We activated feature flag successfully.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good: </strong>Teamwork.
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
                        <strong>Notice: </strong>It will be better to indicate timezone on order pause details, otherwise it's not clear directly when the pause happens.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>It will be better to indicate <strong>Scheduled pause date</strong> to be clear with the pause details information.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project65/picture_1.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Since our system works with UTC timing and in organization profile timezone can be set to country specific timezone, pause/canceling timing can be confusing for customer.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project65/picture_2.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>On new orders page for one-time sale type of item recurring related fields does not make sense to be displayed, for instance Autopay.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project65/picture_3.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Upon metered billing plan override dialog form had errors, it displayed NaN for minimum and maximum quantities.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project65/picture_4.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Probably it will be handy to have UI for date pickers with AM/PM and 24h formats.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>On organizations settings page, invoice time zone does not save for UTC + N timings, but saves for timezones with names, also error messages are incorrect.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project65/picture_5.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>
                </ol>
            </div>
        </div>
    </div>
</template>
