// let dataUser = JSON.parse(localStorage.getItem("userData")) || [];
// let loginForm = document.querySelector(".login-form");

// loginForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let username = document.getElementById("login-form-username").value.trim();
//   let email = document.getElementById("register-form-email").value.trim();
//   let password = document.getElementById("login-form-password").value.trim();

//   let usernameExists = dataUser.some((userData) => userData.name === username);
//   let emailExists = dataUser.some((userData) => userData.email === email);

//   document.querySelectorAll(".validation").forEach(function (validation) {
//     validation.textContent = ""; // Clear any existing error messages
//   });

//   if (username === "") {
//     document.getElementById("validation-username").textContent =
//       "Please enter a valid username";
//   } else {
//     if (!usernameExists) {
//       document.getElementById("validation-username").textContent =
//         "Username not found";
//     }
//   }

//   if (email === "") {
//     document.getElementById("validation-email").textContent =
//       "Please enter a valid email";
//   } else {
//     if (!emailExists) {
//       document.getElementById("validation-email").textContent =
//         "Email not found";
//     }
//   }

//   if (password === "") {
//     document.getElementById("validation-password").textContent =
//       "Please enter a valid password";
//   } else {
//     let user = dataUser.find((userData) => userData.name === username);
//     if (user.password === password) {
//       console.log("Login successful");
//       window.location.href = "index.html";
//     } else {
//       document.getElementById("validation-password").textContent =
//         "Incorrect password";
//     }
//   }

//   if (usernameExists && emailExists) {
//     let user = dataUser.find((userData) => userData.name === username);
//     if (user.password === password) {
//       console.log("Login successful");
//       window.location.href = "index.html";
//     } else {
//       document.getElementById("validation-password").textContent =
//         "Incorrect password";
//     }
//   }
// });

// let dataUser = JSON.parse(localStorage.getItem("userData")) || [];
// let loginForm = document.querySelector(".login-form");

// // التحقق أثناء الكتابة
// document
//   .getElementById("login-form-username")
//   .addEventListener("input", function () {
//     let username = document.getElementById("login-form-username").value.trim();
//     let usernameExists = dataUser.some(
//       (userData) => userData.name === username
//     );

//     if (username === "" || !/^[A-Z][a-zA-Z0-9]+$/.test(username)) {
//       document.getElementById("validation-username").textContent =
//         "Please enter a valid username starting with a capital letter";
//     } else {
//       if (!usernameExists) {
//         document.getElementById("validation-username").textContent =
//           "Username not found";
//       } else {
//         document.getElementById("validation-username").textContent = "";
//       }
//     }
//   });

// document
//   .getElementById("register-form-email")
//   .addEventListener("input", function () {
//     let email = document.getElementById("register-form-email").value.trim();
//     if (email === "") {
//       document.getElementById("validation-email").textContent =
//         "Please enter an email address";
//     } else if (!/^[A-Z][a-zA-Z0-9._%+-]+@gmail.com$/.test(email)) {
//       document.getElementById("validation-email").textContent =
//         "Please enter a valid Gmail address starting with a capital letter";
//     } else if (!validateEmail(email)) {
//       document.getElementById("validation-email").textContent =
//         "Please enter a valid email address";
//     } else {
//       document.getElementById("validation-email").textContent = "";
//     }
//   });

// document
//   .getElementById("login-form-password")
//   .addEventListener("input", function () {
//     let password = document.getElementById("login-form-password").value.trim();
//     if (
//       password === "" ||
//       !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{11,}$/.test(password)
//     ) {
//       document.getElementById("validation-password").textContent =
//         "Please enter a valid password with at least 11 characters containing letters and numbers";
//     } else {
//       document.getElementById("validation-password").textContent = "";
//     }
//   });

// loginForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let username = document.getElementById("login-form-username").value.trim();
//   let email = document.getElementById("register-form-email").value.trim();
//   let password = document.getElementById("login-form-password").value.trim();

//   let usernameExists = dataUser.some((userData) => userData.name === username);
//   let emailExists = dataUser.some((userData) => userData.email === email);

//   document.querySelectorAll(".validation").forEach(function (validation) {
//     validation.textContent = ""; // Clear any existing error messages
//   });

//   if (username === "" || !/^[A-Z][a-zA-Z0-9]+$/.test(username)) {
//     document.getElementById("validation-username").textContent =
//       "Please enter a valid username starting with a capital letter";
//   } else {
//     if (!usernameExists) {
//       document.getElementById("validation-username").textContent =
//         "Username not found";
//     }
//   }

//   if (email === "") {
//     document.getElementById("validation-email").textContent =
//       "Please enter an email address";
//   } else if (!/^[a-zA-Z0-9._%+-]+@gmail.com$/.test(email)) {
//     document.getElementById("validation-email").textContent =
//       "Please enter a valid Gmail address";
//   } else {
//     if (!validateEmail(email)) {
//       document.getElementById("validation-email").textContent =
//         "Please enter a valid email address";
//     } else {
//       if (!emailExists) {
//         document.getElementById("validation-email").textContent =
//           "Email not found";
//       }
//     }
//   }

//   if (
//     password === "" ||
//     !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{11,}$/.test(password)
//   ) {
//     document.getElementById("validation-password").textContent =
//       "Password must be at least 11 characters and contain letters and numbers";
//   } else {
//     let user = dataUser.find((userData) => userData.name === username);
//     if (user.password === password) {
//       console.log("Login successful");
//       window.location.href = "index.html";
//     } else {
//       document.getElementById("validation-password").textContent =
//         "Incorrect password";
//     }
//   }
// });

// function validateEmail(email) {
//   // Basic email validation using a regular expression
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// let dataUser = JSON.parse(localStorage.getItem("userData")) || [];
// let loginForm = document.querySelector(".login-form");

// // التحقق أثناء الكتابة
// document
//   .getElementById("login-form-username")
//   .addEventListener("input", function () {
//     let username = document.getElementById("login-form-username").value.trim();
//     let usernameExists = dataUser.some(
//       (userData) => userData.name === username
//     );

//     // التحقق إذا كان الحقل فارغاً
//     if (username === "") {
//       document.getElementById("validation-username").textContent =
//         "Please enter a username";
//     } else if (!/^[A-Z][a-zA-Z0-9]+$/.test(username)) {
//       // التحقق إذا كان المدخل غير صحيح
//       document.getElementById("validation-username").textContent =
//         "Please enter a valid username starting with a capital letter";
//     } else if (!usernameExists) {
//       document.getElementById("validation-username").textContent =
//         "Username not found";
//     } else {
//       document.getElementById("validation-username").textContent = "";
//     }
//   });

// document
//   .getElementById("register-form-email")
//   .addEventListener("input", function () {
//     let email = document.getElementById("register-form-email").value.trim();

//     if (email === "") {
//       document.getElementById("validation-email").textContent =
//         "Please enter an email address";
//     } else if (!/^[a-zA-Z0-9._%+-]+@gmail.com$/.test(email)) {  // تم إزالة شرط الحرف الكبير
//       document.getElementById("validation-email").textContent =
//         "Please enter a valid Gmail address";
//     } else if (!validateEmail(email)) {
//       document.getElementById("validation-email").textContent =
//         "Please enter a valid email address";
//     } else {
//       document.getElementById("validation-email").textContent = "";
//     }
//   });

// document
//   .getElementById("login-form-password")
//   .addEventListener("input", function () {
//     let password = document.getElementById("login-form-password").value.trim();

//     if (password === "") {
//       document.getElementById("validation-password").textContent =
//         "Please enter a password";
//     } else if (
//       !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{11,}$/.test(password)
//     ) {
//       document.getElementById("validation-password").textContent =
//         "Password must be at least 11 characters and contain letters and numbers";
//     } else {
//       document.getElementById("validation-password").textContent = "";
//     }
//   });

// // التحقق عند الضغط على زر التسجيل أو الدخول
// loginForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let username = document.getElementById("login-form-username").value.trim();
//   let email = document.getElementById("register-form-email").value.trim();
//   let password = document.getElementById("login-form-password").value.trim();

//   let usernameExists = dataUser.some((userData) => userData.name === username);
//   let emailExists = dataUser.some((userData) => userData.email === email);

//   document.querySelectorAll(".validation").forEach(function (validation) {
//     validation.textContent = ""; // مسح أي رسائل خطأ سابقة
//   });

//   // التحقق من اسم المستخدم
//   if (username === "") {
//     document.getElementById("validation-username").textContent =
//       "Please enter a username";
//   } else if (!/^[A-Z][a-zA-Z0-9]+$/.test(username)) {
//     document.getElementById("validation-username").textContent =
//       "Please enter a valid username starting with a capital letter";
//   } else if (!usernameExists) {
//     document.getElementById("validation-username").textContent =
//       "Username not found";
//   }

//   // التحقق من البريد الإلكتروني
//   if (email === "") {
//     document.getElementById("validation-email").textContent =
//       "Please enter an email address";
//   } else if (!/^[a-zA-Z0-9._%+-]+@gmail.com$/.test(email)) {
//     document.getElementById("validation-email").textContent =
//       "Please enter a valid Gmail address";
//   } else if (!validateEmail(email)) {
//     document.getElementById("validation-email").textContent =
//       "Please enter a valid email address";
//   } else if (!emailExists) {
//     document.getElementById("validation-email").textContent =
//       "Email not found";
//   }

//   // التحقق من كلمة المرور
//   if (password === "") {
//     document.getElementById("validation-password").textContent =
//       "Please enter a password";
//   } else if (
//     !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{11,}$/.test(password)
//   ) {
//     document.getElementById("validation-password").textContent =
//       "Password must be at least 11 characters and contain letters and numbers";
//   } else {
//     let user = dataUser.find((userData) => userData.name === username);
//     if (user && user.password === password) {
//       console.log("Login successful");
//       window.location.href = "index.html";
//     } else {
//       document.getElementById("validation-password").textContent =
//         "Incorrect password";
//     }
//   }
// });

// // دالة للتحقق من صحة البريد الإلكتروني
// function validateEmail(email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

















let dataUser = JSON.parse(localStorage.getItem("userData")) || [];
let loginForm = document.querySelector(".login-form");


document
  .getElementById("login-form-username")
  .addEventListener("input", function () {
    let username = document.getElementById("login-form-username").value.trim();
    let usernameExists = dataUser.some(
      (userData) => userData.name === username
    );

    if (username === "") {
      document.getElementById("validation-username").textContent =
        "Please enter a username";
    } else if (!/^[A-Z][a-zA-Z0-9]+$/.test(username)) {
      document.getElementById("validation-username").textContent =
        "Please enter a valid username starting with a capital letter";
    } else if (!usernameExists) {
      document.getElementById("validation-username").textContent =
        "Username not found";
    } else {
      document.getElementById("validation-username").textContent = "";
      // localStorage.setItem("NameUser", username.value);
    }
  });

document
  .getElementById("register-form-email")
  .addEventListener("input", function () {
    let email = document.getElementById("register-form-email").value.trim();

    if (email === "") {
      document.getElementById("validation-email").textContent =
        "Please enter an email address";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail.com$/.test(email)) {
      document.getElementById("validation-email").textContent =
        "Please enter a valid Gmail address";
    } else if (!validateEmail(email)) {
      document.getElementById("validation-email").textContent =
        "Please enter a valid email address";
    } else {
      document.getElementById("validation-email").textContent = "";
    }
  });

document
  .getElementById("login-form-password")
  .addEventListener("input", function () {
    let password = document.getElementById("login-form-password").value.trim();

    if (password === "") {
      document.getElementById("validation-password").textContent =
        "Please enter a password";
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{11,}$/.test(password)) {
      document.getElementById("validation-password").textContent =
        "Password must be at least 11 characters and contain letters and numbers";
    } else {
      document.getElementById("validation-password").textContent = "";
    }
  });


loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("login-form-username").value.trim();
  let email = document.getElementById("register-form-email").value.trim();
  let password = document.getElementById("login-form-password").value.trim();

  let usernameExists = dataUser.some((userData) => userData.name === username);
  let emailExists = dataUser.some((userData) => userData.email === email);

  document.querySelectorAll(".validation").forEach(function (validation) {
    validation.textContent = ""; 
  });

 
  if (username === "") {
    document.getElementById("validation-username").textContent =
      "Please enter a username";
  } else if (!/^[A-Z][a-zA-Z0-9]+$/.test(username)) {
    document.getElementById("validation-username").textContent =
      "Please enter a valid username starting with a capital letter";
  } else if (!usernameExists) {
    document.getElementById("validation-username").textContent =
      "Username not found";
  }

 
  if (email === "") {
    document.getElementById("validation-email").textContent =
      "Please enter an email address";
  } else if (!/^[a-zA-Z0-9._%+-]+@gmail.com$/.test(email)) {
    document.getElementById("validation-email").textContent =
      "Please enter a valid Gmail address";
  } else if (!validateEmail(email)) {
    document.getElementById("validation-email").textContent =
      "Please enter a valid email address";
  } else if (!emailExists) {
    document.getElementById("validation-email").textContent = "Email not found";
  }

 
  if (password === "") {
    document.getElementById("validation-password").textContent =
      "Please enter a password";
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{11,}$/.test(password)) {
    document.getElementById("validation-password").textContent =
      "Password must be at least 11 characters and contain letters and numbers";
  } else {
    let user = dataUser.find((userData) => userData.name === username);
    if (user && user.password === password) {
      console.log("Login successful");

     
      localStorage.setItem("nameUser", username);
      
      window.location.href = "index.html";
      clearInputs();
    } else {
      document.getElementById("validation-password").textContent =
        "Incorrect password";
    }
  }
});


function clearInputs() {
  document.getElementById("login-form-username").value = "";
  document.getElementById("register-form-email").value = "";
  document.getElementById("login-form-password").value = "";
}


function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
