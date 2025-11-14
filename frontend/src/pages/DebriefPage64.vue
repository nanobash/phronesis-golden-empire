<template>
    <div>
      <h1>Project 64: Casino cashier updates</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center">
        <div>Teammates: Tornike Nanobashvili, Victor Goncearencu</div>
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
                        <strong>Good:</strong> Registration worked fine.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> Transaction details include time, that can be very informative in case of details inquary.
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
                        <strong>Notice: </strong>Perhaps will be better to mark CVV field as red, once CVV related error message appears.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project64/picture_1.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Month last digit edit works unexpectedly and cursor jumps to the CVV field.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project64/picture_2.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Is custom amount option removed?
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project64/picture_3.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Should not we have possibility to remove card?
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project64/picture_4.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Perhaps will be better to have consistent <strong>Show more</strong> logic for deposit and withdraw options? On deposit tab, show more button is not displayed, while on withdraw it appears for the same credit cards.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Should not <strong>Own amount</strong> give possibility to enter a specific amount? Seems it does not.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project64/picture_5.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Even though error message clearly says what to do, it's unclear why, when it is possible to indicate anything between 1 and 100 USD.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project64/picture_6.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>
                </ol>
            </div>
        </div>
    </div>
</template>
