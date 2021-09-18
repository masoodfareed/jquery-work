$(document).ready(function()
{
   
    $('.circle').click(function()
    {
        var clickedItemClasses = $(this).attr('class'); 
        var arrayOfClasses = clickedItemClasses.split(' ');
        console.log(arrayOfClasses);
        var allColors = ['bg-success' , 'bg-danger' , 'bg-info' , 'bg-warning' , 'bg-primary' , 'bg-purple', 'bg-black'];
        var bgClass = arrayOfClasses.find(a => a.includes("bg-"));

        console.log(bgClass);
        $('body').addClass(bgClass);
        var index = allColors.indexOf(bgClass);
        allColors.splice(index , 1)
        for(j = 0; j < allColors.length; j++)
        {
            $('body').removeClass(allColors[j]);
        }
       
       
    })
    
    // $('#btn1').click(function()
    // {
    // //    var firstName =  $('#txt1').val();
    // //    var lastName = $('#txt2').val();
    // //    $('#txt3').val(firstName + ' ' + lastName)

    //     // $('input[type="number"]').css('color' , 'red')

    //     $('input[type = "text"]').attr('disabled' , true)
    // })
    // $('#btn2').click(function()
    // {
    //     $('input[type = "text"]').attr('placeholder' , "Enter text")
    // })
    // $('#btn3').click(function()
    // {
    //     $('input[type = "text"]').attr('required' , true)
    //     alert("required applied")
    // })
    // $('#btn4').click(function()
    // {
    //     $('input[type = "text"]').attr('required' , false)
    // })
    // $('input[type = "text"]').val('test');
    // $('input[type = "email"]').val("masood@busyqa.com")
    // $('input[type = "number"]').val("24234")
    // $('h1').text('demo');

//     var nextElement = $('h2').next();
//     $(nextElement).text('Masood')

//    var child =  $('ul').children();
//     $(child).text('masood');

//     var allNextElements = $('input[type = "text"]').prevAll();
//     $(allNextElements).val("masood");

    // var item3 = $('ul').children().get(2);
    // $(item3).text("Masood");

    // var element = $('ul').children().get(2);
    //var index = $('ul').children().index(element);
});

