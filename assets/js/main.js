function hamburgerMenu() {
    var menu_entries = document.getElementsByClassName("mobile-hide");
    for (let i = 0; i < menu_entries.length; i++) {
        if (menu_entries[i].style.display === "block") {
            menu_entries[i].style.display = "none";
        } else {
            menu_entries[i].style.display = "block";;
        }
    }
  }