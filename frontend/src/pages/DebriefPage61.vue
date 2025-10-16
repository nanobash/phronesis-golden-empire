<template>
    <div>
      <h1>Project 61: KPI segments</h1>
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
                        <strong>Good:</strong> The task requirements were clear.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We successfully accomplished the task.
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
                        <strong>Notice: </strong>When first opening segments it's not clear what is <strong>All</strong> checkbox for. Maybe at least one segment should be always selected so last checkbox always disabled?
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project61/picture_1.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Reordering segments is not possible (we want <strong>All</strong> to be on the top for example). And <strong>Create segment</strong> button disappeared - maybe it better be disabled to be clear it's not bug but restriction?
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project61/picture_2.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Delete tooltip is actually hiding segment not deleting it. Also we have no way to actually delete segment.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project61/picture_3.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Date picker and date dropdown are overlapping.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project61/picture_4.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Restore metrics restores dates too, even if they are changed beforehand - could be confusing as we were thinking this button is only for restoring hidden metrics.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>This button also could show how much metrics are hidden. If I hide some metrics after a month I could forget it was the case so I will be wondering where are my metrics.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: Create segment</strong> functionality is mixed with <strong>Apply selection</strong> functionality it's confusing for us too.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project61/picture_6.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>
                </ol>
            </div>
        </div>
    </div>
</template>
