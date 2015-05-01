function preventDefault() {
    if(event.keyCode == 13) {
        event.preventDefault();
        return false;
    }
}
    
function filterLanguages(el, event) {

    var searchText = event.srcElement ? event.srcElement.value.toLowerCase() : event.target.value.toLowerCase();

    var languages = scForm.browser.getControl("Languages");
    var menuItems = languages.getElementsByClassName("scMenuPanelItem");
    var selectedMenuItems = languages.getElementsByClassName("scMenuPanelItemSelected");

    if (!searchText) {
        clearFilters(menuItems);
        clearFilters(selectedMenuItems);
        return;
    }

    filter(menuItems, searchText);
    filter(selectedMenuItems, searchText);
}


function filter(items, searchText) {
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";

        if (items[i].innerHTML.toLowerCase().indexOf(searchText) > -1) {
            items[i].style.display = "block";
        }
    }
}

function clearFilters(items) {
    items.each(function() {
        this.style.display = "block";
    });
}