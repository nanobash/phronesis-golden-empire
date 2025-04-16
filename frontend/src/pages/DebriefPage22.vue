<template>
    <div>
        <h1>Project 22: Manage volume limits</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center">
        <div>Teammates: Tornike Nanobashvili, Vladimir Berdnik</div>
    </div>

    <hr>

    <div class="container mt-4">
        <!-- What made you smile? -->
        <div class="row mb-4">
            <div class="col-12 text-center">
                <h4 class="text-primary">What made you smile?</h4>
                <p>The project requirements were clear and straightforward.</p>
                <p>AI search tool helped to easily search up documentation.</p>
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
                        <strong>Notice:</strong> It will be nice to have currencies dropdown to select, instead of manually converting and specifying the desired currency and the amount. By default it shows organization setup currency.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice:</strong> Maybe not a bug or even intended behavior, but daily limit sets downtime schedule up to midnight, thus not actually 24 hours from the limit reached event.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice:</strong> If volume limit is updated, one may forget to remove "Downtime schedule" data too, that will lead to confusion.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug:</strong> Volume limits are not applied directly upon happening, as they rely on cron job.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug:</strong> For some reason after Gateway-D limit is reached, it's timeline and downtime schedule did not update.
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug:</strong> We edited Gateway-C volume limit from 50 to 5, and seems somehow Gateway-D limits got reset, upcoming transactions were proceed via Gateway-D.
                    </li>
                </ol>
            </div>

            <!-- Images for specific issues -->
            <div class="col-12 text-start">
                <img src="../assets/project22/picture_1.png" alt="Currency dropdown not available" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
            </div>

            <!-- Images for specific issues -->
            <div class="col-12 text-start">
                <img src="../assets/project22/picture_2.png" alt="Daily limit up to midnight" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
            </div>

            <!-- Images for specific issues -->
            <div class="col-12 text-start">
                <img src="../assets/project22/picture_3.png" alt="Volume limits are not applied directly" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
            </div>

            <!-- Images for specific issues -->
            <div class="col-12 text-start">
                <img src="../assets/project22/picture_4.png" alt="Timelines not updated" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
            </div>

            <!-- Images for specific issues -->
            <div class="col-12 text-start">
                <img src="../assets/project22/picture_5.png" alt="Limits got reset" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
            </div>
        </div>
    </div>
</template>
