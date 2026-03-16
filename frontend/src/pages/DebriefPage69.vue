<template>
    <div>
        <h1>Project 69: New orders with plan upgrade/downgrade</h1>
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
                        <strong>Suggestion: Invoice Details Page - </strong>We
                        suggest removing the order management action buttons
                        from the invoice details page. Additionally, it may be
                        beneficial to combine the invoice block with the order
                        details block so that they appear as a single, unified
                        section.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project69/1_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Suggestion: Order Details Page - </strong>The
                        order details section should likely be the primary block
                        on this page, potentially replacing the **Upcoming
                        Invoice** block. Alternatively, the Upcoming Invoice
                        block could be merged with the order details section for
                        a more cohesive layout.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project69/2_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong
                            >Bug: Edit Items - Effective Date Section - </strong
                        >On the **Edit Items** page, the **Effective Date**
                        section is missing the **"Now"** option in the radio
                        button group.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project69/3_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong
                            >Bug: Order Item Change Calculation Issue - </strong
                        >We created an order with a **monthly subscription** and
                        attempted to change it to a **yearly subscription**.
                        <br />
                        * Effective Date: set to the current time * Renewal
                        Policy: **Retain**
                        <br />
                        The resulting calculations appear inconsistent,
                        particularly regarding the calculated amounts and the
                        resulting renewal date, which also seems incorrect. More
                        details are available in the attached screenshot.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project69/4_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong
                            >Suggestion: Preview Change Items Modal – Amount
                            Formatting - </strong
                        >In the **Preview Change Items** modal, amounts that
                        represent refunds are displayed in parentheses. It might
                        be clearer to display these values with a minus sign
                        instead.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project69/5_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: Invoice Block Not Refreshing - </strong
                        >After performing a **Change Items** operation, the
                        **Invoices for this order** block does not refresh
                        immediately, while the **Timeline** section reflects the
                        change right away.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project69/6_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: Credit Memo Calculation Logic - </strong>It
                        appears that the system does not take into account
                        whether the invoice has been paid when generating a
                        **Credit Memo**.

                        <br />

                        Steps performed: * Created an order with a **yearly
                        subscription** (quantity: 1)<br />
                        * Paid the **activation invoice**<br />
                        * Increased the quantity to **3** without paying the new
                        invoice<br />
                        * Reduced the quantity to **2**<br />

                        As a result, a **Credit Memo** was generated, but the
                        calculation did not appear to consider whether the
                        related invoice had been paid.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project69/7_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong
                            >Bug: Order Timeline – Missing Credit Memo Events -
                        </strong>
                        The **Timeline** on the order details page does not
                        display events related to **Credit Memo** operations.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project69/8_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong
                            >Bug: Issue Interim Invoice - Navigation Behavior - </strong
                        >After clicking **Issue Interim Invoice**, the user
                        should be redirected to the **newly issued invoice
                        page**, rather than to the **Upcoming Invoice** section
                        on the order details page.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project69/9_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>
                </ol>
            </div>
        </div>
    </div>
</template>
