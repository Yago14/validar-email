
const email = document.querySelector(".email")
const messangem = document.querySelector(".menssagem")
const container = document.querySelector(".container")
const emailAdress = document.querySelector(".ms-email")

document.querySelector(".btn").addEventListener("click", () => {

   if (email.value == "") {
      alert("Preencher Campos Obrigatórios")
      email.classList.add("bordas-vermelhas")
      return
   }

   messangem.classList.remove("display-none")
   container.classList.add("display-none")
   emailAdress.innerHTML = email.value
})
document.addEventListener("keypress", (event) => {

   if (event.key === "Enter") {

      if (email.value == "") {
         alert("Preencher Campos Obrigatórios")
         email.classList.add("bordas-vermelhas")
         return
      }
      messangem.classList.remove("display-none")
      container.classList.add("display-none")
      emailAdress.innerHTML = email.value
      event.preventDefault()
   }

})

document.querySelector(".btn-dismiss").addEventListener("click", () => {

   window.location.reload(true)

})




