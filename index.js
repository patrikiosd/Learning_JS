function handleRegister(event) {
  event.preventDefault();
  const email_input = document.getElementById("input_email");
  const pass_input = document.getElementById("input_pass");

  console.log({ email: email_input.value, password: pass_input.value });
}

function main() {
  console.log("eimai o patrick");

  const register_btn = document.getElementById("register_btn");

  register_btn.addEventListener("click", handleRegister);
}

window.onload = () => {
  main();
};
