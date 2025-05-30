<template>
    <div>
      <h1>Project 41: Taxes</h1>
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
                        <strong>Good:</strong> The project requirements were clear.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We successfully accomplished the project, set up taxable product (under general category), created customers based on indicated locations and registered organization related tax locations.
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
                        <strong>Suggestion: </strong> Perhaps we should have address dropdown autocomplete in Recomm for instance when creating customer.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Suggestion: </strong> Disable website for new entities (it will be removed from website dropdown lists, create new order for example). Or maybe a feature to set it default or weighted.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> Should be <strong>Website ID</strong>, because dropdown actually displays ids of the website.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project41/picture_1.png" alt="website id" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
