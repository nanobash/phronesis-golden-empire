<template>
    <div>
      <h1>Project 27: Notify customers about trial ending</h1>
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
                        <strong>Good:</strong> We managed to successfully set up a reminder, that send email to a customer in advance to notify the trial end time of the order.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We filter out orders not to send reminder for those, that are trial only.
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
                        <strong>Bug: </strong> If order is early paid, we don't have possibility to filter out such cases not to send false positive notification to a customer.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> We noticed that when clicking <strong>Cancel</strong> or <strong>X</strong> on <strong>Change trial end date</strong> dialog box, the order page unnecessarily reloads.
                        <strong>Referenced in <a href="https://github.com/Rebilly/rebilly/issues/10238" target="_blank">GitHub issue</a>.</strong>
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> Missing timeline information regarding the email reminder that was sent.
                        <strong>Referenced in <a href="https://github.com/Rebilly/rebilly/issues/10204" target="_blank">GitHub issue</a>.</strong>
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project27/picture_1.png" alt="Email notification reminder" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project27/picture_2.png" alt="Subscription trial will end reminder set up" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project27/picture_3.png" alt="Change trial end date" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
