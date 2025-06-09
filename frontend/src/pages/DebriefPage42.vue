<template>
    <div>
      <h1>Project 42: Email invoices</h1>
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
                        <strong>Notice: </strong> Email notification: Title vs Subject is confusing.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> The error message must be improved, when "From" field is incorrect.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> Email notifications: If you click 'Send test' then it starts validating input on each key up. Before clicking it wasn't validating.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> When you early pay - there is no renewal invoice issue event triggered. It is triggered only when renew happens. Is it expected?
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> We weren't able to specify subscription renewal time for invoice paid event. It was possible only for renewal invoice issued event. Do we need to add renewal invoice paid event?
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Redirects after some forms update are not consistent: Sometimes it redirects back after save, sometimes its not.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project42/picture_1.png" alt="title vs subject" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project42/picture_2.png" alt="form errors" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project42/picture_3.png" alt="invalid email validation" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
