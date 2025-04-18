/*=============== EMAIL JS ===============*/
function showConfirmation(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;

    // Store the original form HTML
    var originalFormHTML = `
        <form action="" class="contact__form grid" id="contact-form" onsubmit="return showConfirmation(event)">
            <div class="contact__group grid">
                <input type="text" name="user_name" id="name" placeholder="Name" required class="contact__input">
                <input type="email" name="user_email" id="email" placeholder="Email" required class="contact__input">
            </div>

            <textarea name="user_message" id="message" placeholder="Message" class="contact__input contact-area" required></textarea>

            <button type="submit" class="button contact__button">Send Message</button>
            <p class="contact__message" id="contact-message"></p>
        </form>
    `;

    // Hide the form and show the confirmation message
    document.querySelector('.contact__container').innerHTML = `
        <div class="confirmation-message">
            <p>Thank you, <strong>${name}</strong> for reaching out. We’ll get back to you soon!</p>
        </div>
    `;

    // Show the form again after 3 seconds
    setTimeout(function() {
        document.querySelector('.contact__container').innerHTML = originalFormHTML; 
    }, 4000); 

    return false;
}

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true, //animations repeat
})

sr.reveal(`.profile, .contact__form`)
sr.reveal(`.info`, {origin: 'left', delay: 800})
sr.reveal(`.skills`, {origin: 'left', delay: 1000})
sr.reveal(`.about`, {origin: 'right', delay: 1200})
sr.reveal(`.projects__card, .activities__card, .education__card`, {interval: 100})


