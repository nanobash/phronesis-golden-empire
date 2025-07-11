<template>
    <div>
      <h1>Project 47: Marketing emails</h1>
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
                        <strong>Good:</strong> The managed to configure broadcast messages.
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
                        <strong>Notice: </strong>Broadcast message > form > Should say 0 customer matches this filter.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Broadcast message > form > The placeholder section is broken. No placeholders list when typing in the search input.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Broadcast message > summary > should include send time information as well.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Broadcast message > summary > draft is confusing. The word <strong>scheduled</strong> is more accurate.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Broadcast message > form > The send time dropdown timezone is not correct. Its reading the local timezone instead of the timezone set in user profile.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Broadcast message > form > Scheduled emails are not sent. We didn't receive the emails.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project47/picture_1.png" alt="0 customer match" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project47/picture_2.png" alt="missing placeholders" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project47/picture_3.png" alt="send date time" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project47/picture_4.png" alt="drafts" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project47/picture_5.png" alt="timezone" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
