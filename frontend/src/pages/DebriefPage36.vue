<template>
    <div>
      <h1>Project 36: Custom domains</h1>
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
                        <strong>Good:</strong> We managed to suggessfully register subdomains via Dynu service and create CNAME record.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to successfully add custom domains into Rebilly sandbox account.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to successfully generate collect payment link that is redirected to custom domain.
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
                        <strong>Notice: Pending</strong> status stays if the custom domain is not verified. Perhaps after some time status should be changed to <strong>Not verified</strong> or similar?
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: Pending</strong> custom domains are still available under Billing portal details dropdown. Perhaps it should not be?
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Rebilly docs AI did not work, but by the time of writing debrief it got resolved based on the feedback mentioned in the appropriate channel.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: Payment form URL</strong> does not display custom domain, instead once visiting URL, original one is redirected to custom domain afrerwards.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> Custom domain value is not trimmed and might be confusing UX if user could not see spaces or cursor. Can be solved simply trimming the value.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> If there are multiple custom domains added, it's not clear to which one generated payment link will be redirected. Perhaps make sense to update docs and indicate that order matters in this case.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project36/picture_1.png" alt="pending more than 2 min" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project36/picture_2.png" alt="pending custom domains are available in dropdown" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project36/picture_3.png" alt="docs AI" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project36/picture_4.png" alt="payment url issue" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project36/picture_5.png" alt="custom domain value trimming" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
