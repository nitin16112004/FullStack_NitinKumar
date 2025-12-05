
const modal = document.querySelector(".modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

const lazyImages = document.querySelectorAll(".lazy");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
        }
    });
});

lazyImages.forEach(img => observer.observe(img));


document.querySelector(".gallery").addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        modal.style.display = "flex";
        modalImg.src = e.target.src;
    }
});


closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};
