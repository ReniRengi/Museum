export function initTicket() {
    window.addEventListener('load', () =>addTicket());
  }
  function addTicket(){
      const form=document.getElementById('booking-form');
      let total;
      let price;
      let item;
      let value1;
      let value2;
      console.log(document.getElementById('price'));
    form.addEventListener("click", function(event) {
       item=form.querySelector('input[name="radio"]:checked').value;
       value1=document.getElementById('num1').value;
       value2=document.getElementById('num2').value;
       price=document.getElementById('price');
       total=(item*value1)+((item/2)*value2);
       console.log(price);
       let updatePrice = (total) => price.textContent =total;
       updatePrice();
      });
    

    
}