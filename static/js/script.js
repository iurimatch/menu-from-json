
// --- ეს კოდი აკეთებს ჩეკბოქსის ყველას მონიშნვას, ჩეკბოქსები დატატებლით არ შემიქმნია, მხოლოდ ჰედრში შევქმნი
// -- დანრჩენი დატას გავყოლე პითონის ლუპით და ტავისით იქმნბა, ეს კი უყურებს ყველა ჩეკბოქს
$('#example thead #selectAll').on('change', function() {
  
    
    $('#example tbody input[type="checkbox"]').prop('checked', this.checked);
    
  })

// ეს არის დროის მიხედვით ძებნა, არ დამიტესტავს, პროექტში არ მქონდა ველიუ დროების
//   $('#example tbody').on('change', '.date-input', function() {
//     var rowIndex = table.cell($(this).closest('td, th')).index().row;

//     // Get the date value
//     var dateValue = $(this).val();

//     console.log('Row Index:', rowIndex);
//     console.log('Date Value:', dateValue);
//   });


  // ეს არის ძირითადი, დატატაბლე, თავის პაგინციონებით ზემოთაც მაქვს დატატბლეს კოდი
new DataTable('#example', {

   
    columnDefs: [
      { targets: 0, orderable: false } // ეს თიშავს 0 ინდქსზე სვეტზე სორტირებასს, ჩეკბოქსზე ამ შემთxვევაში
    ],
    
  

    // data: dataSet,
    /**<"botton"i>= informcia გვერდის, flp=გვერდების დანომვრა , ამყოფი ხაზი ამის შემდეგ გამეორება შეგიძ₾ია */
    dom: '  rt  <"bottom"flp>  ',
    // ნომრებთან ერთად ემატება next-last velebi
     
    pagingType: 'simple_numbers' , //'numbers' , მხოლოდ ციფრები ჩანს
    language: {
        paginate: {  // ეს არის გვერდებზე გადასასვლელი ღილაკები
            
            previous: '<button class="isrebi_1"><img src="static/icon/left.png" alt="<" >  </button>', //ესაა ისრებით ჩანაცვლება 
            next: '<button class="isrebi_1"><img src="static/icon/right.png" alt=">" >  </button>', // ესაა ისრებით ჩანაცვლება 
        }
    },
    
    paging: true,
    ordering: true, //  sorting
    searching: false, // ძებნა ველი გლობალი

    
  
    
    

});


// აქ თოგლე ღილაკიზე რა მოხდეს ეგა გაწერილი, სახელი შეივცვალოს და  დივ გაქროს-გააჩინოს
document.getElementById('toggleButton').addEventListener('click', function () {
   
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
     
  
  
});
// დიალოგის დახურვის ფუნქციონალი , ჯქუერის, მივაბი ჩემ შექმნილ დახურვის ღილაკზე, იდ ით  closeDialogBtn
$(document).ready(function () {
    function closeDialog() {
        $("#dialog").dialog("close");
    }
    $("#closeDialogBtn").on("click", function () {
        closeDialog();
      });
})

//  გაქრობა ტექსტის ჰტმლ ფილის მხარეს. ლეიბლი სადაც გვერდები რაოდნობა წერია ჩამონთვლში

