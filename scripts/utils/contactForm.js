const modal = document.getElementById("contact_modal");
const form = document.forms["contact"];

function displayModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function submit() {
  const submit = form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(
      "Prénom :",
      form.elements["first"].value.trim(),
      ", Nom :",
      form.elements["last"].value.trim(),
      ", E-mail :",
      form.elements["email"].value.trim(),
      ", Message :",
      form.elements["message"].value.trim()
    );

    modal.style.display = "none";
  });
}
