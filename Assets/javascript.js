$(document).ready(function(){
    //display current day and time
    $('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    
    //update our timer by the second
    function updateTime(){
        //take current time add 1 second plus current time using setInterval
        setInterval(() => {
        $('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
        }, 1000);
    }; 
    updateTime();
    
    //capture data
    $('.saveBtn').on('click', function(){
        //selecting the value of each textfield corresponging to its button
        var text = $(this).siblings('.description').val();

        //selecting the time ID for each timeblock
        var time = $(this).siblings('.hour').attr('id');
       
        //add collected data to storage, we are using time as our key
        localStorage.setItem(time, text);

    }); 

    //fetch saved data from Local Storage using its key, use timeblock IDs to append each corresponding value
    $('#9').siblings('.description').val(localStorage.getItem('9'));
    $('#10').siblings('.description').val(localStorage.getItem('10'));
    $('#11').siblings('.description').val(localStorage.getItem('11'));
    $('#12').siblings('.description').val(localStorage.getItem('12'));
    $('#13').siblings('.description').val(localStorage.getItem('13'));
    $('#14').siblings('.description').val(localStorage.getItem('14'));
    $('#15').siblings('.description').val(localStorage.getItem('15'));
    $('#16').siblings('.description').val(localStorage.getItem('16'));
    $('#17').siblings('.description').val(localStorage.getItem('17'));

   //Text area changes colors as time passes
    function colorTime (){
        //get current hour
        var currentHour = moment().hour();
        //loop each textarea. Compare its time ( using its ID) vs the current time
        $('.description').each(function(){
            //convert string value of id to number
            var blockHour = parseInt($(this).attr('id'));
            //logic comparing ID vs currentHour. Use add/remove class to color them accordingly
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
    //make it so we run the color function every hour
    setInterval(colorTime,60000);
});    



