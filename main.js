const resume_sections = document.querySelectorAll('section.edu,section.experience,section.skill');
const main_sections = document.querySelectorAll("#home-section,section.about-me,section.resume-con,section.projects,section.contact")
const resume_nav = document.querySelectorAll(".resume-sidebar ul li a");
const main_nav = document.querySelectorAll("nav ul li a");



window.addEventListener('scroll', () => {

    let current = '';
    main_sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight
        if (pageYOffset >= (sectionTop - sectionHeight / 8)) {
            current = section.getAttribute('id')
        }
    })
    main_nav.forEach(li => {
        li.classList.remove("nav-active")
        if (li.classList.contains(current))
            li.classList.add("nav-active")
    })






    resume_sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight
        if (pageYOffset >= (sectionTop - sectionHeight/2)) {
            current = section.getAttribute('id')
        }
    })
    resume_nav.forEach(li => {
        li.classList.remove("resume-sidebar-active")
        if (li.classList.contains(current))
            li.classList.add("resume-sidebar-active")
    })
})





function sendEmail() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let content = document.getElementById("message").value
    Email.send({
        SecureToken: "350e284e-253a-4257-97c3-2f0f88f40b26",
        To: 'abdul15-2992@diu.edu.bd',
        From: "parvezsean35@gmail.com",
        Subject: "Email From Portfolio",
        Body: "Name: "+name+"<br>"+
                "Email: "+email+"<br>"+
                "Subject: "+subject+"<br> <br>"+
                content
    }).then(
        message => {
            document.getElementById("name").value=null
            document.getElementById("email").value=null
            document.getElementById("subject").value=null
            document.getElementById("message").value=null
            if (message === "OK") {
                alert("Your Message has been send successfully")
                
            }
            else {
                alert(message)
                
            }
        }

    );
}
window.addEventListener("scroll",reveal);
function reveal(){
    let elements=document.querySelectorAll(".reveal")
    for(let i=0;i<elements.length;i++){
        let windowH=window.innerHeight
        let revealtop=elements[i].getBoundingClientRect().top
        let revealpoint=150
        if(revealtop<windowH-revealpoint){
            elements[i].classList.add("reveal-active")
        }
        else{
            elements[i].classList.remove("reveal-active")
        }
    }

}