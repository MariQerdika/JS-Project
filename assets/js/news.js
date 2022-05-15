const news = new XMLHttpRequest();
const container = document.getElementById('container');


news.onload = function(){
    if(this.status === 200){
        container.innerHTML = news.responseText;
    }
}
news.open ('get', 'list.html');
news.send();