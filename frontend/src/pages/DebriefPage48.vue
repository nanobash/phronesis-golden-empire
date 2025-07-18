<template>
    <div>
      <h1>Project 48: Custom webhooks</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center">
        <div>Teammates: Tornike Nanobashvili, Ikram Patah</div>
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
                        <strong>Bug: </strong>In webhooks form, in the body tab, the payload textarea should also include feature for users to select dynamic value placeholder, similar to that for email notification. We weren't sure that placeholder values are supported until we checked on the API documentation.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>The documentation for placeholder <a href="https://www.rebilly.com/docs/automations/email-notifications#placeholders" target="_blank">link</a> mentions being used for email notification and broadcast message usages, but not for webhooks (even though its supported). The documentation on placeholder for webhooks payload is missing.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>When using dynamic placeholder values for webhooks payload, the values are replaced when the test webhooks are triggere. But when the actual webhooks are sent due to event trigger, they remain as the placeholder strings.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Filtering webhooks "Subscription activated" event with the "Subscription > Product > ID" does not work.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Typo in webhooks docs. <a href="https://github.com/Rebilly/rebilly/issues/13673">GitHub issue</a>
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>The "Subscriptions > Plan > ID" filter criteria is confusing because the plan ID value is dynamically created when subscription is created, therefore the ID is always unique.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>When applying the filters for the subscription, we weren't sure on the difference between: Subscription > Items > Plan ID & Subscription > Plan > ID
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project48/picture_1.png" alt="textarea" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project48/picture_2.png" alt="typo" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project48/picture_3.png" alt="placeholders" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project48/picture_4.png" alt="webhook test" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
