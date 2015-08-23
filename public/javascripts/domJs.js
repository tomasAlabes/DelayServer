(function(){

    console.debug('I am a JS that interacts with the DOM!');

    var paragraphs = document.querySelectorAll('p');
    Array.prototype.forEach.call(paragraphs, function(p){
        p.style.color = 'blue';
    });

})();
