"use strict";
const form = document.querySelector(".estimate-form");
const fields = [document.getElementById("name"), document.getElementById("email")];
const summary = document.getElementById("error-summary");
const list = document.getElementById("error-list");
const status = document.getElementById("form-status");
// Enhance only when loaded; the disabled HTML button prevents accidental posting.
form.noValidate = true;
form.querySelector("button").disabled = false;
function errorFor(field) {
  if (!field.value.trim()) return field.id === "name" ? "Enter your name." : "Enter your email address.";
  if (field.validity.typeMismatch) return "Enter an email address such as name@example.com.";
  return "";
}
form.addEventListener("input", () => { status.textContent = ""; });
form.addEventListener("submit", event => {
  event.preventDefault();
  status.textContent = "";
  list.replaceChildren();
  let count = 0;
  for (const field of fields) {
    const message = errorFor(field);
    const error = document.getElementById(field.id + "-error");
    error.textContent = message;
    error.hidden = !message;
    if (message) {
      count++;
      field.setAttribute("aria-invalid", "true");
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = "#" + field.id;
      link.textContent = message;
      link.addEventListener("click", () => field.focus());
      item.append(link); list.append(item);
    } else { field.removeAttribute("aria-invalid"); }
  }
  summary.hidden = count === 0;
  if (count) { summary.focus(); }
  else { status.textContent = "Your entries passed the checks. This demonstration has not sent or saved an estimate request."; }
});
