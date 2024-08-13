

import { Dialog } from './class.js';



function OpenDialog() {
    const open = new Dialog(); // open ცვლადში ვინახავ  class.js დან დაიმპორტებულ კლას დიალოგს
    open.Open(); //ოფენ ცვლადის/დიალოგის ოფენ ფუნქციას ვიძახებ- მოდის class.js დან
}


function CloseDialog() {
    const close= new Dialog() //close ცვლადში შემომაქ კლასი დიალოგი
    close.Close() //close ცვლადის/დიალოგის ოფენ ფუნქციას ვიძახებ- მოდის class.js დან
   
}

document.getElementById("OpenDialog").addEventListener("click", OpenDialog);
document.getElementById("closeDialogBtn").addEventListener("click", CloseDialog);

