function skip(){
    console.log('1')
    var skip = document.getElementsByClassName('ytp-ad-skip-button ytp-button')
    if(skip[0]!=undefined){
    skip[0].click();}
    

}
function cross(){
    var cross = document.getElementsByClassName('ytp-ad-overlay-close-button')
    if(cross[0]!=undefined){
    cross[0].click();}

}
setInterval(function(){
    skip();

    cross();
},1000)