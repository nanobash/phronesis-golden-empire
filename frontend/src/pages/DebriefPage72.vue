<template>
    <div>
        <h1>Project 72: Mockup Casino sign-up and login</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center">
        <div>
            Teammates: Gleb Metlov, Alexander Kochetov, Tornike Nanobashvili
        </div>
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
                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Suggestion: Password Requirements During
                            Registration
                        </strong>
                        The password requirements in the registration form are
                        too weak. Allowing passwords as short as **four
                        characters** does not meet modern web security standards
                        and may expose user accounts to unnecessary risk.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project72/1_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Suggestion: Address Form Layout and Autocomplete
                            Behavior
                        </strong>
                        The layout of the **address form** during registration
                        is not optimal, and the **Address Line 1** autocomplete
                        behaves inconsistently. Regardless of the selected city
                        and country, the autocomplete suggestions include
                        streets from other countries. It may be beneficial to
                        move the **Country** and **City** fields to the top of
                        the form so that the autocomplete suggestions can be
                        properly contextualized.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project72/2_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Suggestion: Excessive Required Fields During
                            Registration
                        </strong>
                        The registration process requires filling out a large
                        number of fields, which may increase the likelihood of
                        users abandoning the process. Typically, registration
                        flows request only a minimal set of required fields,
                        while additional information can be collected later when
                        it becomes relevant to specific user actions.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project72/3_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Suggestion: Session Expiration on Page Refresh
                        </strong>
                        Refreshing the page at various steps of the registration
                        process resulted in an error stating that the **login
                        session has expired**. Additionally, all information
                        entered after **step 3** was lost.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project72/4_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Suggestion: Email Confirmation Feedback
                        </strong>
                        After clicking the **email confirmation link**, the user
                        is redirected to the **homepage**. However, there is no
                        visible notification or alert confirming that the email
                        address has been successfully verified.
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>
