// Ioannis Kalaitzidis, 2120067, Thesis

/*Light/Dark mode---------------------------------------------------------------------------------------------------------------------------------*/

// Λαμβάνει τις εικόνες που αλλάζουν ανάλογα με το mode (light/dark)
var icon = document.getElementById("icon"); 
var uni_logo = document.getElementById("uni_logo"); 
var quiz_logo = document.getElementById("quiz_logo"); 
var github_logo = document.getElementById("github_logo"); 

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");                                                   // Εναλλάσσει το θέμα της σελίδας (dark/light) προσθέτοντας/αφαιρώντας την κλάση "dark-theme" στο body

    // Scrollbar αλλαγές ανάλογα με το theme
    if (document.body.classList.contains("dark-theme")) {
        document.documentElement.style.setProperty('--scrollbar-thumb-color', '#2bc7d5'); 
        document.documentElement.style.setProperty('--scrollbar-track-color', 'rgb(5, 14, 43)'); 
    } else {                                                                                        // Επαναφορά στο αρχικό mode (light)
        document.documentElement.style.setProperty('--scrollbar-thumb-color', '#42602e'); 
        document.documentElement.style.setProperty('--scrollbar-track-color', '#99BC85'); 
    }

    // Αλλάζει τα εικονίδια ανάλογα με το theme
    if (document.body.classList.contains("dark-theme")) {
    icon.src = "./Images/sun.png";
    uni_logo.src = "./Images/uth_logo.png";
    quiz_logo.src = "./Images/quiz-logo2.png";
    github_logo.src = "./Images/Github2.png";
    } else {
        icon.src = "./Images/moon.png";
        uni_logo.src = "./Images/uth_logo_original.png";
        quiz_logo.src = "./Images/quiz-logo1.png";
        github_logo.src = "./Images/Github.png";
    }
}

/*Εφέ κινούμενης πρότασης-------------------------------------------------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function() {
    const codeLearning = document.getElementById("moving-sentence");                                // Λαμβάνει το στοιχείο με το ID "moving-sentence"
    const text = " Μάθε Python στα ελληνικά!";                                                      // Το κείμενο που θα εμφανιστεί σταδιακά
    let index = 0;                                                                                  // Δείκτης που χρησιμοποιείται για την εμφάνιση του κειμένου χαρακτήρα προς χαρακτήρα

    function showText() {
        if (index < text.length) {
            codeLearning.innerHTML += text.charAt(index);                                           // Προσθέτει τον επόμενο χαρακτήρα του κειμένου στο στοιχείο
            index++;                                                                                // Αυξάνει τον δείκτη για να περάσει στον επόμενο χαρακτήρα
            setTimeout(showText, 160);                                                              // Αναβάλλει την εμφάνιση του επόμενου χαρακτήρα για 160ms
        }
    }

    showText();                                                                                     // Καλεί τη συνάρτηση showText για να ξεκινήσει η εμφάνιση του κειμένου χαρακτήρα προς χαρακτήρα
});

/*Εφέ επιλογής κουμπιών στα menus επιλογών--------------------------------------------------------------------------------------------------------*/

// Για το πρώτο menu επιλογών
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".navigation1 button");                               // Επιλέγει όλα τα κουμπιά μέσα στο navigation1

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            buttons.forEach(btn => btn.classList.remove("selected"));                               // Αφαιρεί την κλάση 'selected' από όλα τα κουμπιά
            this.classList.add("selected");                                                         // Προσθέτει την κλάση 'selected' στο κουμπί που πατήθηκε
        });
    });
});

// Για το δεύτερο menu επιλογών
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".navigation2 button");                               // Επιλέγει όλα τα κουμπιά μέσα στο navigation2

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            buttons.forEach(btn => btn.classList.remove("selected"));                               // Αφαιρεί την κλάση 'selected' από όλα τα κουμπιά
            this.classList.add("selected");                                                         // Προσθέτει την κλάση 'selected' στο κουμπί που πατήθηκε
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#intro-button").click();                                                // Η ενότητα intro εμφανίζεται από προεπιλογή με επιλεγμένο το κουμπί "Αρχική"
});

/*Λειτουργικότητα εμφάνισης περιεχομένου ανάλογα με την επιλογή του κουμπιού από τα menus επιλογών------------------------------------------------*/

// Όταν επιλέγεται το κουμπί "Αρχική"
let a = document.querySelector("#intro-button");                                                    // Εντοπίζει το κουμπί με το ID "intro-button"
a.addEventListener('click', () => {
    // Εμφανίζει την ενότητα "intro" και κρύβει τις υπόλοιπες
    document.querySelector('#intro').classList.remove('hidden');                                    // Αφαιρεί την κλάση 'hidden' από το στοιχείο "intro"
    document.querySelector('#intro').classList.add('visible');                                      // Προσθέτει την κλάση 'visible' για να εμφανιστεί το στοιχείο "intro"

    document.querySelector('#game').classList.remove('visible');
    document.querySelector('#game').classList.add('hidden');                                        // Κρύβει το στοιχείο "game"
    
    document.querySelector('#links').classList.remove('visible');
    document.querySelector('#links').classList.add('hidden');                                       // Κρύβει το στοιχείο "links"
    
    document.querySelector('#introduction').classList.remove('visible');
    document.querySelector('#introduction').classList.add('hidden');                                // Κρύβει το στοιχείο "introduction"
    
    document.querySelector('#data-types-operators').classList.remove('visible');
    document.querySelector('#data-types-operators').classList.add('hidden');                        // Κρύβει το στοιχείο "data-types-operators"
    
    document.querySelector('#arithmetic-logical-operations').classList.remove('visible');
    document.querySelector('#arithmetic-logical-operations').classList.add('hidden');               // Κρύβει το στοιχείο "arithmetic-logical-operations"
    
    document.querySelector('#variables').classList.remove('visible');
    document.querySelector('#variables').classList.add('hidden');                                   // Κρύβει το στοιχείο "variables"
    
    document.querySelector('#comments').classList.remove('visible');
    document.querySelector('#comments').classList.add('hidden');                                    // Κρύβει το στοιχείο "comments"
    
    document.querySelector('#built-in-functions').classList.remove('visible');
    document.querySelector('#built-in-functions').classList.add('hidden');                          // Κρύβει το στοιχείο "built-in-functions"
    
    document.querySelector('#basic-commands').classList.remove('visible');
    document.querySelector('#basic-commands').classList.add('hidden');                              // Κρύβει το στοιχείο "basic-commands"
    
    document.querySelector('#libraries').classList.remove('visible');
    document.querySelector('#libraries').classList.add('hidden');                                   // Κρύβει το στοιχείο "libraries"
    
    document.querySelector('#control-flow').classList.remove('visible');
    document.querySelector('#control-flow').classList.add('hidden');                                // Κρύβει το στοιχείο "control-flow"
    
    document.querySelector('#functions').classList.remove('visible');
    document.querySelector('#functions').classList.add('hidden');                                   // Κρύβει το στοιχείο "functions"

    document.querySelector('#list').classList.remove('visible');
    document.querySelector('#list').classList.add('hidden');                                        // Κρύβει το στοιχείο "list"

    document.querySelector('.navigation2').classList.remove('visible');
    document.querySelector('.navigation2').classList.add('hidden');                                 // Κρύβει το στοιχείο με την κλάση "navigation2"

    document.querySelector('#examples').classList.remove('visible');
    document.querySelector('#examples').classList.add('hidden');                                    // Κρύβει το στοιχείο "examples"

    document.querySelector('#examples').classList.remove('visible');
    document.querySelector('#examples').classList.add('hidden');                                    // Κρύβει το στοιχείο "examples"

    document.getElementById('AccountForm').style.display = 'none'; 
    document.getElementById('LoginForm').style.display = 'none';
});

// Όταν επιλέγεται το κουμπί "Ενότητες"
let b = document.querySelector("#units-button");                                                    // Εντοπίζει το κουμπί με το ID "units-button"
b.addEventListener('click', () => {
    document.querySelector('#intro').classList.remove('visible');
    document.querySelector('#intro').classList.add('hidden');                                       // Κρύβει την ενότητα "intro"

    document.querySelector('#game').classList.remove('visible');
    document.querySelector('#game').classList.add('hidden');                                        // Κρύβει την ενότητα "game"

    document.querySelector('#links').classList.remove('visible');
    document.querySelector('#links').classList.add('hidden');                                       // Κρύβει την ενότητα "links"

    document.getElementById('AccountForm').style.display = 'none'; 
    document.getElementById('LoginForm').style.display = 'none';

    let unitsSection = document.querySelector('#units');
    unitsSection.classList.remove('hidden');
    unitsSection.classList.add('visible');                                                          // Κάνει την ενότητα "units" ορατή

    // Εμφανίζουμε το δεύτερο menu
    let navigation2 = document.querySelector('.navigation2');
    navigation2.classList.remove('hidden');
    navigation2.classList.add('visible');                                                           // Κάνει το μενού "navigation2" ορατό

    let e = document.querySelector("#introduction-button");                                         // Εντοπίζει το κουμπί με το ID "introduction-button"
    e.addEventListener('click', () => {
        document.querySelector('#introduction').classList.remove('hidden');
        document.querySelector('#introduction').classList.add('visible');                           // Κάνει την ενότητα "introduction" ορατή

        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden');                                   // Κρύβει την ενότητα "intro"
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden');                                    // Κρύβει την ενότητα "game"
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden');                                   // Κρύβει την ενότητα "links"
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden');                    // Κρύβει την ενότητα "data-types-operators"
        
        document.querySelector('#arithmetic-logical-operations').classList.remove('visible');
        document.querySelector('#arithmetic-logical-operations').classList.add('hidden');           // Κρύβει την ενότητα "arithmetic-logical-operations"
        
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden');                               // Κρύβει την ενότητα "variables"
        
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden');                                // Κρύβει την ενότητα "comments"
        
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden');                      // Κρύβει την ενότητα "built-in-functions"
        
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden');                          // Κρύβει την ενότητα "basic-commands"
        
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden');                               // Κρύβει την ενότητα "libraries"
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden');                            // Κρύβει την ενότητα "control-flow"
        
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden');                               // Κρύβει την ενότητα "functions"

        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden');                                    // Κρύβει την ενότητα "list"

        document.querySelector('#examples').classList.remove('visible');
        document.querySelector('#examples').classList.add('hidden');                                // Κρύβει την ενότητα "examples"
    });

    let f = document.querySelector("#data-types-operators-button");                                 // Εντοπίζει το κουμπί με το ID "data-types-operators-button"
    f.addEventListener('click', () => {
        document.querySelector('#data-types-operators').classList.remove('hidden');
        document.querySelector('#data-types-operators').classList.add('visible');                   // Κάνει την ενότητα "data-types-operators" ορατή

        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden');                                   // Κρύβει την ενότητα "intro"
    
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden');                                    // Κρύβει την ενότητα "game"
    
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden');                                   // Κρύβει την ενότητα "links"
    
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden');                            // Κρύβει την ενότητα "introduction"
    
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden');           // Κρύβει την ενότητα "arithmetic-logical-operations"
    
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden');                               // Κρύβει την ενότητα "variables"
    
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden');                                // Κρύβει την ενότητα "comments"
    
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden');                      // Κρύβει την ενότητα "built-in-functions"
    
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden');                          // Κρύβει την ενότητα "basic-commands"
    
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden');                               // Κρύβει την ενότητα "libraries"
    
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden');                            // Κρύβει την ενότητα "control-flow"
    
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden');                               // Κρύβει την ενότητα "functions"
    
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden');                                    // Κρύβει την ενότητα "list"
    
        document.querySelector('#examples').classList.remove('visible');
        document.querySelector('#examples').classList.add('hidden');                                // Κρύβει την ενότητα "examples"
    });    

    let g = document.querySelector("#arithmetic-logical-operations-button");                        // Εντοπίζει το κουμπί με το ID "arithmetic-logical-operations-button"
    g.addEventListener('click', () => {
        document.querySelector("#arithmetic-logical-operations").classList.remove('hidden');
        document.querySelector("#arithmetic-logical-operations").classList.add('visible');          // Κάνει την ενότητα "arithmetic-logical-operations" ορατή

        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden');                                   // Κρύβει την ενότητα "intro"
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden');                                    // Κρύβει την ενότητα "game"
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden');                                   // Κρύβει την ενότητα "links"
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden');                            // Κρύβει την ενότητα "introduction"
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden');                    // Κρύβει την ενότητα "data-types-operators"
        
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden');                               // Κρύβει την ενότητα "variables"
        
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden');                                // Κρύβει την ενότητα "comments"
        
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden');                      // Κρύβει την ενότητα "built-in-functions"
        
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden');                          // Κρύβει την ενότητα "basic-commands"
        
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden');                               // Κρύβει την ενότητα "libraries"
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden');                            // Κρύβει την ενότητα "control-flow"
        
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden');                               // Κρύβει την ενότητα "functions"
        
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden');                                    // Κρύβει την ενότητα "list"

        document.querySelector('#examples').classList.remove('visible');
        document.querySelector('#examples').classList.add('hidden');                                // Κρύβει την ενότητα "examples"
    });

    let h = document.querySelector("#variables-button");                                            // Εντοπίζει το κουμπί με το ID "variables-button"
    h.addEventListener('click', () => {
        document.querySelector('#variables').classList.remove('hidden');
        document.querySelector('#variables').classList.add('visible');                              // Κάνει την ενότητα "variables" ορατή

        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden');                                   // Κρύβει την ενότητα "intro"
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden');                                    // Κρύβει την ενότητα "game"
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden');                                   // Κρύβει την ενότητα "links"
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden');                            // Κρύβει την ενότητα "introduction"
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden');                    // Κρύβει την ενότητα "data-types-operators"
        
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden');           // Κρύβει την ενότητα "arithmetic-logical-operations"
         
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden');                                // Κρύβει την ενότητα "comments"
        
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden');                      // Κρύβει την ενότητα "built-in-functions"
        
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden');                          // Κρύβει την ενότητα "basic-commands"
        
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden');                               // Κρύβει την ενότητα "libraries"
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden');                            // Κρύβει την ενότητα "control-flow"
        
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden');                               // Κρύβει την ενότητα "functions"
        
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden');                                    // Κρύβει την ενότητα "list"

        document.querySelector('#examples').classList.remove('visible');
        document.querySelector('#examples').classList.add('hidden');                                // Κρύβει την ενότητα "examples"
    });

    let i = document.querySelector("#basic-commands-button");                                       // Εντοπίζει το κουμπί με το ID "basic-commands-button"
    i.addEventListener('click', () => {
        document.querySelector('#basic-commands').classList.remove('hidden');
        document.querySelector('#basic-commands').classList.add('visible');                         // Κάνει την ενότητα "basic-commands" ορατή

        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden');                                   // Κρύβει την ενότητα "intro"
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden');                                    // Κρύβει την ενότητα "game"
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden');                                   // Κρύβει την ενότητα "links"
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden');                            // Κρύβει την ενότητα "introduction"
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden');                    // Κρύβει την ενότητα "data-types-operators"
        
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden');           // Κρύβει την ενότητα "arithmetic-logical-operations"
        
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden');                               // Κρύβει την ενότητα "variables"
        
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden');                                // Κρύβει την ενότητα "comments"
        
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden');                      // Κρύβει την ενότητα "built-in-functions"
        
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden');                               // Κρύβει την ενότητα "libraries"
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden');                            // Κρύβει την ενότητα "control-flow"
        
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden');                               // Κρύβει την ενότητα "functions"
        
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden');                                    // Κρύβει την ενότητα "list"
    
        document.querySelector('#examples').classList.remove('visible');
        document.querySelector('#examples').classList.add('hidden');                                // Κρύβει την ενότητα "examples"
    });    

    let j = document.querySelector("#comments-button");                                             // Εντοπίζει το κουμπί με το ID "comments-button"
    j.addEventListener('click', () => {
        document.querySelector('#comments').classList.remove('hidden');
        document.querySelector('#comments').classList.add('visible');                               // Κάνει την ενότητα "comments" ορατή

        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden');                                   // Κρύβει την ενότητα "intro"
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden');                                    // Κρύβει την ενότητα "game"
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden');                                   // Κρύβει την ενότητα "links"
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden');                            // Κρύβει την ενότητα "introduction"
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden');                    // Κρύβει την ενότητα "data-types-operators"
        
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden');           // Κρύβει την ενότητα "arithmetic-logical-operations"
        
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden');                               // Κρύβει την ενότητα "variables"
                
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden');                      // Κρύβει την ενότητα "built-in-functions"
        
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden');                          // Κρύβει την ενότητα "basic-commands"
        
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden');                               // Κρύβει την ενότητα "libraries"
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden');                            // Κρύβει την ενότητα "control-flow"
        
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden');                               // Κρύβει την ενότητα "functions"
        
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden');                                    // Κρύβει την ενότητα "list"

        document.querySelector('#examples').classList.remove('visible');
        document.querySelector('#examples').classList.add('hidden');                                // Κρύβει την ενότητα "examples"
    });

    let k = document.querySelector("#built-in-functions-button");                                   // Εντοπίζει το κουμπί με το ID "built-in-functions-button"
    k.addEventListener('click', () => {
        document.querySelector('#built-in-functions').classList.remove('hidden');
        document.querySelector('#built-in-functions').classList.add('visible');                     // Κάνει την ενότητα "built-in-functions" ορατή

        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden');                                   // Κρύβει την ενότητα "intro"
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden');                                    // Κρύβει την ενότητα "game"
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden');                                   // Κρύβει την ενότητα "links"
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden');                            // Κρύβει την ενότητα "introduction"
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden');                    // Κρύβει την ενότητα "data-types-operators"
        
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden');           // Κρύβει την ενότητα "arithmetic-logical-operations"
        
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden');                               // Κρύβει την ενότητα "variables"
        
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden');                                // Κρύβει την ενότητα "comments"
        
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden');                          // Κρύβει την ενότητα "basic-commands"
        
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden');                               // Κρύβει την ενότητα "libraries"
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden');                            // Κρύβει την ενότητα "control-flow"
        
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden');                               // Κρύβει την ενότητα "functions"
        
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden');                                    // Κρύβει την ενότητα "list"
    
        document.querySelector('#examples').classList.remove('visible');
        document.querySelector('#examples').classList.add('hidden');                                // Κρύβει την ενότητα "examples"
    });    

    let l = document.querySelector("#libraries-button");                                            // Εντοπίζει το κουμπί με το ID "libraries-button"
    l.addEventListener('click', () => {
        document.querySelector('#libraries').classList.remove('hidden');
        document.querySelector('#libraries').classList.add('visible');                              // Κάνει την ενότητα "libraries" ορατή

        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden');                                   // Κρύβει την ενότητα "intro"
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden');                                    // Κρύβει την ενότητα "game"
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden');                                   // Κρύβει την ενότητα "links"
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden');                            // Κρύβει την ενότητα "introduction"
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden');                    // Κρύβει την ενότητα "data-types-operators"
        
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden');           // Κρύβει την ενότητα "arithmetic-logical-operations"
        
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden');                               // Κρύβει την ενότητα "variables"
        
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden');                                // Κρύβει την ενότητα "comments"
        
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden');                      // Κρύβει την ενότητα "built-in-functions"
        
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden');                          // Κρύβει την ενότητα "basic-commands"
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden');                            // Κρύβει την ενότητα "control-flow"
        
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden');                               // Κρύβει την ενότητα "functions"
        
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden');                                    // Κρύβει την ενότητα "list"
    
        document.querySelector('#examples').classList.remove('visible');
        document.querySelector('#examples').classList.add('hidden');                                // Κρύβει την ενότητα "examples"
    });    

    let m = document.querySelector("#control-flow-button");                                         // Εντοπίζει το κουμπί με το ID "control-flow-button"
    m.addEventListener('click', () => {
        document.querySelector('#control-flow').classList.remove('hidden');
        document.querySelector('#control-flow').classList.add('visible');                           // Κάνει την ενότητα "control-flow" ορατή

        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden');                                   // Κρύβει την ενότητα "intro"
    
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden');                                    // Κρύβει την ενότητα "game"
    
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden');                                   // Κρύβει την ενότητα "links"
    
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden');                            // Κρύβει την ενότητα "introduction"
    
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden');                    // Κρύβει την ενότητα "data-types-operators"
    
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden');           // Κρύβει την ενότητα "arithmetic-logical-operations"
    
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden');                               // Κρύβει την ενότητα "variables"
    
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden');                                // Κρύβει την ενότητα "comments"
    
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden');                      // Κρύβει την ενότητα "built-in-functions"
    
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden');                          // Κρύβει την ενότητα "basic-commands"
    
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden');                               // Κρύβει την ενότητα "libraries"
    
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden');                               // Κρύβει την ενότητα "functions"
    
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden');                                    // Κρύβει την ενότητα "list"
    
        document.querySelector('#examples').classList.remove('visible');
        document.querySelector('#examples').classList.add('hidden');                                // Κρύβει την ενότητα "examples"
    });    

    let n = document.querySelector("#functions-button");                                            // Εντοπίζει το κουμπί με το ID "functions-button"
    n.addEventListener('click', () => {
        document.querySelector('#functions').classList.remove('hidden');
        document.querySelector('#functions').classList.add('visible');                              // Κάνει την ενότητα "functions" ορατή

        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden');                                   // Κρύβει την ενότητα "intro"
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden');                                    // Κρύβει την ενότητα "game"
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden');                                   // Κρύβει την ενότητα "links"
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden');                            // Κρύβει την ενότητα "introduction"
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden');                    // Κρύβει την ενότητα "data-types-operators"
        
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden');           // Κρύβει την ενότητα "arithmetic-logical-operations"
        
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden');                               // Κρύβει την ενότητα "variables"
        
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden');                                // Κρύβει την ενότητα "comments"
        
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden');                      // Κρύβει την ενότητα "built-in-functions"
        
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden');                          // Κρύβει την ενότητα "basic-commands"
        
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden');                               // Κρύβει την ενότητα "libraries"
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden');                            // Κρύβει την ενότητα "control-flow"
        
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden');                                    // Κρύβει την ενότητα "list"
    
        document.querySelector('#examples').classList.remove('visible');
        document.querySelector('#examples').classList.add('hidden');                                // Κρύβει την ενότητα "examples"
    });    

    let o = document.querySelector("#list-button");                                                 // Εντοπίζει το κουμπί με το ID "list-button"
    o.addEventListener('click', () => {
        document.querySelector('#list').classList.remove('hidden');
        document.querySelector('#list').classList.add('visible');                                   // Κάνει την ενότητα "list" ορατή  

        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden');                                   // Κρύβει την ενότητα "intro"
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden');                                    // Κρύβει την ενότητα "game"
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden');                                   // Κρύβει την ενότητα "links"
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden');                            // Κρύβει την ενότητα "introduction"
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden');                    // Κρύβει την ενότητα "data-types-operators"
        
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden');           // Κρύβει την ενότητα "arithmetic-logical-operations"
        
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden');                               // Κρύβει την ενότητα "variables"
        
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden');                                // Κρύβει την ενότητα "comments"
        
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden');                      // Κρύβει την ενότητα "built-in-functions"
        
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden');                          // Κρύβει την ενότητα "basic-commands"
        
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden');                               // Κρύβει την ενότητα "libraries"
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden');                            // Κρύβει την ενότητα "control-flow"
        
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden');                               // Κρύβει την ενότητα "functions"

        document.querySelector('#examples').classList.remove('visible');
        document.querySelector('#examples').classList.add('hidden');                                // Κρύβει την ενότητα "examples"
    });

    let p = document.querySelector("#examples-button");                                             // Εντοπίζει το κουμπί με το ID "examples-button"
    p.addEventListener('click', () => {
        document.querySelector('#examples').classList.remove('hidden');
        document.querySelector('#examples').classList.add('visible');                               // Κάνει την ενότητα "examples" ορατή

        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden');                                   // Κρύβει την ενότητα "intro"
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden');                                    // Κρύβει την ενότητα "game"
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden');                                   // Κρύβει την ενότητα "links"
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden');                            // Κρύβει την ενότητα "introduction"
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden');                    // Κρύβει την ενότητα "data-types-operators"
        
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden');           // Κρύβει την ενότητα "arithmetic-logical-operations"
        
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden');                               // Κρύβει την ενότητα "variables"
        
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden');                                // Κρύβει την ενότητα "comments"
        
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden');                      // Κρύβει την ενότητα "built-in-functions"
        
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden');                          // Κρύβει την ενότητα "basic-commands"
        
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden');                               // Κρύβει την ενότητα "libraries"
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden');                            // Κρύβει την ενότητα "control-flow"
        
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden');                               // Κρύβει την ενότητα "functions"
        
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden');                                    // Κρύβει την ενότητα "list"
    });

    // Ορίζουμε το κουμπί "Introduction" ως προ-επιλεγμένο και εμφανίζει το περιεχόμενό του
    const buttons = document.querySelectorAll(".navigation2 button");                               // Εντοπίζονται όλα τα κουμπιά μέσα στο δεύτερο menu επιλογών
    buttons.forEach(btn => btn.classList.remove("selected"));                                       // Αφαιρεί την κλάση 'selected' από όλα τα κουμπιά
    e.classList.add("selected");                                                                    // Προσθέτει την κλάση 'selected' στο κουμπί "Introduction"

    document.querySelector('#introduction').classList.remove('hidden');
    document.querySelector('#introduction').classList.add('visible');                               // Αφαιρεί την κλάση 'hidden' και προσθέτει την κλάση 'visible' στην ενότητα "Introduction"
});

// Όταν επιλέγεται το κουμπί "Παιχνίδι"
let c = document.querySelector("#game-button");                                                     // Εντοπίζει το κουμπί με το ID "game-button"
c.addEventListener('click', () => {

    document.querySelector('#game').classList.remove('hidden');
    document.querySelector('#game').classList.add('visible');                                       // Κάνει την ενότητα "game" ορατή

    document.querySelector('#intro').classList.remove('visible');
    document.querySelector('#intro').classList.add('hidden');                                       // Κρύβει την ενότητα "intro"
    
    document.querySelector('#links').classList.remove('visible');
    document.querySelector('#links').classList.add('hidden');                                       // Κρύβει την ενότητα "links"
    
    document.querySelector('#introduction').classList.remove('visible');
    document.querySelector('#introduction').classList.add('hidden');                                // Κρύβει την ενότητα "introduction"
    
    document.querySelector('#data-types-operators').classList.remove('visible');
    document.querySelector('#data-types-operators').classList.add('hidden');                        // Κρύβει την ενότητα "data-types-operators"
    
    document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
    document.querySelector("#arithmetic-logical-operations").classList.add('hidden');               // Κρύβει την ενότητα "arithmetic-logical-operations"
    
    document.querySelector('#variables').classList.remove('visible');
    document.querySelector('#variables').classList.add('hidden');                                   // Κρύβει την ενότητα "variables"
    
    document.querySelector('#comments').classList.remove('visible');
    document.querySelector('#comments').classList.add('hidden');                                    // Κρύβει την ενότητα "comments"
    
    document.querySelector('#built-in-functions').classList.remove('visible');
    document.querySelector('#built-in-functions').classList.add('hidden');                          // Κρύβει την ενότητα "built-in-functions"
    
    document.querySelector('#basic-commands').classList.remove('visible');
    document.querySelector('#basic-commands').classList.add('hidden');                              // Κρύβει την ενότητα "basic-commands"
    
    document.querySelector('#libraries').classList.remove('visible');
    document.querySelector('#libraries').classList.add('hidden');                                   // Κρύβει την ενότητα "libraries"
    
    document.querySelector('#control-flow').classList.remove('visible');
    document.querySelector('#control-flow').classList.add('hidden');                                // Κρύβει την ενότητα "control-flow"
    
    document.querySelector('#functions').classList.remove('visible');
    document.querySelector('#functions').classList.add('hidden');                                   // Κρύβει την ενότητα "functions"
    
    document.querySelector('.navigation2').classList.remove('visible');
    document.querySelector('.navigation2').classList.add('hidden');                                 // Κρύβει την ενότητα "navigation2"

    document.querySelector('#list').classList.remove('visible');
    document.querySelector('#list').classList.add('hidden');                                        // Κρύβει την ενότητα "list"

    document.querySelector('#examples').classList.remove('visible');
    document.querySelector('#examples').classList.add('hidden');                                    // Κρύβει την ενότητα "examples"
  
}); 

// Όταν επιλέγεται το κουμπί "Σύνδεσμοι"
let d = document.querySelector("#links-button");                                                    // Εντοπίζει το κουμπί με το ID "links-button"
d.addEventListener('click', () => {
    document.querySelector('#links').classList.remove('hidden');
    document.querySelector('#links').classList.add('visible');                                      // Κάνει την ενότητα "links" ορατή

    document.querySelector('#intro').classList.remove('visible');
    document.querySelector('#intro').classList.add('hidden');                                       // Κρύβει την ενότητα "intro"
    
    document.querySelector('#game').classList.remove('visible');
    document.querySelector('#game').classList.add('hidden');                                        // Κρύβει την ενότητα "game"
    
    document.querySelector('#introduction').classList.remove('visible');
    document.querySelector('#introduction').classList.add('hidden');                                // Κρύβει την ενότητα "introduction"
    
    document.querySelector('#data-types-operators').classList.remove('visible');
    document.querySelector('#data-types-operators').classList.add('hidden');                        // Κρύβει την ενότητα "data-types-operators"
    
    document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
    document.querySelector("#arithmetic-logical-operations").classList.add('hidden');               // Κρύβει την ενότητα "arithmetic-logical-operations"
    
    document.querySelector('#variables').classList.remove('visible');
    document.querySelector('#variables').classList.add('hidden');                                   // Κρύβει την ενότητα "variables"
    
    document.querySelector('#comments').classList.remove('visible');
    document.querySelector('#comments').classList.add('hidden');                                    // Κρύβει την ενότητα "comments"
    
    document.querySelector('#built-in-functions').classList.remove('visible');
    document.querySelector('#built-in-functions').classList.add('hidden');                          // Κρύβει την ενότητα "built-in-functions"
    
    document.querySelector('#basic-commands').classList.remove('visible');
    document.querySelector('#basic-commands').classList.add('hidden');                              // Κρύβει την ενότητα "basic-commands"
    
    document.querySelector('#libraries').classList.remove('visible');
    document.querySelector('#libraries').classList.add('hidden');                                   // Κρύβει την ενότητα "libraries"
    
    document.querySelector('#control-flow').classList.remove('visible');
    document.querySelector('#control-flow').classList.add('hidden');                                // Κρύβει την ενότητα "control-flow"
    
    document.querySelector('#functions').classList.remove('visible');
    document.querySelector('#functions').classList.add('hidden');                                   // Κρύβει την ενότητα "functions"
    
    document.querySelector('.navigation2').classList.remove('visible');
    document.querySelector('.navigation2').classList.add('hidden');                                 // Κρύβει την ενότητα "navigation2"

    document.querySelector('#list').classList.remove('visible');
    document.querySelector('#list').classList.add('hidden');                                        // Κρύβει την ενότητα "list"

    document.querySelector('#examples').classList.remove('visible');
    document.querySelector('#examples').classList.add('hidden');                                    // Κρύβει την ενότητα "examples"

    document.getElementById('AccountForm').style.display = 'none'; 
    document.getElementById('LoginForm').style.display = 'none';
});

// Όταν επιλέγεται το κουμπί "Δημιουργία Λογαριασμού"
let e = document.querySelector("#create-account-button"); // Εντοπίζει το κουμπί με το ID "create-account-button"
e.addEventListener('click', () => {
    // Εμφανίζει τη φόρμα AccountForm και κρύβει τη LoginForm
    document.getElementById('AccountForm').style.display = 'block';
    document.getElementById('LoginForm').style.display = 'none';
});

// Όταν επιλέγεται το κουμπί "Είσοδος"
let f = document.querySelector("#login-button"); // Εντοπίζει το κουμπί με το ID "login-button"
f.addEventListener('click', () => {
    // Εμφανίζει τη φόρμα LoginForm και κρύβει τη AccountForm
    document.getElementById('LoginForm').style.display = 'block';
    document.getElementById('AccountForm').style.display = 'none'; 
});

/*Reset παιχνιδιού--------------------------------------------------------------------------------------------------------------------------------*/

// Λειτουργία επαναφόρτωσης του iframe
function resetIframe() {
    var quizIframe = document.getElementById('quiz_iframe');                                        // Εντοπίζει το iframe με το ID "quiz_iframe"

    if (quizIframe) {
        quizIframe.src = quizIframe.src;                                                            // Επαναθέτει το src του iframe για να ξαναφορτώσει και να κάνει reset το περιεχόμενο
    }
}

// Εντοπίζει τα κουμπιά του πρώτου menu επιλογών και προσθέτει event για να κάνουν reset το παιχνίδι όταν πατηθούν
document.getElementById('intro-button').addEventListener('click', resetIframe); 
document.getElementById('units-button').addEventListener('click', resetIframe); 
document.getElementById('game-button').addEventListener('click', resetIframe); 
document.getElementById('links-button').addEventListener('click', resetIframe);
document.getElementById('logout-button').addEventListener('click', resetIframe);
