<template>
    <div>
      <h1>Project 30</h1>
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
                        <strong>Good:</strong> The project requirements were clear to understand.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to successfully set up automations in <strong>Rules engine - Core events - Gateway account requested</strong>.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to successfully complete deposit transaction upon KYC approved customer, like via recomm as well as via integrated deposit form.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We managed to successfully reject deposit transaction upon KYC rejected customer, like via recomm as well as via integrated deposit form.
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
                        <strong>Notice: </strong> If customer already have transactions, we are unable to request KYC process, because <strong>Gateway account requested</strong> is only triggered for the first time for the customer.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: KPI- KYC</strong> data is not updated.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Sub-types of identity proof is not displayed correctly (statically displays ID, passport and driving licence). Also, if we add other sub-types, nothing changes.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Perhaps will be better and more UX friendly if we toggle document types on Request KYC documents popup window (see the picture 1).
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> If for some cases KYC process take up to 2 business days, looking at the message it's a bit unclear that customer should do the deposit request from the scratch again (see the picture 2).
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> It is possible to add multiple Request KYC action under <strong>Gateway account requested</strong>, which should not be the case. Furthermore, we add new KYC action, checkboxes on previous one is unchecked.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> It is possible to add the same document types under the same Request KYC action section (see the picture 3).
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> After choosing different document type, sub type does not clear the previous values, instead it disables the field directly (see the picture 4).
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> In case document is rejected, transaction should be declined, however status in recomm is unknown.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Address field is overlapping the KYC process window (see the picture 5).
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Back button in <strong>Rules engine</strong> works unexpectedly, it memorizes actual loads of the page instead of the steps.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project30/picture_1.png" alt="document types" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project30/picture_2.png" alt="KYC review message" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project30/picture_3.png" alt="duplicated document type under Request KYC action" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project30/picture_4.png" alt="document and its sub-type fields inconsistencies" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project30/picture_5.png" alt="address overlaps KYC popup window" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
