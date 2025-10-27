<template>
    <div>
      <h1>Project 62: Casino deposit error handling</h1>
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
                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: Invalid expiration date.</strong> error message appears when losing focus from MM/YY, without specifying it.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project62/picture_1.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Validation error message disappears when losing focus.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project62/picture_2.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Not intuitive and hard to edit MM/YY, cursor jumps to the end. Also experienced bug during deleting info via backspace, it was not clearing the MM/YY and CVV info.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project62/picture_3.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Seems there is unhandled error once specifying expiration year too far in the future.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project62/picture_4.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Once specifying "Own amount", below loading icon continues loading (could not reproduced again though, but perhaps needs to be checked).
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project62/picture_5.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>
                </ol>
            </div>
        </div>
    </div>
</template>
