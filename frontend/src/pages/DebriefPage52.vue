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
                        <strong>Bug: </strong>Risk metadata collector may be broken. Initially when we did multiple transactions for a customer, and the recorded IP was correct. The same customer was then blocked temporarily for reason for exceeding risk score treshold. After the user was unblocked (block time lapsed), we created a few more transactions and those approved transaction all had the wrong IP address. It was the IP address that Tornike had 1 week ago (when we was at a different country). The IP address was pointing to the hotel that he stayed at. Seems that when the user was blocked and unblocked, it affected the metadata (geo-IP) collection.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>In Risk score page, there is an error in console and the 2nd table is not showing.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>In the Risk score form, the field for the block duration can be more user friendly. Instead of an input for seconds, Recomm could have a dropdown to select days, hours, minutes and seconds.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>When we enter values for the countries list, they needed to be in the ISO codes. Users may not know this. We could have a page in the documentation to mention this with other samples of common usages for the value lists.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>In the Risk score form, the input for the number for the customer lifetime value does not have any currency attached to it. This may cause issue for organizations dealing in multiple currencies.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>In the Risk score form, we weren't sure how to enter ranges with no upper limits. When we left the second inputs blank, they triggered validation error. We entered a ridiculously high upper limit to simulate no limit.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Suggestion: In the risk form page, the temporary block information doesn't include how long the block is for. User has to click edit to know the exact duration of the temporary block. We could add another column or update the text to "Temporary block for x minutes above".
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>In the risk score form, when selecting the simulation period, a period of more than 6 months would trigger validation error. The datepicker should already disable user from selecting dates that are more than 6 months.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>The Risk score simulated results can be confusing because there are transactions that was declined before (actual results) for non-risk-score-related reasons, but under the simulation became approved. It took us a whilte to figure this out. Perhaps the simulation should strictly look into approved transactions only?
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>In blocklist datatable, the customer ID should be clickable and redirects to customer details page.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>The lifetime value risk score seems not to be working. We tried both for customers that had a lifetime value of more than 100 creating transactions that have value more than 100 but the risk score does not update correctly. It could also be because we had a minus score.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>If there's no records in the risk score simulation report, it makes no sense to have the plus icon in the datatable. The headers being in the page is also confusing because it appears as more of a broken page rather than zero transaction was processed instead.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project52/picture_1.png" alt="can not read property" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project52/picture_2.png" alt="fixed seconds" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project52/picture_3.png" alt="value between" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project52/picture_4.png" alt="end range is required" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project52/picture_5.png" alt="seconds in description" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project52/picture_6.png" alt="last 6 monthes" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project52/picture_7.png" alt="datepicker start" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project52/picture_8.png" alt="simulated and actual results" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project52/picture_9.png" alt="customer ID link" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project52/picture_10.png" alt="IP address issue" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
