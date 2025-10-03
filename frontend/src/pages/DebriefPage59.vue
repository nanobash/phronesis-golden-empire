<template>
    <div>
      <h1>Project 59: Quotes</h1>
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
                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Quantity 0 on quote/order creation form, by default implies as 1, which is not intuitive, instead it should be an error.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Redirect URL is not validating once cursor is removed from the field.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project59/picture_1.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Expiration date on Quote shows 1 day less than it was indicated during creating the quote.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project59/picture_2.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Get payment link popup windows states incorrect titles, like Quote link, Generated quote link.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project59/picture_3.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Recall is called on the buttons, but on timeline it states as reverted.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Once customer/merchant accepts quote, excess Quote modified timeline message is added on quote timeline. <a href="https://github.com/Rebilly/rebilly/issues/14396" target="_blank">GitHub issue.</a>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>
