let words = [
    "привет", 
    "линукс", 
    "пайтон", 
    "матрица", 
    "мороженное", 
    "школьник", 
    "программист", 
    "виндовс", 
    "работа", 
    "код", 
    "процессор", 
    "евпатория",
    "вверх"];
    let riddle = [
        "приветсвие",
        "аналог Windows",
        "язык программирования",
        "Нео",
        "белое сладкое",
        "ученик",
        "пишет код",
        "тоже самое что и Linux",
        "занятость",
        "пишут программисты",
        "мозг компьютера",
        "детская здравница",
        "IT школа в Евпатории"
    ];
    let result = document.querySelector(".result");
    let img = document.querySelector("img");
    let info = document.querySelector(".info");
    let input = document.querySelector("input[type='text']");
    let n = Math.floor(Math.random()*words.length);
    let riddleText = document.querySelector(".riddle");
    let btn = document.querySelector("button");
    let word = words[n];
    riddleText.innerText = riddle[n];
    let arr = [];
    let guess = 0;
    
    btn.onclick = function() {
       window.location = "https://codepen.io/Yarik83Menda/full/NWxZJPL";
    };

    for(let i = 0; i < word.length; i++) {
        result.innerHTML += "___"+ "  ";
        arr[i] = "___";
    }
    
    input.oninput = game;
    
    function game() {
        this.value = this.value.toLowerCase();
        if(this.value.length > 1) {
            this.value = "";
        }
        else {
            if(guess !== word.length) {
            for(let k = 0; k < word.length; k++) {
                if(this.value === word[k]) arr[k] = this.value;
            }
               result.innerText = arr.join(" ");
               guess++;
               info.innerHTML = "Осталось "+(word.length-guess)+" попыток" ;

            if(arr.join("") == word) {
                info.innerHTML = "Победа !!!";
                input.style.display = "none";                    
                img.src = "https://cdn3.iconfinder.com/data/icons/shopping-and-retail-15/512/Crown-256.png";
                btn.style.display = "block";
            }                    
        }
        else {
            info.innerHTML = " :( отгадка: "+ "--"+word+"--";
            input.style.display = "none"; 
            img.src = "https://cdn3.iconfinder.com/data/icons/materia-halloween-free/24/039_024_gallows_deceased_halloween_death-256.png";
            btn.style.display = "block";
            }
        }
    } 
