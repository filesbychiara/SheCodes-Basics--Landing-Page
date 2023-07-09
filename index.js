function collect() {
            let name = prompt ("What is your name?");
            let city = prompt ("What city do you live in?");
            let email = prompt ("What is your email?");

            let h1 = document.querySelector("h1");
            h1.innerHTML = "Welcome Abroad <span>" + name + "</span>";

            let h2 = document.querySelector("h2");
            h2.innerHTML = "<em><u>Next stop:</u><br /> " + city + " ➡️ TravelAnd<em>";
         
            let p = document.querySelector("p");
            p.innerHTML = "<center>Your ticket is on its way!<hr></center>" 
        }
        let getTickets = document.querySelector("button");
        getTickets.addEventListener("click", collect);