const fromElement = document.querySelector(".form");
const emailElement = document.querySelector("#email");
const passwordElement = document.querySelector("#password");

fromElement.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = emailElement.value;
  const password = passwordElement.value;

  const data = {
    email,
    password,
  };

  const res = await fetch("http://localhost:4000/auth/login", {
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
  if (resData.message === "loggedIn") {
    // window.location.href "http://localhost:4000/auth/login"
    window.open("http://localhost:4000/auth/me");
  }else{
    alert("Something wrong!")
  }

  // const data = new FormData(e.target);

  // console.log(data);

  // const formObject = Object.fromEntries(data.entries());
  // console.log(formObject);
});
