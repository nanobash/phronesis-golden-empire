<template>
    <div>
        <h1>Project 76: Payout request batch management</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center">
        <div>Teammates: Tamas Vigh, Giorgi Tabatadze, Tornike Nanobashvili</div>
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
                        <strong>Notice: </strong>The task requirements were
                        clear and easy to understand.
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
                    <li class="list-group-item list-group-item-info">
                        In the payout request batch, the
                        <strong>payout IDs</strong> and
                        <strong>customer IDs</strong> are not fully visible.
                        Additionally, the table columns cannot be resized to
                        reveal the complete text, and there is no option to copy
                        the IDs.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project76/picture_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-info">
                        When adding selected payout requests to an existing
                        batch (Current filter) without specifying a
                        <strong>Target batch</strong>, the popup does not
                        display any additional information at the bottom. This
                        lack of feedback can be confusing for users.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project76/picture_2.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-info">
                        It's not possible to block several payout requests from
                        the batch. <strong>Block batch</strong> blocks entire
                        batch.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project76/picture_3.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-info">
                        We have confirmed that all the mentioned items are
                        functioning properly as described.
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>
