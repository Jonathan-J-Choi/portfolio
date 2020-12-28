const checkbox = document.getElementById("checkbox");
const nav = document.getElementById("nav");
// const body = document.getElementById("body");
const section = document.getElementById("top");
const button = document.getElementById("formButton");
const footer = document.getElementById("footer");
let timesClicked = 0;

$("#checkbox").click(function() {
  timesClicked++;
  
  if (timesClicked%2==0) {
  //Revert back to Standard Mode
  nav.classList.remove('is-black')
  nav.classList.add('is-white')
  document.body.classList.remove('has-background-dark')
  document.body.classList.add('has-background-light')
  section.classList.remove('is-warning')
  section.classList.add('is-danger')
  button.classList.remove('is-warning')
  button.classList.add('is-danger')
  footer.classList.remove('footerDark')
  footer.classList.add('footerLight')

  } else {
  //Dark Mode
  nav.classList.remove('is-white')
  nav.classList.add('is-black')
  document.body.classList.remove('has-background-light')
  document.body.classList.add('has-background-dark')
  section.classList.remove('is-danger')
  section.classList.add('is-warning')
  button.classList.remove('is-danger')
  button.classList.add('is-warning')
  footer.classList.remove('footerLight')
  footer.classList.add('footerDark')
  }
  })