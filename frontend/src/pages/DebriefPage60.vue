<template>
    <div>
      <h1>Project 60: KYC - Closed eyes detection</h1>
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
                        <strong>Good:</strong> The task requirements were clear.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We successfully accomplished the task.
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
                        <strong>Notice: </strong>Identity proof is not clearly indicates what it is when it sets to 0.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project60/picture_1.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Reject document button is still available even after manually rejecting, same for Accept document.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project60/picture_2.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>text about verification levels not really explaining what's under the hood, and docs doesn't do this either.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project60/picture_3.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Confusion: </strong>Has matching fase proof is No but document still automatically approved.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Probably should be mentioning eyes closed / liveness.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project60/picture_4.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Confusion: </strong>We weren't able to understand what is KYC request fulfilled event in customer timeline.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project60/picture_5.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>
                </ol>
            </div>
        </div>
    </div>
</template>
