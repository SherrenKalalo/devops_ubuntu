//handle and validate input
function action_val() {
  //get input values
  var name = document.getElementById("user-name").value;
  var email = document.getElementById("user-email").value;
  var address = document.getElementById("user-address").value;

  //javascript validation for empty input fields
  if (!name.trim().length) {
    alert("User name kosong bang :)");
  }
  if (!email.trim().length) {
    alert("Waduh email kosong bang :)");
  }
  if (!address.trim().length) {
    alert("Waduh address kosong nih bang :)");
  }
}
