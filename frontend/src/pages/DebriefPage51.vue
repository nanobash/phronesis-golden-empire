<template>
    <div>
      <h1>Project 51: Value lists</h1>
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
                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>
                        It wasn't clear to us if the organization has multiple payment gateways, how are the gateways prioritized.

                        We had 2 active gateways, first gateway without filter and a second gateway with filter on (to catch all asian countries' transactions). But the second gateway wasn't catching any of the transactions from asian customers, which lead us to believe that the filter was not working.

                        Only after we set the first gateway to filter to exclude asian customers, then only it worked as intended.

                        So we concluded that all payments go through the first gateway and because it matches all payments, none are sent to the second gateway.

                        It would be nice if the logic for the payment gateway order prioritization is documented and made clear.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>In the value list version pages, back button does not work properly. It goes back to the page history rather to going to the previous page.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>In payment gateway details page, under the "Additional filter" section, the condition appear under multiple line. They should be in a single line.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>When we enter values for the countries list, they needed to be in the ISO codes. Users may not know this. We could have a page in the documentation to mention this with other samples of common usages for the value lists.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>In the value list form, we saved the form as line-separated values, but when viewed it again, it becames comma-separated values. Not a big deal, but small QoL improvement.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project51/picture_1.png" alt="back button" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project51/picture_2.png" alt="value list id on next line" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project51/picture_3.png" alt="values seperated via semicolons" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project51/picture_4.png" alt="gateway account id" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
