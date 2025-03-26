<template>
    <div>
      <h1>Project 32</h1>
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
                        <strong>Good:</strong> The project requirements were clear.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We successfully tested <strong>Customer support</strong> permissions.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We successfully tested <strong>KYC support</strong> permissions.
                    </li>

                    <li class="list-group-item list-group-item-success">
                        <strong>Good:</strong> We successfully tested <strong>Billing support</strong> permissions.
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
                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> Add user with + email shows general error message, though the user is created.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Perissions textarea can't be resized, which might be not quite convenient for many permissions in terms of UX.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> After add/edit user, page is not redicated to the listing page.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> Unable to edit/delete invoice item on pending state (add is possible though).
                    </li>

                    <li class="list-group-item list-group-item-danger">
                        <strong>Bug: </strong> If user email is too long, it does not fit into the toast message.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> In terms of UX, it will be more informational to display name or email of the user on top during emulating permissions.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Bug: </strong> If same permissions are copied in textarea, the duplicated ones are not removed upon saving.
                    </li>

                    <li class="list-group-item list-group-item-warning">
                        <strong>Notice: </strong> According to the <a href="https://www.rebilly.com/docs/settings/users#view-edit-emulate-or-delete-users" target="_blank">docs</a> not clear how <strong>Allowed IPs</strong> work, seems it does not work with emulation.
                    </li>
                </ol>
            </div>
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project32/picture_1.png" alt="add user error" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project32/picture_2.png" alt="permissions textarea" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project32/picture_3.png" alt="edit invoice item" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project32/picture_7.png" alt="delete invoice item" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project32/picture_4.png" alt="toast message - long email" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project32/picture_5.png" alt="emulate permissions name - email" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>

        <div class="col-12 text-start">
            <img src="../assets/project32/picture_6.png" alt="duplicated permissions" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto;">
        </div>
    </div>
</template>
