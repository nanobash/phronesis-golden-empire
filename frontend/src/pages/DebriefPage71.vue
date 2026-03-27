<template>
    <div>
        <h1>Project 71: Downgrade quotes and credit memos</h1>
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
                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Suggestion: Change Quote Page – Missing Copy Icon
                        </strong>
                        On the **Change Quote** page, the quote identifier does
                        not have a copy-to-clipboard icon next to it. This is
                        inconsistent with the pattern used on other pages where
                        identifiers can be easily copied.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project71/1_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Confusion: Change Quote Block – Layout and
                            Readability
                        </strong>
                        The overall layout of the **Change Quote** block appears
                        inconsistent and difficult to read. It may be beneficial
                        to reorganize the information within this section and
                        consider a redesign to improve clarity and usability.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Confusion: Downgrade Flow – Role of Proration
                            Credit Memo
                        </strong>
                        When creating a **Change Quote** for a subscription
                        downgrade, the role of the **Proration Credit Memo** is
                        not entirely clear and may appear unnecessary in the
                        current context.<br />
                        Additionally, it is difficult to understand the actual
                        change being applied because the **Items** list does not
                        display information about the previous item
                        configuration.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Confusion: Credit Memo (Draft) – Allocation Details
                            Wording
                        </strong>
                        On the **Credit Memo** page in **Draft** status, the
                        wording used in the **Allocation Details** section
                        appears potentially incorrect or misleading.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project71/4_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Confusion: Change Quote – Upgrade Visibility
                        </strong>
                        On the **Change Quote** page, the upgrade operation is
                        not fully transparent.<br />
                        The **Items** list does not include the original order
                        state as a separate row, making it difficult to clearly
                        understand what has changed.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project71/5_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>
                </ol>
            </div>
        </div>
    </div>
</template>
