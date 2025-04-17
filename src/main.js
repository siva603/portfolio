

    



        // JSON data with lines to type

        const typingData = {
            "line1": "Hi There! I’m Sivaprasad.",
            "line2": "Aspiring Full-Stack Java Developer.",
            "line3": "Turning Ideas into Powerful Java Applications Passionate Coder.",
            "line4": "Writing Code, Building Solutions, Creating Impact.",
        };

        // Configuration
        const config = {
            typingSpeed: 50,
            eraseSpeed: 30,
            delayBeforeErasing: 2000,
            delayBetweenLines: 1000
        };

 // Get DOM element and convert data to array
 const textElement = document.getElementById('typing-text');
 const lines = Object.values(typingData);
 console.log(lines)
 let currentLineIndex = 0;

 // Main function to handle the typing animation cycle
 function animateTyping() {
     // Set the appropriate style
     textElement.className = 'typing-text ' + 
         (currentLineIndex % 2 === 0 ? 'style-1' : 'style-2');
     
     // Get current line text
     const currentText = lines[currentLineIndex];
     
     // Type the current line
     typeText(currentText, 0);
 }

 // Function to type text character by character
 function typeText(text, index) {
     if (index <= text.length) {
         textElement.textContent = text.substring(0, index);
         
         if (index === text.length) {
             // Add cursor when typing is complete
             const cursor = document.createElement('span');
             cursor.className = 'cursor';
             textElement.appendChild(cursor);
             
             // Wait before erasing
             setTimeout(() => {
                 eraseText(text, text.length);
             }, config.delayBeforeErasing);
         } else {
             // Continue typing
             setTimeout(() => {
                 typeText(text, index + 1);
             }, config.typingSpeed);
         }
     }
 }

 // Function to erase text character by character
 function eraseText(text, index) {
     if (index > 0) {
         textElement.textContent = text.substring(0, index - 1);
         setTimeout(() => {
             eraseText(text, index - 1);
         }, config.eraseSpeed);
     } else {
         // Move to next line
         currentLineIndex = (currentLineIndex + 1) % lines.length;
         
         // Wait before typing next line
         setTimeout(animateTyping, config.delayBetweenLines);
     }
 }

 // Start the animation when page loads
 window.addEventListener('DOMContentLoaded',animateTyping);

 let year = document.getElementById("year");
        let currentYear = new Date().getFullYear();
        year.innerText=currentYear;


 fetch("./src/data.json")
   .then(response => response.json())
   .then(data => {
    console.log(data)
     initialize(data); // here you need initialize everthing now
   });
 
function initialize(data){
    for(let d in data){
        if(d == "home"){
            console.log(data[d])
        }
    }
}
