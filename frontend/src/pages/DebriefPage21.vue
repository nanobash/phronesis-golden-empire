<template>
    <div>
        <h1>Project 21</h1>
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
                <p>The project seemed clear to understand.</p>
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
                    <li class="list-group-item">
                        Having blocklisting in different places is inconvenient. (Blocklist based on disputes and blocklist based on risk score)
                    </li>

                    <li class="list-group-item">
                        It seems it is impossible to complete these two requirements in parallel:
                        <ul class="list-group mt-2 text-start">
                            <li class="list-group-item">Permanently block payment cards when the number of consecutive declined transactions exceeds 5</li>
                            <li class="list-group-item">Permanently block all IP addresses that use VPN or Tor</li>
                        </ul>
                        As if permanent block is triggered for payment card, then it will block IP address as well.
                    </li>

                    <li class="list-group-item">
                        Had to set some BETWEEN value for velocity, unable to just set GT/GTE value
                    </li>

                    <li class="list-group-item">
                        Empty validation message on invalid velocity input
                    </li>

                    <li class="list-group-item">
                        Unable to delete custom blocklist entries - no such button. Impossible to save
                    </li>

                    <li class="list-group-item">
                        Inconvenient to calculate seconds if I want to set 3 days, for example
                    </li>

                    <li class="list-group-item">
                        Not clear what type of fingerprint this is - device fingerprint or payment instrument fingerprint
                    </li>
                </ol>
            </div>

            <!-- Images for specific issues -->
            <div class="col-12 text-start">
                <img src="../assets/project21/picture_1.png" alt="Blocklist Issue" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
            </div>

            <div class="col-12 text-start">
                <img src="../assets/project21/picture_2.png" alt="Velocity Issue" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
            </div>

            <div class="col-12 text-start">
                <img src="../assets/project21/picture_3.png" alt="Validation Issue" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
            </div>

            <div class="col-12 text-start">
                <img src="../assets/project21/picture_4.png" alt="Deletion Issue" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
            </div>

            <div class="col-12 text-start">
                <p>Inconvenient to calculate seconds if I want to set 3 days, for example</p>
            </div>

            <div class="col-12 text-start">
                <img src="../assets/project21/picture_5.png" alt="Fingerprint Issue" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
            </div>
        </div>
    </div>
</template>
