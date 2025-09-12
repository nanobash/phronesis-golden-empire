<template>
    <div>
      <h1>Project 56: Casino Demo Training</h1>
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
                        <strong>Bug: </strong>There is a loading icon on primary button while delete CVV popup is up.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Amount input field styling is not quite nice, default up/down arrows on the right side.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Inconsistency with payment methods, negative amounts disables them, while other actions hide the section at all.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Confusion: </strong>We could not understood how reverse withdrawal should work. It works all the time, even though we did one successful interac payment only.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Upon reverse withdrawal successful message shows deposit, not reverse withdrawal, that might be misleading.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Confusion: </strong>Perhaps reverse withdrawal should not be under favorite payment methods section?
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Perhaps declined cards should also be saved under favorite payment methods? For instance with the reasoning of insufficient funds.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Show more/less cards logic can be enhanced, for instance 2 methods can be shown directly without these actions.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Confusion: </strong>Are mm/yy & CVV needed for withdraws?
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Confusion: </strong>No indication which cryptocurrency address is referred to. Also on recomm, there is no address written for information purposes.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Confusion: </strong>Reverse withdrawal shows/hides under favorite payment methods section with not clear logic.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project56/picture_1.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project56/picture_2.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project56/picture_3.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project56/picture_4.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project56/picture_5.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project56/picture_6.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project56/picture_7.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project56/picture_8.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project56/picture_9.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project56/picture_10.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project56/picture_11.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
