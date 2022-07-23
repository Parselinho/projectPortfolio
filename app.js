
    const email = document.querySelector('#emailconst');
    const textarea = document.querySelector('#exampleFormControlTextarea1');
    const button = document.querySelector('#btnSubmit');
    const form = document.querySelector('#form');

   button.addEventListener('click', (e) => {
      e.preventDefault();
      if (email.value === "" && textarea.value === "") {
         alert("Please fill out email and message fields before sending");
      } else if (email.value === "" ) {
         alert("Please fill out email before sending");
      } else if (textarea.value === "" ) {
         alert("Please fill out message field before sending");
      } else {
         alert(`Message successfully sent`);
         form.reset();
      }
   });

   const h1 = document.querySelector('#h1Gal')
   const buttonInfo = document.querySelector('#search-button');
   const svg = document.querySelector('#search-icon');
   const modal = document.querySelector('#myModal');
   const span = document.querySelector('close');
   const body = document.getElementsByName('body');

   buttonInfo.addEventListener('click', (e) => {
      modal.style.display = "block";
   });

   function closeModal() {
      modal.style.display = "none";
   }
   
   window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }