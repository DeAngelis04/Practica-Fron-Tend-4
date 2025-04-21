
const content = document.querySelectorAll(".text");
const display = document.querySelectorAll(".borde");

display.forEach((dis, index) => {
  const boton = dis.querySelector(".boton");

  boton.addEventListener("click", () => {
    const text = content[index];
    const isActive = text.classList.contains("active");

   
    content.forEach((el, i) => {
      el.classList.remove("active");
      el.style.maxHeight = "0px";
      display[i].querySelector(".boton").classList.remove("active");
    });

    
    if (!isActive) {
      text.classList.add("active");
      text.style.maxHeight = text.scrollHeight + "px";
      boton.classList.add("active");
    }
  });
});