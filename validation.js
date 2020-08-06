console.log("Test")

const form = document.querySelector("#informacion")
const email = document.querySelector("#email")

form.addEventListener("submit", event => {
	event.preventDefault()
	if (email.value === "") {
		console.log("Revisar info!")
	} else { 
		console.log ("Funciona")
		form.submit();
		}
	})
