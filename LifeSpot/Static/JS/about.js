﻿/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
* 
* */
function getReview() {
    // Создадим объект
    let review = {}
    
    // Сохраним свойство имени
    review["userName"] = prompt("Как вас зовут ?")
    if(review["userName"] == null){
        return
    }
    
    // Сохраним текст отзыва
    review["comment"] = prompt("Напишите свой отзыв")
    if(review["comment"] == null){
        return
    }
    
    // Сохраним текущее время
    review["date"] = new Date().toLocaleString()
    
    // Добавим на страницу
    writeReview(review)
}


/*
* Оставить комментарий
*
* */
function getComment() {
    // Создаем объект обычного комментария
    let comment = {}
   
    // Запросим имя
    comment.author = prompt("Как вас зовут ?")
    if(comment.author== null){
        return
    }
   
    // Запросим текст
    comment.text = prompt("Оставьте отзыв")
    if(comment.text == null){
        return
    }
  
    // Сохраним текущее время
    comment.date = new Date().toLocaleString()
   
    // Запросим, хочет ли пользователь оставить полноценный отзыв или это будет обычный комментарий
    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?')
   
    if(enableLikes){
        // Создадим для отзыва новый объект из прототипа - комментария
        let review = Object.create(comment)
        // и добавим ему нужное свойство
        review.rate = 0;
  
        // Добавляем отзыв с возможностью пользовательских оценок
        writeReview(review)
    } else{
        // Добавим простой комментарий без возможности оценки
        writeReview(comment)
    }
 }

 /*
* Запишем объект на страницу
*
* */
const writeReview = review => {
    let likeCounter = '';
   
    // Для проверки, является ли объект отзывом, используем свойство hasOwnProperty
    if(review.hasOwnProperty('rate')){
        likeCounter += '           <b style="color: chocolate">Рейтинг:</b>   ' + review.rate;
    }
   
    // Запишем результат
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['author']}</b>  ${review['date']}${likeCounter}</i></p>` +
        `<p>${review['text']}</p>`  +
        '</div>';
 }

 /*
* Конструктор, через который создаётся комментарий
*
* */
function Comment() {
    // Запросим имя
    this.author = prompt("Как вас зовут ?")
    if(this.author == null){
        this.empty = true
        return
    }
  
    // Запросим текст
    this.text = prompt("Оставьте отзыв")
    if(this.text == null){
        this.empty = true
        return
    }
  
    // Сохраним текущее время
    this.date = new Date().toLocaleString()
 }

 /*
* Оставить комментарий
*
* */
function addComment() {
    let comment = new Comment()
   
    // проверяем, успешно ли юзер осуществил ввод
    if(comment.empty){
        return;
    }
   
    // Запросим, хочет ли пользователь оставить полноценный отзыв или это будет обычный комментарий
    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?')
   
    if(enableLikes){
        // Создадим для отзыва новый объект из прототипа - комментария
        let review = Object.create(comment)
        // и добавим ему нужное свойство
        review.rate = 0;
  
        // Добавляем отзыв с возможностью пользовательских оценок
        writeReview(review)
    } else{
        // Добавим простой комментарий без возможности оценки
        writeReview(comment)
    }
 }
