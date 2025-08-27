function Show() {
    var form = document.getElementById("myform");
    var text = document.getElementById("mytext");
    
    if (form.style.display === "none" || form.style.display === "") {
      form.style.display = "block";
      text.innerHTML = "Hide Register Form";
    } else {
      form.style.display = "none"; 
      text.innerHTML = "Show Register Form";
    }
  }
  
  function checkForm() {
    var name = document.getElementById("t1").value;
    var email = document.getElementById("t2").value;
    
    if (name === "" || email === "") {
      alert("Please fill in all fields!");
      return false;
    }
    return true;
  }