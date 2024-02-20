function emailSent() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("mail").value,
    message: document.getElementById("message").value,
    date: document.getElementById("date").value,
    categories: document.getElementById("categories").value,
  };

  console.log(userName, "here");

  const serviceID = "service_sp98txs";
  const templateID = "template_zuc7zpc";

  emailJs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("mail").value = "";
      document.getElementById("message").value = "";
      document.getElementById("date").value = "";
      document.getElementById("categories").value = "";
      console.log(res);
      alert("Your message sent Successfully");
    })
    .catch((err) => console.log(err));
}


emailSent()