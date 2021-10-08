export function initTicket() {
    window.addEventListener('load', () =>addTicket());
  }
  function addTicket(){
    let item;

    if (document.querySelector('input[name="radio"]')) {
        document.querySelectorAll('input[name="radio"]').forEach((elem) => {
          elem.addEventListener("click", function(event) {
            item = event.target.value;
           console.log(item);
          });
        });
      }
   
  
}