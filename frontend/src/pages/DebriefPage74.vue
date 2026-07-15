<template>
    <div>
        <h1>Project 74: Replay reports</h1>
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
                        <strong>Scenario 1:</strong>

                        It took us about <strong>~5 min</strong> to
                        understand the graphs and realize they were about new
                        grants.<br />
                        We ran into an issue where the graph wasn't updating
                        the months correctly, but we were unable to reproduce
                        it afterwards.
                    </li>

                    <li class="list-group-item list-group-item-info">
                        <strong>Scenario 2:</strong>

                        It was easy to understand that players were winning in May, which is why the total <strong>GGR</strong> is negative. It took about ~1 min to reach this conclusion.</br>
                        It's a bit confusing how losses, win gross, and win net are actually calculated.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project74/picture_1.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>When switching tabs between Gaming revenue, Payment processing, and Bonus liability, the view resets to organization.
                    </li>

                    <div class="col-12 text-start">
                        <video
                            src="../assets/project74/video_1.mov"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                            controls
                        ></video>
                    </div>

                    <li class="list-group-item list-group-item-info">
                        <strong>Scenario 3:</strong>

                        We also understood this quite well and quickly, in about ~1-2 min.</br>
                        However, the <strong>Total withdrawals</strong> label seems confusing, since it's actually calculated as <strong>Withdrawal posted + Reversal posted</strong>.</br>
                        A net cash-out field should probably be added to the breakdown table as well.</br>
                        We think the <strong>Wallets event</strong> table is easy to analyze when there's a small number of records. However, with many records, the current view can become confusing and difficult to analyze.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> After filtering wallet events, values disappear, and multiple filter lines disappear as well.
                    </li>

                    <div class="col-12 text-start">
                        <img
                            src="../assets/project74/picture_2.png"
                            class="img-fluid rounded mb-3"
                            style="max-width: 100%; height: auto"
                        />
                    </div>
                </ol>
            </div>
        </div>
    </div>
</template>
