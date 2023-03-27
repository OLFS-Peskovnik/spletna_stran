function hamburgerMenu() {
    var menu_entries = document.getElementsByClassName("mobile-hide");
    for (let i = 0; i < menu_entries.length; i++) {
        if (menu_entries[i].style.display === "block") {
            menu_entries[i].style.display = "none";
            document.getElementsByClassName("gradient")[0].style.top = "11.3rem";
        } else {
            menu_entries[i].style.display = "block";
            document.getElementsByClassName("gradient")[0].style.top = "26.3rem";
        }
    }
  }