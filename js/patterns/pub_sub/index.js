//Опишем объект "Издатель"
function Publisher(){
    //это просто массив для хранения всех подписчиков
    this.subscribers = [];
}

//Опишем метод, который позволит подписчикам, подписаться на издателя
//грубо говоря, любой желающий может пойти на почту и подписаться
//или как там это сейчас делается? :)
Publisher.prototype.subscribe = function(onPublish){
    this.subscribers.push(onPublish);
};

//Опишем метод, который будет вызываться, когда издатель издал новую новость
Publisher.prototype.publish = function(sometext){
    //пробегаем по всем подписчикам и отдаем ему текст новости
    this.subscribers.forEach(function(subscriber){
        subscriber(sometext);
    });
};


//Ну а теперь создадим два новых издательства
var freedom = new Publisher();
var union = new Publisher();

//Теперь Сашу, который всем обо всем рассказывает по каждому поводу
var Sasha = {
    tellToEveryone: function(news){
        console.log('OMG! Did you hear that ' + news);
    }
};

//Теперь Машу, которая обо всем пишет свои мысли в блог
var Masha = {
    writeToBlog: function(news){
        console.log('My opinions about ' + news);
    }
};

//Осуществим подписку Саши и Маши на газету Freedom

//строго говоря, мы могли бы написать вот так:
//freedom.subscribe(function(news){
//    Sasha.tellToEveryone(news);
//});

//но более аккуратной будет все же именно такая запись:
freedom.subscribe(Sasha.tellToEveryone);
freedom.subscribe(Masha.writeToBlog);
//а Машу подпишем еще и на журнал Union
union.subscribe(Masha.writeToBlog);

//а теперь Издательства публикуют свои новости
freedom.publish('The winter is coming!');
union.publish("It's snowball time!");

//В консоль будет выведено:
//OMG! Did you hear that The winter is coming!
//My opinions about The winter is coming!
//My opinions about It's snowball time!