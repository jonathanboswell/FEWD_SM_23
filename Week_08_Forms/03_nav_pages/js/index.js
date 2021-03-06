$('section').hide();
$('#home').show();

$(function() {
    $('#homeLink').click(function(){
        $('section').hide();
        $('#home').show();
    });
    
    $('li').click(function(){
        //get the name from the <li> tag
        var name = $(this).attr('name');

        //make the clicked <li> "active"
        $('li').removeClass();
        $(this).addClass('active');

        //show the corresponding <section>
        $('#' + name).show();
    });
});