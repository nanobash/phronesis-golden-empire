<template>
    <div>
      <h1>Project 34</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center">
        <div>Teammates: Tornike Nanobashvili, Giorgi Kakhoshvili, Pawel Drzewiecki</div>
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
                        <strong>Good:</strong> We successfully registered <strong>Aml List Possibly matched</strong> event in webhooks.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We successfully created specified customers.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We successfully received aml related webhooks upon creating customers.
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
                        <strong>Bug: </strong> There was a bug upong request <strong>Confirm match</strong>.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Seems typo in webhooks events, <strong>Aml</strong> should be in upper case.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> <strong>Pause review</strong> and <strong>Start review</strong> processes are confusing. At some point customer is moved to <strong>in review</strong> and then moving back to unreviewed list.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> If <strong>AML</strong> process is paused for the specific customer, upon opening the aml check for the same customer, <strong>start-review</strong> request is automatically triggered.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> We could not find <strong>False positive</strong> button according the <a href="https://www.rebilly.com/docs/data-tables/manage-aml#aml-check-interactions" target="_blank">docs</a>.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project34/picture_1.png" alt="tag is invalid" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project34/picture_2.png" alt="AML should be in upper case" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
