
var captionLength = 0;
var caption = '';


window.onload = (function() {
    captionEl = document.getElementById("caption");
    
    document.getElementById("test-typing").addEventListener("click",function(){
        testTypingEffect();
    });

    document.getElementById("test-erasing").addEventListener("click",function(){
        testErasingEffect();
    });
});

function testTypingEffect() {
    caption = document.getElementById("user-caption").value;
    type();
    
}

function type() {
    captionEl.innerHTML = (caption.substring(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 30);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function testErasingEffect() {
    caption = captionEl.innerHTML;
    captionLength = caption.length;
    if (captionLength>0) {
        erase();
    } else {
        document.getElementById("caption").innerHTML = "erasing test!";
        setTimeout('testErasingEffect()', 30);
    }
}

function erase() {
    captionEl.innerHTML = (caption.substring(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 30);
    } else {
        captionLength = 0;
        caption = '';
    }	
}





function timeit(fn,time) {
    var startTime = new Date().getTime();
    fn();
    var endTime = new Date().getTime();
    var myTime = (testName + ": " + (endTime - startTime) + "ms");
    myTime <= time && true
}

timeit((2 + 2), 5);