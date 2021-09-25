window.addEventListener("load", function (event) {
    loadForm();
  });
  
  function loadForm() {
  
    let modal = document.getElementById("byTicketModal");
    let btn = document.getElementById("total-button");
    let span = document.getElementsByClassName("close")[0];
    const hideModal = () => modal.classList.add('hidden');
    const showModal = () => modal.classList.remove("hidden");
  
    btn.onclick = () => showModal();
    span.onclick = () => hideModal();
  
  
  }
  