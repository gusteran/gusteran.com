pageElems = ['intro', 'robot', 'software', 'outdoors'];
NUM_PAGES = 4;
TIME_DELAY = 500;
currentPage = 0;
lastScroll = Date.now().valueOf();

console.log(pageElems[currentPage]);
console.log(lastScroll);


$(document).bind('mousewheel', function(e){
    changePage(e.originalEvent.wheelDelta);
});

$(document).keydown(function(e){
    if (e.which == 40) { // Down pressed 
        changePage(-1);
    } else if (e.which == 38) { //Up pressed
        changePage(1);
    }
});
    


function changePage(scroll){
    if(Date.now().valueOf() > lastScroll + TIME_DELAY) {

        // Checks the direction of scrolling
        if(scroll < 0){
            if(currentPage != NUM_PAGES-1) currentPage += 1;
        } else {
            if(currentPage != 0) currentPage -= 1;
        }

    }

    console.log(currentPage)
    console.log(pageElems[currentPage]);
    console.log(lastScroll);
    // document.getElementById(pageElems[currentPage]).scrollIntoView(scroll < 0);
    document.getElementById(pageElems[currentPage]).scrollIntoView({behavior:'smooth'});
}