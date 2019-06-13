let aValue = localStorage.getItem('newUser');
let currentUser = aValue.split(',')[1].split(':')[1].replace(/['"]+/g, '');
let currentEmail = aValue.split(',')[2].split(':')[1].replace(/['"]+/g, '');

var nameOfUser = $('#currentUser');
var allEvents = $('#allEvents');
var listPugs = $('#listPugs');
var events;
$(document).ready(function () {

    
    $.get('/findall', function (data) {
        type: 'GET'
        events = data;
        initializeEvents(events);
    })

    function userName() {
        let name = $('<h4>');
        name.addClass('card-title');
        name.addClass('text-center');
        name.text(currentUser);
        nameOfUser.append(name);
    }

    userName();

    function initializeEvents(events) {
        
        allEvents.empty();
        var eventsToAdd = [];
        for (let i = 0; i < events.length; i++) {
            eventsToAdd.push(createNewEvent(events[i]))
       
        }
        allEvents.prepend(eventsToAdd);
        // console.log(eventsToAdd);
    }

  
    

    function createNewEvent(events) {
        var m = moment(events.StartTime, 'HH-mm-ss').format('h:mm A');
        let event = $('<div>');
        let body = $('<div>');
        let city = $('<p>');
        let name = $('<h4>');
        let time = $('<p>');
        let descript = $('<p>');
        let btn = $('<button>');
        event.addClass("card");
        event.addClass("eventRendering");
        body.addClass('card-body');
        time.addClass('float-right');
        name.addClass('bold text-center p-1 border-bottom');
        city.addClass('bold');
        btn.attr('type', 'button');
        btn.attr('event', events.name);
        btn.attr('time', events.StartTime);
        btn.attr("email", currentEmail);  
        btn.addClass('join');
        btn.val(events.id);
        btn.addClass('btn btn-primary text-center mx-auto');
        btn.html('<i class="far mr-1 fa-user-plus"></i>Join');
        descript.text(events.description);
        time.text(m);
        name.html(events.name);
        city.text(events.city);
        body.append(name);
        body.append(time);
        body.append(city);
        body.append(descript);
        body.append(btn);
        // body.append(delBtn);
        event.append(body);
        return event;
    }
  

var emptyArr = [];
    $(document).on('click', '.join', function (event) {
       event.preventDefault();
        var time = $(this).attr('time');
        var name = $(this).attr('event');
        var email = $(this).attr('email');
        var id = $(this).val();
        emptyArr.push(id);
        
        var m = moment(time, 'HH-mm-ss').format('h:mm A');
        let myPug = $('<li>');
        myPug.text(name + ' ' + m);
        myPug.addClass('list-group border-bottom');
        myPug.attr('value', id);
        myPug.addClass('p-2');
        let delBtn = $('<button type="button" class="mt-3 border-bottom deleteEvent btn btn-danger text-center mx-auto" value="' + id + '"><i class="fas fa-user-slash"></i>  Remove</button>');
        listPugs.append(myPug);
        myPug.append(delBtn)
        $.get('/sendmail/'+time+'/'+name + '/' +email, function(){
            type: 'GET'              
          })
    });

    $(document).on('click', '.deleteEvent', function (event) {
        $(this).closest('li').remove();
    });




    $('#goTime').on('click', function (event) {
        event.preventDefault();
        var newEvent = {
            name: $('#materialContactFormName').val().trim(),
            city: $('#event_Loc').val().trim(),
            StartTime: $('#event_Time').val(),
            description: $('#form79textarea').val().trim()
        }
        $.post('/newevent', {
            type: 'POST',
            data: newEvent
        }).then(function (result) {
            location.reload();
        });
    })
})