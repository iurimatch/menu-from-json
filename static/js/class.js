
export  class Dialog {
    Open() { // ეს ფუნქცია გადის ექსპორტზე და ვიძახებ სხვა საჭირო ჯს ფაილებში
    // აქ თოგლე ღილაკიზე რა მოხდეს ეგა გაწერილი jqueri dilogidn შემომაქ ჰტმლ cdn linkebiT
        
        
            // ეს ხსნის ჯქუერი უი დიალოგის ფანჯარას, დივი  ზეა მიბმული ჰტმლ ფაილში
        $( function() {
            $( "#dialog" ).dialog({
                width: 1032,
                height:500,
                modal: true
            });
        } );
        //დეფულტად დისპლეი ნონი მაქ რეგ. ფორმა, ღილაკზე დაჭერისას უნდა გამოჩნდეს მარტო, 
        var registrationForm=document.querySelector("#registrationForm")
        registrationForm.style.display = "block";
    }

    Close() { // ეს ფუნქცია გადის ექსპორტზე და ვიძახებ სხვა საჭირო ჯს ფაილებში
        // დიალოგის დახურვის ფუნქციონალი , ჯქუერის, მივაბი ჩემ შექმნილ დახურვის ღილაკზე, იდ ით  closeDialogBtn
        $(document).ready(function () {
            function closeDialog() {
                $("#dialog").dialog("close");
            }
            $("#closeDialogBtn").on("click", function () {
                closeDialog();
            });
        })
        console.log("Zoro2 function executed");
    }
}


