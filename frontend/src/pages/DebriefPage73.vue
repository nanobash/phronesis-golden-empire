<template>
    <div>
        <h1>Project 73: Batch payout request allocations</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center">
        <div>Teammates: Alexander Kochetov, Tornike Nanobashvili</div>
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
                        <strong>Notice: </strong>The task requirements were not
                        very clear.
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
                            >Gateway Filters – Missing Comparison Operators
                        </strong>
                        In the gateway filter configuration, the available
                        options do not include <strong>greater than</strong> and
                        <strong>less than</strong>. Only
                        <strong>greater than or equal to</strong> and
                        <strong>less than or equal to</strong> are available.
                        <br />
                        This limitation prevents proper configuration of payment
                        processing rules as defined in the requirements.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project73/1_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Gateway Settings – Back Button Not Reliable
                        </strong>
                        The <strong>Back</strong> button on the gateway
                        configuration page does not consistently function as
                        expected, leading to navigation issues.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Payout Request Batch – UI Issue in Allocation Order
                            Block
                        </strong>
                        On the <strong>Payout Request Batch</strong> page,
                        within the <strong>Allocation Order</strong> section,
                        the <strong>Selected Instrument</strong> dropdown
                        element appears to be draggable. This behavior is
                        unintended and indicates a clear UI defect.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project73/3_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Payout Requests Table – Amount Filter Not Working
                        </strong>
                        The <strong>Amount</strong> filter in the
                        <strong>Payout Requests</strong> table is not
                        functioning correctly and does not filter results as
                        expected.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project73/4_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Payout Request Batch Creation – Navigation Flow
                        </strong>
                        After creating a payout batch, the system displays an
                        alert containing a link to the batch page. It may be
                        more user-friendly to redirect the user directly to the
                        batch page instead of relying on a separate alert-based
                        navigation step.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Phronesis Exercise Limitation – Missing Gateway
                            Configuration Context
                        </strong>
                        The exercise could not be completed due to missing or
                        non-functional configuration rules. The specification
                        states:
                        <br />
                        * TestProcessor gateway is used for the exercise<br />
                        * Payment card approves allocations ≤ $50<br />
                        * Interac e-Transfer approves allocations ≤ $75<br />
                        * Anything above $75 is declined for both methods<br />
                        However, the configuration location for these rules
                        within the **Payout Requests** feature could not be
                        found in the documentation, preventing proper setup and
                        execution.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Payout Request Batch – Inactive "Block Batch"
                            Action
                        </strong>
                        After processing all allocations, the
                        <strong>Payout Request Batch</strong> page still
                        displays the <strong>Block Batch</strong> button, even
                        though the functionality appears to no longer be
                        operational. This creates a misleading UI state.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project73/7_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>
                </ol>
            </div>
        </div>
    </div>
</template>
