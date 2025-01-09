<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Project 21
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="list-group">
                        <li class="list-group-item">Having blocklisting in different places is inconvenient. (Blocklist based on disputes and blocklist based on risk score)</li>

                        <li class="list-group-item">
                            It seems it is impossible to complete these two requirements in parallel

                            <ul class="list-group">
                                <li class="list-group-item">Permanently block payment cards when the number of consecutive declined transactions exceeds 5</li>
                                <li class="list-group-item">Permanently block all IP addresses that use VPN or Tor</li>
                            </ul>

                            As if permanent block is triggered for payment card then it will block IP address as well

                            <img src="../assets/project21/picture_1.png" alt="" style="border-radius: 10px;">
                        </li>

                        <li class="list-group-item">
                            Had to set some BETWEEN value for velocity, unable to just set GT/GTE value

                            <img src="../assets/project21/picture_2.png" alt="" style="border-radius: 10px;">
                        </li>

                        <li class="list-group-item">
                            Empty validation message on invalid velocity input

                            <img src="../assets/project21/picture_3.png" alt="" style="border-radius: 10px;">
                        </li>

                        <li class="list-group-item">
                            Unable to delete custom blocklist entries - no such button. Impossible to save

                            <img src="../assets/project21/picture_4.png" alt="" style="border-radius: 10px;">
                        </li>

                        <li class="list-group-item">Inconvenient to calculate seconds if I want to set 3 days, for example</li>

                        <li class="list-group-item">
                            Not clear what type of fingerprint this is - device fingerprint or payment instrument fingerprint

                            <img src="../assets/project21/picture_5.png" alt="" style="border-radius: 10px;">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.accordion-item li {
    text-align: left;
}
</style>
