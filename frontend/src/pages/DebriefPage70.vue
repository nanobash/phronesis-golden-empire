<template>
    <div>
        <h1>Project 70: Casino express deposit and DCC</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center">
        <div>Teammates: Tornike Nanobashvili, Alexander Kochetov</div>
    </div>

    <hr />

    <div class="container mt-4">
        <!-- What made you smile? -->
        <div class="row mb-4">
            <div class="col-12 text-center">
                <h4 class="text-primary">What made you smile?</h4>
            </div>

            <div class="col-12 bg-light p-3 mb-3 rounded shadow-sm">
                <ol class="list-group list-group-numbered text-start">
                    <li class="list-group-item list-group-item-success">
                        <strong>Good: </strong>The task requirements were clear.
                    </li>
                </ol>
            </div>
        </div>

        <hr />

        <!-- What did you find confusing? -->
        <div class="row">
            <div class="col-12 text-center mb-3">
                <h4 class="text-danger">What did you find confusing?</h4>
            </div>

            <div class="col-12 bg-light p-3 mb-3 rounded shadow-sm">
                <ol class="list-group list-group-numbered text-start">
                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: Forgot password? - </strong>When filling in
                        the **Date of Birth** field in the **Update Account
                        Information** form and attempting to submit, the field
                        is cleared and prevents form submission.
                        <br />
                        * It becomes impossible to complete the password reset.
                        <br />
                        * Additionally, it is unclear why completing this form
                        is required as part of the password reset flow.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project70/1_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Suggestion: Duplicate Phone Number Registration - </strong
                        >The system currently allows multiple accounts to be
                        registered using the same phone number. This may
                        indicate a missing validation constraint.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Confusion: </strong>The **My Balance** dropdown
                        does not include controls or links to navigate to the
                        **Add New Card** page. Users are required to locate this
                        functionality elsewhere, which impacts usability.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project70/4_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Confusion: </strong>After using the **Express
                        Deposit** feature, clicking the **Continue** button
                        results in a page refresh and, redirects the user back
                        to the homepage.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project70/5_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Confusion: </strong>While using **Express
                        Deposit**, we completed a payment with a Canadian card
                        and selected **USD** in the DCC interface. The deposit
                        was successful; however, the **My Balance** value at the
                        top of the page did not update promptly.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project70/6_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>The popup displayed for **DCC
                        (Dynamic Currency Conversion)** cannot be closed, as it
                        lacks a visible control (e.g., close button).
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project70/7_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>
                </ol>
            </div>
        </div>
    </div>
</template>
