const title = document.getElementById("title");
const description = document.getElementById("description");
const body = document.querySelector("body");

// To update the title
const setTitle = (newTitle) => {
title.textContent = newTitle;
};

// To update the description
const setDescription = (newDescription) => {
description.textContent = newDescription;
};

// To set the background color
const setBackgroundColor = (newBackgroundColor) => {
body.style.backgroundColor = newBackgroundColor;
};
// To set the theme
const setTheme = (theme) => {
    if (theme === "dark") {
    body.style.backgroundColor = "black"
    body.style.color = "white"
    } else {
    body.style.backgroundColor = "white"
    body.style.color = "black"
    }
    };
    
    