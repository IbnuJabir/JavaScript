const quotes = {
        quran: [
          {
            text: "Say: He is Allah, the One and Only;",
            source: "Chapter 112 (Surah Al-Ikhlas), Verse 1"
          },
          {
            text: "Allah does not burden a soul beyond that it can bear.",
            source: "Chapter 2 (Surah Al-Baqarah), Verse 286"
          },
          {
            text: "Allah is He, on Whom all depend;",
            source: "Chapter 112 (Surah Al-Ikhlas), Verse 2"
          }
        ],
        hadith: [
          {
            text: "The strong man is not the one who can overpower others, but the one who can control himself when angry.",
           source: "Narrated by Bukhari and Muslim"
          },
          {
            text: "The best among you are those who have the best manners and character.",
            source: "Narrated by Bukhari and Muslim"
          },
          {
            text: "None of you truly believes until he loves for his brother what he loves for himself.",
            source: "Narrated by Bukhari and Muslim"
          }
        ],
        scholar: [
          {
            text: "The disease of the heart is worse than the disease of the body.",
            source: "Ibn Taymiyyah"
          },
          {
            text: "Knowledge is that which benefits, not that which is memorized.",
            source: "Imam Shafi'i"
          },
          {
            text: "The religion is knowledge, and the knowledge is in the book of Allah, and the Sunnah of His Prophet.",
            source: "Imam Ahmad ibn Hanbal"
          }
        ]
      };
      
      let generateBtn = document.getElementById('generate');
      let quote = document.getElementById('quote');
      let source = document.getElementById('source');
      let add = document.getElementById('submit-quote');
      let favBtn = document.getElementById('fav-btn');
      const favs = [];
      let storedQuotes = JSON.parse(localStorage.getItem("quotes")) || {};
      
      let storedfavs = JSON.parse(localStorage.getItem("favs")) || {};
      let selectedCategory = document.querySelector('input[name="source"]:checked').value;
      let currentQuote;
      let currentSource;
      
      function generateQuote() {
        let storedQuotes = JSON.parse(localStorage.getItem("quotes")) || {};
        let storedfavs = JSON.parse(localStorage.getItem("favs")) || {};
        let selectedSource = document.querySelector('input[name="source"]:checked').value;
        let selectedQuotes = storedQuotes[selectedSource];
        let randomQuote = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];
        currentQuote = randomQuote.text;
        currentSource = randomQuote.source;
        quote.textContent = randomQuote.text;
        
        if (randomQuote.source) {
          source.textContent = `- ${randomQuote.source}`;
        } else {
          source.textContent = "";
        }
        let isTextFound = storedfavs.some(item => item.text === currentQuote);
        if (isTextFound) {
            favBtn.style.color  = "red";
            favBtn.style.transition = "width 2s ease-in-out";
        }
        else{
            favBtn.style.color = "grey";
            favBtn.style.transition = "width 2s ease-in-out";
        }
        console.log(selectedQuotes);
      }
  
      function add_quote() {
        event.preventDefault();
        let storedQuotes = JSON.parse(localStorage.getItem("quotes")) || {};
        let selectedCategory = document.querySelector('input[name="source"]:checked').value;
        let userInput = document.getElementById("Input-quote");
        let userSource = document.getElementById("Input-source");
        if (userInput.value != "" && userSource.value != ""){
        // Create a new quote object
        let newQuote = {
          text: userInput.value,
          source: userSource.value
        };
        // Add the new quote to the selected category
        storedQuotes[selectedCategory].push(newQuote);
        localStorage.setItem("quotes", JSON.stringify(storedQuotes));
        console.log(storedQuotes[selectedCategory]);
        userInput.value = "";
        userSource.value = "";
        }
        else{
            /*this.setCustomValidity('add your source!');
            this.setCustomValidity('');*/
            if (userInput.value === "") {
                alert("quote field can't be empty!");
            }
            else 
                alert("source field can't be empty!");
        }
      }
      
      function delete_quote() {
          let storedQuotes = JSON.parse(localStorage.getItem("quotes")) || {};
          let selectedCategory = document.querySelector('input[name="source"]:checked').value;
          let selectedQuotes = storedQuotes[selectedCategory];
      
          for (let i = 0; i < selectedQuotes.length; i++) {
              if (currentQuote === selectedQuotes[i].text && currentSource === selectedQuotes[i].source) {
                  selectedQuotes.splice(i, 1);
                  break;
              }
          }
          storedQuotes[selectedCategory] = selectedQuotes;
          localStorage.setItem("quotes", JSON.stringify(storedQuotes));
      
          generateQuote();
      }
    
    function toogle(){
        if (favBtn.style.color == "red") {
            favBtn.style.color = "grey";
            favBtn.style.transition =  "width 2s ease-in-out";
            removeFav();
        }
        else {
            favBtn.style.color = "red";
            favBtn.style.transition =  "width 2s ease-in-out";
            addFav();
        }
    }
    function addFav(){
        let storedfavs = JSON.parse(localStorage.getItem("favs")) || {};
        let newQuote = {
            text: currentQuote,
            source: currentSource
        };
        // Add the new quote to the selected category
        storedfavs.push(newQuote);
        localStorage.setItem("favs", JSON.stringify(storedfavs));
        console.log(storedfavs);
    }
    function removeFav(){
              for (let i = 0; i < storedfavs.length; i++) {
              if (currentQuote === storedfavs[i].text && currentSource === storedfavs[i].source) {
                  storedfavs.splice(i, 1);
                  break;
              }
          }
          localStorage.setItem("favs", JSON.stringify(storedfavs));
          console.log(storedfavs);
    }