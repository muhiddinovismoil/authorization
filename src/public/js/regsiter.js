const fromElement = document.querySelector(".form");
const FullNameElement = document.querySelector("#fullName");
const emailElement = document.querySelector("#email");
const passwordElement = document.querySelector("#password");
const confirmPasswordElement = document.querySelector("#confirmPassword");

fromElement.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = FullNameElement.value;
  const email = emailElement.value;
  const password = passwordElement.value;
  const confirmPassword = confirmPasswordElement.value;

  const data = {
    fullName,
    email,
    password,
  };

  console.log(data);

  if (confirmPassword !== password) {
    alert("confirmPassword is wrong");
    return;
  }

  const res = await fetch("http://localhost:4000/auth/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    alert("ERROR");
    return;
  }

  const resData = await res.json();
  console.log(resData);
  if(resData.message ==="created"){
    // window.location.href "http://localhost:4000/auth/login"    
    window.open("http://localhost:4000/auth/login")    

  }

  // const data = new FormData(e.target);

  // console.log(data);

  // const formObject = Object.fromEntries(data.entries());
  // console.log(formObject);
});
