let session =  new Map();
/*
* Сохранение данных сессии сразу при заходе пользователя на страницу
* 
* */
function handleSession(){
   // Сохраним время начала сессии
   session.set("startDate", new Date().toLocaleString())
   // Сохраним UserAgent
   session.set("userAgent", window.navigator.userAgent)
}

setTimeout(() =>
   alert("Нравится LifeSpot? " + '\n' +  "Подпишитесь на наш Instagram @lifespot999!" ),
10000);


// Сохраняем функцию 1  в переменную
let contentFilter =  function filterContent(){
   let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
   let elements = document.getElementsByClassName('video-container');
 
   for (let i = 0; i <= elements.length; i++ ){
       let videoText = elements[i].querySelector(".video-title").innerText;
       if(!videoText.toLowerCase().includes(inputString.toLowerCase())){
           elements[i].style.display = 'none';
       } else {
           elements[i].style.display = 'inline-block';
       }
   }
}
/*
* Вывод данных сессии в консоль
* 
* */
let sessionLog = function logSession() {
   for (let result of session){
       console.log(result)
   }
}
/*
* Функция для фильтрации контента
* Будет вызываться благодаря атрибуту oninput на index.html
*
* */
function filterContent(){ 
    let elements = document.getElementsByClassName('video-container');
    
    for (let i = 0; i <= elements.length; i++ ){
        let videoText = elements[i].querySelector(".video-title").innerText;
        if(!videoText.toLowerCase().includes(inputParseFunction() /* Захват переменной теперь происходит с помощью замыкания */  .toLowerCase())){
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

/*
* Проверка возраста пользователя
* 
* */
function checkAge(){
   session.set("age", prompt("Пожалуйста, введите ваш возраст?"))
   
   if(session.get("age") >= 18){
       alert("Приветствуем на LifeSpot! " + '\n' +  "Текущее время: " + new Date().toLocaleString() );
   }
   else{
       alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
       window.location.href = "http://www.google.com"
   }
}
