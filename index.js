let callView = document.querySelector(".call-card-view");

function showCallView() {
    callView.style.display = "grid";
}

function hideCallView() {
    callView.style.display = "none";
}

function placeCall() {
    showCallView();
}

function endCall() {
    hideCallView();
}