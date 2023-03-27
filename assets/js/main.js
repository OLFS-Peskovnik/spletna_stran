var open = false;

function hamburgerMenu() {
    var menu_entries = document.getElementsByClassName("mobile-hide");
    for (let i = 0; i < menu_entries.length; i++) {
        if (open) {
            menu_entries[i].style.display = "none";
            try {
                document.getElementsByClassName("gradient")[0].style.top = "11.3rem";
            } catch {

            }
        } else {
            menu_entries[i].style.display = "block";
            try {
                document.getElementsByClassName("gradient")[0].style.top = "26.3rem";
            } catch {
                
            }
        }
    }
    open = !open;
  }