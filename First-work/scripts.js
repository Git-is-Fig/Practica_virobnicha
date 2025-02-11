function toggleContent() {
    let button = document.getElementById("LearnMore");
    let contentArea = document.getElementById("content-area");

    if (contentArea.style.display === "none" || contentArea.style.display === "") {
        contentArea.style.display = "block";
        setTimeout(function() {
            contentArea.style.opacity = 1;
            contentArea.style.transform = "translateY(0)";
        }, 10);
        button.classList.add("move-down");
        button.style.backgroundColor = "transparent";
        button.style.color = "black";
        button.innerText = "Hide Content";
    } else {
        contentArea.style.opacity = 0;
        contentArea.style.transform = "translateY(-20px)";
        setTimeout(function() {
            contentArea.style.display = "none";
        }, 500);
        button.classList.remove("move-down");
        button.style.backgroundColor = "blue";
        button.style.color = "ivory";
        button.innerText = "Learn More";
    }
}

function toggleText(button) {
    let textContainer = button.previousElementSibling;
    
    if (textContainer.classList.contains("expanded")) {
        textContainer.classList.remove("expanded");
        button.innerText = "Read More";
    } else {
        textContainer.classList.add("expanded");
        button.innerText = "Read Less";
    }
}

function showPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("show");
}

function closePopup() {
    let popup = document.getElementById("popup");
    popup.classList.remove("show");
}

 const currentPage = window.location.pathname.split("/").pop();

 function setActiveLink() {
     const links = document.querySelectorAll(".navigation a");

     links.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
     });
}

window.onload = setActiveLink;