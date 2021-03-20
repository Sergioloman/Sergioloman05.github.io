$(document).ready(function(){
    //display current day and time
    $('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    //update time live
    
    function updateTime(){
        //take current time add 1 second plus current time
        setInterval(() => {
        $('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
        }, 1000);
    }; 
    updateTime();
    
    //capture text field to a variable by clicking save
    
    $('.saveBtn').on('click', function(){
        var text = $(this).siblings('.description').val();
        console.log(text);  

        var time = $(this).siblings('.hour').attr('id');
        console.log(time);
        //add data to local storage
        localStorage.setItem(time, text);

    }); 
    $('#9').siblings('.description').val(localStorage.getItem('9'));
    $('#10').siblings('.description').val(localStorage.getItem('10'));
    $('#11').siblings('.description').val(localStorage.getItem('11'));
    $('#12').siblings('.description').val(localStorage.getItem('12'));
    $('#13').siblings('.description').val(localStorage.getItem('13'));
    $('#14').siblings('.description').val(localStorage.getItem('14'));
    $('#15').siblings('.description').val(localStorage.getItem('15'));
    $('#16').siblings('.description').val(localStorage.getItem('16'));
    $('#17').siblings('.description').val(localStorage.getItem('17'));


   //here we need to be able to set the color of the text area rather than time block
   
    function colorTime (){
        var currentHour = moment().hour();
        $('.description').each(function(){
            var blockHour = parseInt($(this).attr('id'));
            if (blockHour < currentHour){
                $(this).addClass('past');
            }
            else if (blockHour === currentHour){
                $(this).removeClass('past');
                $(this).addClass('present');
            }else{
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
            }
        })
    } 
    colorTime()

    setInterval(colorTime,60000);



});    



