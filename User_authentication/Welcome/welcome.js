//logic to check is user login

if (localStorage.getItem("token")) {
  document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("token");
    //window.location.reload();
    const redirectURL =
      "https://Lipsa760.github.io/User_authentication/Login/login.html";
    window.location.href = redirectURL;
  });
}
