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
* Функция для фильтрации контента
* Будет вызываться благодаря атрибуту oninput на index.html
*
* */
function filterContent( userInput ){ // Принимаем пользовательский ввод в качестве параметра.
  
   // Находим контейнеры с видео, которые необходимо фильтровать
   let elements = document.getElementsByClassName('video-container');
 
   // Пробегаемся по контейнерам
   for (let i = 0; i <= elements.length; i++ ){
       // Вытаскиваем текст описания видео, которое необходимо отфильтровать
let videoText = elements[i].querySelector(".video-title").innerText;
 
 
       // Выполняем фильтрацию, сравнивая значения в нижнем регистре
       if(!videoText.toLowerCase().includes(userInput.toLowerCase())){
           // Скрываем неподходящие
           elements[i].style.display = 'none';
       } else {
           // Показываем подходящие
           elements[i].style.display = 'inline-block';
       }
   }
}

// Сохраняем функцию 2 в переменную
let sessionHandler = function handleSession(){
   let session =  new Map();
   session.set("userAgent", window.navigator.userAgent)
   session.set("age", prompt("Пожалуйста, введите ваш возраст?"))
  
   if(session.get("age") >= 18){
       let startDate = new Date().toLocaleString();
      
       alert("Приветствуем на LifeSpot! " + '\n' +  "Текущее время: " + startDate );
       session.set("startDate", startDate)
   }
   else{
       alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
       window.location.href = "http://www.google.com"
   }
  
   for (let result of session){
       console.log(result)
   }
}