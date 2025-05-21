<template>
    <div>
      <h1>Project 40: Lead source attribution</h1>
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
                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice:</strong> The project requirements were not quite clear, we could not manage to accomplish them.
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
                        <strong>Notice: </strong> Checkout forms are deprecated and we should not use them, thus we could not found other solution that gives possibility to subscribe to an order via payment form.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> It will be informative to have examples in <a href="https://www.rebilly.com/docs/tutorials/lead-source-attribution#integration" target="_blank">docs</a> for UTM query params how to use them. E.g: https://www.example.com/page?utm_content=buffercf3b2&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Do not close edit lead source popup form before validated, because we need to reenter all the values if some of the data is invalid.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: pending</strong> status is not quite informative for recurring data exports, because it gives impression that the process is not even started. Perhaps will be better to have some kind of indication of recurring data exports?
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> Upon creating segment with lead source filters, we discovered that <strong>Save segment as -> Save</strong> does not work, does not do anything. <a href="https://github.com/Rebilly/rebilly/issues/12179" target="_blank">GitHub issue.</a>
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project40/picture_1.png" alt="save lead source info button" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project40/picture_2.png" alt="save lead source segment button" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project40/picture_3.png" alt="pending status on recurring data export" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
