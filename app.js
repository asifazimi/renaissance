/**
 * Website Name: Renaissance
 * Website URL: https://www.renaissance.com
 * Author: asifazimi
 * Date Created: 1 / 12 / 2022
 */

// ***** Selectors *******
const barBtn = document.querySelector(".icon-bar");
const closeBtn = document.querySelector(".icon-close");
const header = document.querySelector(".main-header");
const navbar = document.querySelector(".navbar");
const linkDropdown = document.querySelectorAll(".link-dropdown");
const linkTop = document.querySelector(".link-top");
const date = document.getElementById("date");
const btns = document.querySelectorAll(".btn-toggle");
const items = document.querySelectorAll(".item");

// set date
date.innerHTML = new Date().getFullYear();

// *********** EVENTLISTEENER ************

// Navbar Toggle
barBtn.addEventListener("click", () => {
  const showNav = navbar.classList.add("show-navbar");
  barBtn.style.display = "none";
  closeBtn.style.display = "inline";
  document.body.style.backgroundColor = "#9fa0a1";
  header.style.backgroundColor = "#20232a";
  linkTop.classList.remove("show-link");
});

closeBtn.addEventListener("click", () => {
  navbar.classList.remove("show-navbar");
  barBtn.style.display = "inline";
  closeBtn.style.display = "none";
  document.body.style.backgroundColor = "#ffffff";
  header.style.backgroundColor = "#002240";
  const scrollY = window.pageYOffset;
  if (scrollY > 200) {
    linkTop.classList.add("show-link");
  } else {
    linkTop.classList.remove("show-link");
  }
});

// Submenu
// for (let i = 0; i < linkDropdown.length; i++) {
//   linkDropdown[i].addEventListener("click", (e) => {
//     e.preventDefault();
//     let subMenu = e.currentTarget.children[3];
//     let plus = e.currentTarget.children[1].children[0];
//     let minus = e.currentTarget.children[1].children[1];
//     subMenu.classList.toggle("showMenu");
//     plus.classList.toggle("remove-plus");
//     minus.classList.toggle("show-minus");

//     // remove when on the window click
//   });
// }

// fixed arrow link
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  if (scrollY > 200) {
    linkTop.classList.add("show-link");
  } else {
    linkTop.classList.remove("show-link");
  }
});

// **** FAQ Section ****
items.forEach((item) => {
  const btn = item.querySelector(".btn-toggle");
  btn.addEventListener("click", () => {
    item.classList.toggle("show-answer");

    items.forEach((answer) => {
      if (answer !== item) {
        answer.classList.remove("show-answer");
      }
    });
  });
});

// **** Pagination   ****
// selecting required element
// const element = document.querySelector(".pagination ul");
// let totalPages = 20;
// let page = 10;

// //calling function with passing parameters and adding inside element which is ul tag
// element.innerHTML = createPagination(totalPages, page);
// function createPagination(totalPages, page) {
//   let liTag = "";
//   let active;
//   let beforePage = page - 1;
//   let afterPage = page + 1;
//   if (page > 1) {
//     //show the next button if the page value is greater than 1
//     liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${
//       page - 1
//     })"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
//   }

//   if (page > 2) {
//     //if page value is less than 2 then add 1 after the previous button
//     liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
//     if (page > 3) {
//       //if page value is greater than 3 then add this (...) after the first li or page
//       liTag += `<li class="dots"><span>...</span></li>`;
//     }
//   }

//   // how many pages or li show before the current li
//   if (page == totalPages) {
//     beforePage = beforePage - 2;
//   } else if (page == totalPages - 1) {
//     beforePage = beforePage - 1;
//   }
//   // how many pages or li show after the current li
//   if (page == 1) {
//     afterPage = afterPage + 2;
//   } else if (page == 2) {
//     afterPage = afterPage + 1;
//   }

//   for (var plength = beforePage; plength <= afterPage; plength++) {
//     if (plength > totalPages) {
//       //if plength is greater than totalPage length then continue
//       continue;
//     }
//     if (plength == 0) {
//       //if plength is 0 than add +1 in plength value
//       plength = plength + 1;
//     }
//     if (page == plength) {
//       //if page is equal to plength than assign active string in the active variable
//       active = "active";
//     } else {
//       //else leave empty to the active variable
//       active = "";
//     }
//     liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
//   }

//   if (page < totalPages - 1) {
//     //if page value is less than totalPage value by -1 then show the last li or page
//     if (page < totalPages - 2) {
//       //if page value is less than totalPage value by -2 then add this (...) before the last li or page
//       liTag += `<li class="dots"><span>...</span></li>`;
//     }
//     liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
//   }

//   if (page < totalPages) {
//     //show the next button if the page value is less than totalPage(20)
//     liTag += `<li class="btn next" onclick="createPagination(totalPages, ${
//       page + 1
//     })"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
//   }
//   element.innerHTML = liTag; //add li tag inside ul tag
//   return liTag; //reurn the li tag
// }
