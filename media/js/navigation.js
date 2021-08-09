const navigation = document.getElementsByClassName("navigation")[0];
const navigationLinks = navigation.getElementsByClassName("navigation__link");
const navigationCheckbox = document.getElementById("Navigation");

for (let navigationLink of navigationLinks) {
    navigationLink.addEventListener("click", () => {
        navigationCheckbox.checked = false;
    });
}