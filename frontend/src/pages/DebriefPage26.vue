<template>
    <div>
        <h1>Project 26: Google Sheets integration</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center">
        <div>Teammates: Tornike Nanobashvili, Vladimir Berdnik</div>
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
                        <strong>Good:</strong> We managed to successfully configure <strong>Google sheet integration</strong> on
                        <strong>Dispute created</strong> event.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to successfully configure <strong>Google sheet integration</strong> on
                        <strong>Dispute modified</strong> event to ensure two integrations can work simultaneously.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to test the dispute amount filter to ensure filtering is applied.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project26/picture_1.png" alt="Added integrations" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
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
                        <strong>Notice: </strong> When we tested first dispute the row was added into the Google sheet, but the row
                        header was missing. We then realized we must put column titles ourselves as the integration only appends
                        rows to the sheet.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> It might be useful to have ability to create a new google sheet right from Recomm
                        and not select from existing sheets in dropdown.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> We weren't able to try "Test integration" as there was some error that we
                        weren't able to troubleshoot from the network tab or browser console as it seems Recomm just suppresses the error.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project26/picture_2.png" alt="Error during testing integration" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
