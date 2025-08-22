<template>
    <div>
      <h1>Project 52: Risk scores</h1>
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
                        <strong>Good:</strong> It wasn't clear to us what was meant by capturing the card at first. Initially we tried creating orders flow for new customers without payment instrument and then we tested quotes flow.
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
                        <strong>Notice: </strong>Perhaps on order's page for initial invoice, does not make sense to have early pay button.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>The "Issue quote" button could be of different color (for example, Rebilly's primary blue color). This would be more consistent with the rest of Recomm.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Possible feature: We tried a failed payment when accepting a quote. However the transaction does not appear as a timeline item in the quote. We could find information of the transaction on customer timeline but not the quote timeline. We think its beneficial to include transaction-related items to the quote timeline.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>When either the merchant / customer accepts the quote, 3 new quote timeline items are created.
                            - Quote accepted by.
                            - Order attached to the quote by.....
                            - Quote modified by.....
                            We believe the third timeline item created ("Quote modified by...") is confusing and not needed.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Nowhere in the quote details page mentions that the plan was a trial plan. It was indicated as a normal product with price of USD $20.00.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project53/picture_1.png" alt="initial & early pay" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project53/picture_2.png" alt="issue quote button color" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project53/picture_3.png" alt="quote timelines" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project53/picture_4.png" alt="can not read property" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project53/picture_5.png" alt="can not read property" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
