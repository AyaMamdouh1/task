/*var hidendiv=*/
var EXPLORE=document.getElementById("EXPLORE");
var DEVELOPER=document.getElementById("DEVELOPER");
var VISION=document.getElementById("VISION");


function showDev()
{
    DEVELOPER.style.opacity  = "1";
    
EXPLORE.style.opacity="0";

VISION.style.opacity="0";

}
function showExp()
{

    EXPLORE.style.opacity="1";
    DEVELOPER.style.opacity  = "0";
    VISION.style.opacity="0";

}

function showVision()
{  

    VISION.style.opacity="1";
    EXPLORE.style.opacity="0";
    DEVELOPER.style.opacity  = "0";
}