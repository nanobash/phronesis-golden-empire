<template>
    <div>
      <h1>Project 50: Automated tagging</h1>
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

                    <li class="list-group-item list-group-item-success">
                        We initally thought that the feature was broken, but it turned out that we had to wait for the automated tagging to take place.
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
                        <strong>Notice: </strong>In Tag Automation form, in the Event dropdown, both order and subscription related events are present. This can be confusing to merchants.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>The automated tagging does not happen immediately. We initally thought that the feature is broken until we checked on other teams' debriefs. Turns out that we the tagging is not immediate and some waiting (5-10 minutes) is required.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>In the top right navigation, command + clicking on the user avatar to open the profile page in a new tab does not work.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>In the customer details page, the "Show company info" button is broken. Error appears in console when the button is clicked.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Error in console when opening the customer details page. The error is "Invalid segment type: orders".
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Cancelling pause of a subscription in the order page does not refreshes / refetches the data.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>The customer timeline has a few issues:
                        - When an automated tagging was added, the message says that it was added by Rebilly, which is correct. But when a tag was automatically removed, the message says that it was removed by the user that triggered the event, which leads to the tag removal. The user didn't actually removed the tag
                        - The word "paused" is incorrectly highlighted even when it is part of the name rather than action
                        - The word "added" is correctly highlighted in message "Tag added by...", but the word "removed" is not highlighted in the message "Tag removed by..."
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project50/picture_1.png" alt="name not clickable" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project50/picture_2.png" alt="show company info" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project50/picture_3.png" alt="invalid segment type" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project50/picture_4.png" alt="tags timeline" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
