<template>
    <div>
        <h1>Project 67: Payout request v2 flow</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center">
        <div>Teammates: Tornike Nanobashvili, Victor Goncearencu</div>
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
                        <strong>Good: </strong>The task requirements were not
                        quite clear but we managed to accomplish the task.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good: </strong>Teamwork.
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
                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Timeline actions are not
                        highlighted.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project67/picture_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>There is no indication about
                        the tag on the details page, that might be confusing.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project67/picture_2.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Back button does not work properly
                        on "Update gateway account" Page.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project67/picture_3.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Notice: </strong>"No suitable payment
                        instruments found for allocation", this validation
                        message was at some point confusing and we got stuck on
                        it for a while, afterwards we figured out that first we
                        needed to do some successful transaction(s) beforehand.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project67/picture_4.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>"This action cannot be undone." is
                        actually false, as it can be undone without any problem.
                        Thus we think, it should be removed from the text.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project67/picture_5.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>We got "There was an error" on
                        "Payout allocations" page. It should be investigated and
                        fixed what's wrong there.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project67/picture_6.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Notice: </strong>UI is not intuitive, finding
                        Procees link from the three dots is kind of confusing,
                        because main action buttons are on the top right corner.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project67/picture_7.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>
                </ol>
            </div>
        </div>
    </div>
</template>
