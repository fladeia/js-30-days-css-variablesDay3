const inputs = document.querySelectorAll(".controls input");

console.log(inputs);

function handleChanges() {
  //pick the type of value ex. px
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );

  console.log(suffix);
}

inputs.forEach((input) => input.addEventListener("change", handleChanges));
inputs.forEach((input) => input.addEventListener("mousemove", handleChanges));

//this does not work here. ?
// inputs.forEach((input) =>
//   input.addEventListener("change", () => console.log(input.value))
// );
