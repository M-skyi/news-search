
let topicValueLocal = localStorage.getItem('topicNews');
let topicValue = document.querySelector(".topic-request__item");
topicValue.textContent = `Вы спросили: «${topicValueLocal}»`;


