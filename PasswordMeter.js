// Inputs/Textboxes add 'PasswordInputCheck' as a class
// Labels add 'PasswordLabelCheck' as a class

// Load password checker function on every page load where this file is placed, this will check they page every page load for labels and inputs with the classes to apply the checker/ indicator
function pageLoad(sender, args) {
    passwordcheck();
}

function passwordcheck() {
    if (document.getElementsByClassName("PasswordInputCheck").length > 0) {
        var elementList = document.querySelectorAll('input.PasswordInputCheck');
        for (const object of elementList) {
            object.insertAdjacentHTML('afterend', '<div class="progress" style="margin-bottom:0px !important;"><div class="progress-bar PasswordIndicatorBar' + object.id + '" role="progressbar"></div></div>');
            var PasswordIndicatorBar = document.querySelectorAll('div.PasswordIndicatorBar' + object.id);
            for (const bar of PasswordIndicatorBar) {
                CheckPasswordStrength(object.value, bar, object.id);
                object.addEventListener("keyup", function () { CheckPasswordStrength(object.value, bar, object.id) });
            }
        }
    }

    if (document.getElementsByClassName("PasswordLabelCheck").length > 0) {
        var elementList = document.querySelectorAll('label.PasswordLabelCheck');
        for (const label of elementList) {
            if (label.innerHTML.length > 1) {
                label.insertAdjacentHTML('afterend', '<div class="progress" style="margin-bottom:0px !important;"><div class="progress-bar PasswordIndicatorBar' + label.id + '" role="progressbar"></div></div>');
                var PasswordIndicatorBar = document.querySelectorAll("div.PasswordIndicatorBar" + label.id);
                for (const bar of PasswordIndicatorBar) {
                    CheckPasswordStrength(label.innerHTML, bar, label.id);
                }
            }
        }
    }

    function CheckPasswordStrength(password, indicator, id) {

        var strength = 0; // Strength will always start off with 0

        // Match Password Strength via regular expressions
        if (password.match(/[a-z]+/)) {
            strength += 1;
        }
        if (password.match(/[A-Z]+/)) {
            strength += 1;
        }
        if (password.match(/[0-9]+/)) {
            strength += 1;
        }
        if (password.match(/[$@#&!]+/)) {
            strength += 1;
        }

        if (password.length <= 6 && password.length >= 2) {
            strength += 1;
        }

        if (password.length <= 10 && password.length >= 7) {
            strength += 2;
        }

        if (password.length <= 14 && password.length >= 11) {
            strength += 3;
        }

        if (password.length >= 15) {
            strength += 4;
        }

        switch (strength) {
            case 0:
                indicator.setAttribute("aria-valuenow", "0");
                indicator.setAttribute("aria-valuemin", "0");
                indicator.setAttribute("aria-valuemax", "100");
                indicator.setAttribute("class", "progress-bar progress-bar-danger PasswordIndicatorBar" + id);
                indicator.setAttribute("style", "width:0%;");
                indicator.innerHTML = "0%";
                break;

            case 1:
                indicator.setAttribute("aria-valuenow", "12.5");
                indicator.setAttribute("aria-valuemin", "0");
                indicator.setAttribute("aria-valuemax", "100");
                indicator.setAttribute("class", "progress-bar progress-bar-danger PasswordIndicatorBar" + id);
                indicator.setAttribute("style", "width:13%;");
                indicator.innerHTML = "12.5%";
                break;

            case 2:
                indicator.setAttribute("aria-valuenow", "25");
                indicator.setAttribute("aria-valuemin", "0");
                indicator.setAttribute("aria-valuemax", "100");
                indicator.setAttribute("class", "progress-bar progress-bar-danger PasswordIndicatorBar" + id);
                indicator.setAttribute("style", "width:25%;");
                indicator.innerHTML = "25%";
                break;

            case 3:
                indicator.setAttribute("aria-valuenow", "37.5");
                indicator.setAttribute("aria-valuemin", "0");
                indicator.setAttribute("aria-valuemax", "100");
                indicator.setAttribute("class", "progress-bar progress-bar-danger PasswordIndicatorBar" + id);
                indicator.setAttribute("style", "width:38%;");
                indicator.innerHTML = "37.5%";
                break;

            case 4:
                indicator.setAttribute("aria-valuenow", "50");
                indicator.setAttribute("aria-valuemin", "0");
                indicator.setAttribute("aria-valuemax", "100");
                indicator.setAttribute("class", "progress-bar progress-bar-warning PasswordIndicatorBar" + id);
                indicator.setAttribute("style", "width:50%;");
                indicator.innerHTML = "50%";
                break;

            case 5:
                indicator.setAttribute("aria-valuenow", "62.5");
                indicator.setAttribute("aria-valuemin", "0");
                indicator.setAttribute("aria-valuemax", "100");
                indicator.setAttribute("class", "progress-bar progress-bar-warning PasswordIndicatorBar" + id);
                indicator.setAttribute("style", "width:63%;");
                indicator.innerHTML = "62.5%";
                break;

            case 6:
                indicator.setAttribute("aria-valuenow", "75");
                indicator.setAttribute("aria-valuemin", "0");
                indicator.setAttribute("aria-valuemax", "100");
                indicator.setAttribute("class", "progress-bar progress-bar-warning PasswordIndicatorBar" + id);
                indicator.setAttribute("style", "width:75%;");
                indicator.innerHTML = "75%";
                break;

            case 7:
                indicator.setAttribute("aria-valuenow", "87.5");
                indicator.setAttribute("aria-valuemin", "0");
                indicator.setAttribute("aria-valuemax", "100");
                indicator.setAttribute("class", "progress-bar progress-bar-success PasswordIndicatorBar" + id);
                indicator.setAttribute("style", "width:88%;");
                indicator.innerHTML = "87.5%";
                break;

            case 8:
                indicator.setAttribute("aria-valuenow", "100");
                indicator.setAttribute("aria-valuemin", "0");
                indicator.setAttribute("aria-valuemax", "100");
                indicator.setAttribute("class", "progress-bar progress-bar-success PasswordIndicatorBar" + id);
                indicator.setAttribute("style", "width:100%;");
                indicator.innerHTML = "100%";
                break;

        }

    }
    console.log("Password Checker Loaded!");
}


