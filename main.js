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
      
      var generateBtn = document.getElementById('generate');
      var quote = document.getElementById('quote');
      var source = document.getElementById('source');
      document.addEventListener('DOMContentLoaded', function() {
          var storedQuotes = JSON.parse(localStorage.getItem("quotes")) || {};
      });
      var selectedCategory = document.querySelector('input[name="source"]:checked').value;
      var currentQuote;
      
      function generateQuote() {
        var storedQuotes = JSON.parse(localStorage.getItem("quotes")) || {};
  
        var selectedSource = document.querySelector('input[name="source"]:checked').value;
        var selectedQuotes = storedQuotes[selectedSource];
        var randomQuote = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];
        currentQuote = randomQuote.text;
        
        quote.textContent = randomQuote.text;
        
        if (randomQuote.source) {
          source.textContent = `- ${randomQuote.source}`;
        } else {
          source.textContent = "";
        }
        console.log(selectedQuotes);
      }
  
      function add_quote() {
        event.preventDefault();
        var selectedCategory = document.querySelector('input[name="source"]:checked').value;
        var userInput = document.getElementById("Input-quote");
        // Create a new quote object
        var newQuote = {
          text: userInput.value,
          source: ` ${selectedCategory}`
        };
        // Add the new quote to the selected category
        quotes[selectedCategory].push(newQuote);
        localStorage.setItem("quotes", JSON.stringify(quotes));
        console.log(quotes[selectedCategory]);
        userInput.value = "";
      }
      
      function delete_quote() {
          var storedQuotes = JSON.parse(localStorage.getItem("quotes")) || {};
          var selectedCategory = document.querySelector('input[name="source"]:checked').value;
          var selectedQuotes = storedQuotes[selectedCategory];
      
          for (var i = 0; i < selectedQuotes.length; i++) {
              if (currentQuote === selectedQuotes[i].text) {
                  selectedQuotes.splice(i, 1);
                  break;
              }
          }
          storedQuotes[selectedCategory] = selectedQuotes;
          localStorage.setItem("quotes", JSON.stringify(storedQuotes));
      
          generateQuote();
      }
