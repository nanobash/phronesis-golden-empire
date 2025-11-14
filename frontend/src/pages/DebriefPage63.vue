<template>
    <div>
      <h1>Project 63: Allowlists</h1>
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
                        <strong>Notice: </strong> No button to edit allowlist.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project63/picture_3.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>Back button does not work. Same for Automated blocklists.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project63/picture_2.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <div class="col-12 text-start">
                        <img src="../assets/project63/picture_6.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> It's not exactly clear if domain needs to include @, probably no but maybe better to trim it on backend to avoid confusion.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project63/picture_4.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>BIN not validated on save.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project63/picture_5.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> We probably need to have allowlist count because if we forget what we created we need to go through all of them.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project63/picture_7.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Permanently and temporary block UI sections seems confusing and perhaps leads to misunderstanding for the customer - probably better to have radiobutton to select only one of them.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project63/picture_8.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> We were able to block first couple of customers but after we manually deleted blocks, transactions make it through even though rules are still present.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project63/picture_9.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong>KPIs UI breaks when titles are long.
                    </li>

                    <div class="col-12 text-start">
                        <img src="../assets/project63/picture_1.png" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
                    </div>
                </ol>
            </div>
        </div>
    </div>
</template>
