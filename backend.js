
// function initializeApp() {

//     const firebaseConfig = {
//         apiKey: "AIzaSyBgeG3KjxSgVXMswB5ZT6Ets75Avgy0I_c",
//         authDomain: "rays-graphix-f0c7b.firebaseapp.com",
//         databaseURL: "https://rays-graphix-f0c7b-default-rtdb.firebaseio.com",
//         projectId: "rays-graphix-f0c7b",
//         storageBucket: "rays-graphix-f0c7b.appspot.com",
//         messagingSenderId: "391625780481",
//         appId: "1:391625780481:web:6b7b4dfa126feb5b2cbf00",
//         measurementId: "G-YW271CBQDY"
//       };
    
    
//     firebase.initializeApp(firebaseConfig);
//     firebase.analytics();
//     const firestore= firebase.firestore()
    
//     // Listen for form submit
//     const form= document.getElementById('contactForm');
//     form.addEventListener('submit', submitForm);
//     const db = firestore.collection("ContactFormData");
    
//     // Submit form
//     function submitForm(e){
//         e.preventDefault();
    
//         //Get value
//         var name = getInputVal('name');
//         var company = getInputVal('company');
//         var email = getInputVal('email');
//         var phone = getInputVal('phone')
//         var message = getInputVal('message');
    
//         // Save message
//         saveMessage(name, company, email, phone, message);
    
    
//         // Show alert
//         document.querySelector('.alert').style.display = 'block';
    
//         // Hide alert after 3 seconds
//         setTimeout(function(){
//             document.querySelector('.alert').style.display = 'none';
//         },3000);
    
//         // Clear form
//         document.getElementById('contactForm').reset();
//     }
    
//     // Function to get form value
//     function getInputVal(id){
//         return document.getElementById(id).value;
//     }
    
    
//     // Save message to firebase
//     const saveMessage= function(name, company, email, phone, message){
//         firestore.collection("ContactFormData").add({
//             name,
//             company,
//             email,
//             phone,
//             message
//         })
//     }
//     }

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) {// show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")){
        backToTopButton.classList.remove("btnExit");
        backToTopButton.classList.add("btnEntrance");
        backToTopButton.style.display = "block";
    }
    
    }
    else {// Hide backToTopButton
        if(backToTopButton.classList.contains("btnEntrance")){
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function(){
                backToTopButton.style.display = "none";
            }, 250);
            
        }
   
    }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop );

// function backToTop() {
//     window.scrollTo(0,0);
// }

function smoothScrollBackToTop() {
    const targetPosition =0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) +b;
};