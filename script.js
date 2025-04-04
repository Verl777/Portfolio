document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.createElement("button");
    menuToggle.textContent = "☰ Menu";
    menuToggle.id = "menuToggle";
    menuToggle.style.display = "none";
    document.body.insertBefore(menuToggle, document.body.firstChild);

    const nav = document.createElement("nav");
    nav.innerHTML = `
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    `;
    document.body.insertBefore(nav, document.body.children[1]);

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("active");
    });

    function adjustMenu() {
        if (window.innerWidth < 768) {
            menuToggle.style.display = "block";
            nav.style.display = "none";
        } else {
            menuToggle.style.display = "none";
            nav.style.display = "block";
        }
    }

    window.addEventListener("resize", adjustMenu);
    adjustMenu();
});
