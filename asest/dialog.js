

 
new DataTable('#example', {
    columns: [
       
        { title: 'First NAme' },
        { title: 'Last Name' },
        { title: 'Age' },
        { title: 'title1' },
        { title: 'title2' },
        { title: 'title3' },
        { title: 'title4' },
        
    ],
    // data: dataSet,
    /**i= informcia , flp=ძებნის ველს, rt გამყოფი ხაზი ამის შემდეგ გამეორება შეგიძ₾ია */
    dom: ' <"top"flp> rt <"bottom"flp> <"botton"i><"clear">',
    // ნომრებთან ერთად ემატება next-last velebi
    pagingType: 'full_numbers' ,

    // სქროლს გაუკეთებს მონაცმებს, დავკომენტრე რადგან გვერდბს აქრობს ფალსის გამო
    // paging: false,
    // scrollCollapse: true,
    // scrollY: '50vh'

    //ეს ფუნქცია ინდივუდულურ ძებნის სისტემას ამატებს სვეტებზე, დატაბასედან ავიღე გამზადებული
    // initComplete: function () {
    //     this.api()
    //         .columns()
    //         .every(function () {
    //             let column = this;
    //             let title = column.footer().textContent;

    //             // Create input element
    //             let input = document.createElement('input');
    //             input.placeholder = title;
    //             column.footer().replaceChildren(input);

    //             // Event listener for user input
    //             input.addEventListener('keyup', () => {
    //                 if (column.search() !== this.value) {
    //                     column.search(input.value).draw();
    //                 }
    //             });
    //         });
    // },
    
    

});
// აქ თოგლე ღილაკიზე რა მოხდეს ეგა გაწერილი, სახელი შეივცვალოს და  დივ გაქროს-გააჩინოს
document.getElementById('toggleButton').addEventListener('click', function () {
   console.log("gaixsna funqcia")
     // ეს ხსნის ჯქუერი უი დიალოგის ფანჯარას, დივი  ზეა მიბმული ჰტმლ ფაილში
    $( function() {
        $( "#dialog" ).dialog({
            width: 800,
            modal: true
        });
       
      } );
      //დეფულტად დისპლეი ნონი მაქ რეგ. ფორმა, ღილაკზე დაჭერისას უნდა გამოჩნდეს მარტო, 
      var registrationForm=document.querySelector("#registrationForm")
      registrationForm.style.display = "block";

});


 

