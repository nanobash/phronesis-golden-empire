<template>
    <div>
      <h1>Project 46: Revenue recognition</h1>
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
                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> The project requirements were more or less clear.
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
                        <strong>Notice: </strong>Will be handy to have refresh button as well. Restore params restores the filters that can't be used for refresh.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: Owner</strong> column shows incorrect data on data tables upon creating segment. It always shows current user for predefined segments.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Upon creating journal record, currency is fixed for USD. We don't have a possibility to change it.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Should not we have possibility to delete journal entry or at least edit period?
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> Cancel button does not do anything except changing the url.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> If we go through reports to the data tables, on page load there are errors in console, also Export does not work.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project46/picture_1.png" alt="refresh button" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project46/picture_2.png" alt="owner column" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project46/picture_3.png" alt="fixed currency USD" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project46/picture_4.png" alt="delete journal entry" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project46/picture_5.png" alt="cancel button" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project46/picture_6.png" alt="export does not work, console errors" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
