<template>
    <div>
      <h1>Project 37: Quickbooks integration</h1>
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
                        <strong>Good:</strong> We managed successfully to integrate with Quickbooks.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed successfully to manually sync customer, invoice and payment to Quickbooks.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed successfully to automatically sync customer, invoice and payment to Quickbooks upon creation.
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
                        <strong>Bug: </strong> Needs investigation why non-integrated Quickbooks on UI displays 500 error message.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> Connect/Reconnect actions leads to unresponsive loading page after connect/reconnect popup window is closed.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Quickbooks integration <strong>Service credential crd_* is active/inactive</strong> message seems not clear, once reconnect it shows as active, but on page reload it shows inactive.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Quickbooks integration pages seems not UI friendly or perhaps confusing with both buttons (reconnect/disconnect) that are always displayed whether the state is connected or disconnected.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> We managed to somehow reproduce twice 500 error upon manual sync, needs investigation for the precise steps.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project37/picture_1.png" alt="something went wrong 500" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project37/picture_2.png" alt="connect/reconnect leads to unresponsive page" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project37/picture_3.png" alt="service credential unclear message" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project37/picture_4.png" alt="500 on manual sync" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project37/picture_5.png" alt="customer details are missing" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
