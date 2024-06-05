// Typing Animation
var typed = new Typed('.typing', {
    strings: ['', 'Web Designer', 'Web Developer', 'Graphic Designer', 'YouTuber', 'Blogger'],
    typeSpeed: 200,
    backSpeed: 60,
    loop: true
});





document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('.nav a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Download CV

function downloadCV() {
    // Replace 'path/to/your-cv-file.pdf' with the actual path to your CV file on your server
    var cvUrl = "documents/EMMANUEL ONJORO - CV.pdf";
    var link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'EMMANUEL ONJORO - CV.pdf'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

// Portfolio Section Model
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick){
    portfolioModals[modalClick].classList.add("active");
}


imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active")
        });
    });
});



// Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// Email functionality

function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    const serviceID = "service_c6ks8m6";
    const templateID = "template_ytes504";

    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('subject').value = "";
            document.getElementById('message').value = "";
            console.log(res);
            alert("Thank you for contacting us");
        }
    )
    .catch((err) => console.log(err));
}

