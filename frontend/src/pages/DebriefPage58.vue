<template>
    <div>
      <h1>Project 58: Pricing formulas</h1>
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
                        <strong>Notice: </strong>Minimum quantity probably could be prefilled with 1 as it is default anyways (after saving). 0 is also accepted, that does not make sense probably.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Should fractional min quantity be allowed? If not we need to add coresponding validation.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project58/picture_2.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Text value is accepted and can be saved for min quantity without validation error.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>If we update second to unit to high number (more than max), then return to normal and save we got the errors.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project58/picture_3.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Mixed up numering leads to inconsistency like on below picture.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project58/picture_4.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>If create one-time sale type of order with autopay off (which itself does not make sense to be displayed in such case) and create order, its status is automatically completed which is incorrect.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>If we buy 5 units with tiered formula, quantity is 1 with description having comment about 5 units which can be confusing for customers.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project58/picture_5.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>
                </ol>
            </div>
        </div>
    </div>
</template>
