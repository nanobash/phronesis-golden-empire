<template>
    <div>
      <h1>Project 49: Segments</h1>
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

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We successfully created 3 of the segments.
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
                        <strong>Notice: </strong>Segment form > title > 25 characters too short in our opinions.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Confusing > Segment form > default segments are marked private, but others can see the same thing? Maybe we should hide the share section for default segments. But when shared with another user, seems to override to default.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong>Segment > data-export >The title can be improved and be more accurate. Seems to be substituting > and < to underscores _.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project49/picture_1.png" alt="title length" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project49/picture_2.png" alt="segment share" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project49/picture_3.png" alt="segment name on exported report" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
