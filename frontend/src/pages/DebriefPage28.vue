<template>
    <div>
      <h1>Project 28</h1>
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
                        <strong>Good:</strong> We have successfully reactivated churned subscription on the same plan.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We have successfully reactivated churned subscription on an upgraded plan.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We have successfully reactivated churned subscription on a downgraded plan.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We also successfully received webhooks on reactivation events.
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
                        <strong>Notice: </strong> Subscription renewal time difference is 1 second that is not displayed on timeline, thus the information message perhaps seems misleading.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Quote modified message on timeline without actual additional details.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Perhaps green color not our style (see the picture with "Accept and pay quote" button)?
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> We got <strong>method is required</strong> error once tried to make payment.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> We got <strong>null - null - Quote...</strong> quote name once tried to <strong>Download as pdf</strong>.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project28/picture_1.png" alt="Email notification reminder" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project28/picture_2.png" alt="Quote modified" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project28/picture_3.png" alt="accept and pay quote" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project28/picture_4.png" alt="method is required error" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project28/picture_5.png" alt="download quote" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
