<template>
    <div>
        <h1>Project 25</h1>
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
                        <strong>Good:</strong> We managed to successfully configure <strong>Instant payment notification (IPN)</strong>.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to successfully configure <strong>Email notification</strong> on <strong>Dispute created</strong> event.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to create a successful disputed transaction.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to successfully receive email upon a <strong>Dispute created</strong> event.
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
                        <strong>Notice: </strong> In <strong>Gateway accounts</strong>, UX is not very intuitive, it's not clear whether <strong>Signature key</strong> is actually filled or not.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> In the <strong><a href="https://www.rebilly.com/docs/settings/set-up-a-gateway#instant-payment-notifications-ipns" target="_blank">Instant payment notifications (IPNs)</a></strong> documentation, it's not clear what is the sandbox <strong>IPN URL</strong>.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> In the <strong><a href="https://www.rebilly.com/docs/settings/set-up-a-gateway#instant-payment-notifications-ipns" target="_blank">Instant payment notifications (IPNs)</a></strong> documentation, it will be nice to indicate, that the actual <strong>IPN</strong> is available under specific gateway account section.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> We struggled to create a disputed transaction on <strong>Checkout.com</strong> side, only <strong>10.4</strong> amount worked for it from the amounts which we tried according to the documentation. Eventually we took amount from the JSON example.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project25/picture_1.png" alt="Signature key" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project25/picture_2.png" alt="IPN" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
