$(document).ready(function() {
    var socket = io.connect();
    var users = $('#users');
    var nicknameForm = $('#setNick');
    var nicknameError = $('#nickError');
    var nicknameInput = $('#nickname');
    var messageForm = $('#send-message');
    var messageInput = $('#message');
    var messageContent = $('#chat');
    var clients = $('#clients');
    var name_list = ['test'];
    var newUsers = $('#newUsers');
    var printAgent = $('#printAgent');
    var canvas = $("#canvas");
    var user1 = $("#user1");
    var user2 = $("#user2");
    var user3 = $("#user3");
    var user4 = $("#user4");
    var user5 = $("#user5");
    var user6 = $("#user6_inn");
    var user7 = $("#user7_inn");
    var user_list = [];
    var person = prompt("Please enter your name");
    var count = 0;
    var t = [];
    var t_value;
    var t_key;
    var receiver;


        // function getObjectKeyIndex(obj, keyToFind) {
        //     var n = 0, key;

        //     for (key in obj) {
        //         if (key == keyToFind) {
        //             return n;
        //             console.log('this is the index of key i: '+n);
        //         }

        //          n++;
        //         }

        //         return null;
        //     }//function getObjectKeyIndex


    function clickMsg(){
        var target = $(this).attr('rel');
        $("#"+target).show().siblings().hide();
        console.log('clickMsg executed')
    }

    $(document).on('click', '.tablinks' , clickMsg);
    $(document).on('click', '#signout-btn', logout); //登出

    if (window.location.pathname === '/chat') {
        setTimeout(agentName, 100);
     //   setTimeout(loadMsg, 100);
    } // set agent name



    /*  =========================================================  */
//     function loadMsg() {
//         $('#clients').empty();
//         $('#canvas').empty();

//         database.ref('chats/users').on('value', snap => {
//             let dataArray = [];
//             let testVal = snap.val();
//             let myIds = Object.keys(testVal);
//             // console.log(testVal);


//             for (var i = 0; i < 5; i++) {
//                 $('#canvas').empty();  // "應該是很關鍵的CODE但須結合Dynamic ID"
//                 console.log(i);
//                 dataArray.push(snap.child(myIds[i]).val());
//                 console.log(dataArray);

//                 var namefound = (user_list.indexOf(dataArray[i].user) > -1); //if client exists

//                 if (namefound) {

//                     if (dataArray[i].user == "U0cbbba0d281fc5b095caaacac73fd1b5") {
//                         console.log('user1 found');
//                         user1.append(
//                             '<tr>' +
//                             '<td>' + dataArray[i].message + '</td>' +
//                             '<td>' + dataArray[i].messageTime + '</td>' +
//                             '</tr>'
//                         );
//                     } else if (dataArray[i].user == 'U376b6ec748e32f594cf2f6248800d094') {

//                         user2.append(
//                             '<tr>' +
//                             '<td>' + dataArray[i].message + '</td>' +
//                             '<td>' + dataArray[i].messageTime + '</td>' +
//                             '</tr>'
//                         );
//                     } else if (dataArray[i].user == "U52b2014e2905721d4072e65407653235") {
//                         user3.append(
//                             '<tr>' +
//                             '<td>' + dataArray[i].message + '</td>' +
//                             '<td>' + dataArray[i].messageTime + '</td>' +
//                             '</tr>'
//                         );
//                     } else if (dataArray[i].user == 'U3919284a3de4cd0c0b570090c3dc9943') {
//                         user4.append(
//                             '<tr>' +
//                             '<td>' + dataArray[i].message + '</td>' +
//                             '<td>' + dataArray[i].messageTime + '</td>' +
//                             '</tr>'
//                         );
//                     } else if (dataArray[i].user == "U976afdecc6ba7f25bc04c9c520e5490e") {

//                         user5.append(
//                             '<tr>' +
//                             '<td>' + dataArray[i].message + '</td>' +
//                             '<td>' + dataArray[i].messageTime + '</td>' +
//                             '</tr>'
//                         );
//                     }

//                 } //namefound
//                 else {
//                     $('#clients').append(
//                         '<tr>' +
//                         '<td><button id="' + dataArray[i].user + '" class="tablinks"><b>' + dataArray[i].user + '</b></button></td>' + '</tr>'
//                     );


//                     user_list.push(dataArray[i].user);


//                 } //else

//             } // for loop
// });//snap

// }//function

    //         // user1
    //         let arr1 = dataArray.filter(user1 => {
    //             return user1.user == 'U52b2014e2905721d4072e65407653235';
    //         });
    //         // console.log(arr1.length);
    //         for (let j = 0; j < arr1.length; j++) {
    //             user1.prepend(
    //                 '<tr>' +
    //                 '<td>U52b2014e2905721d4072e65407653235: ' + arr1[j].message + '</td>' +
    //                 // '<td>' + arr1[j].messageTime + '</td>' +
    //                 '</tr>'
    //             );

    //         }

    //         // user2
    //         let arr2 = dataArray.filter(user2 => {
    //             return user2.user == 'U376b6ec748e32f594cf2f6248800d094';
    //         });
    //         // console.log(arr1.length);
    //         for (let j = 0; j < arr2.length; j++) {
    //             user2.prepend(
    //                 '<tr>' +
    //                 '<td>U376b6ec748e32f594cf2f6248800d094: ' + arr2[j].message + '</td>' +
    //                 // '<td>' + arr1[j].messageTime + '</td>' +
    //                 '</tr>'
    //             );

    //         }

    //         // user3
    //         let arr3 = dataArray.filter(user3 => {
    //             return user3.user == 'Udeadbeefdeadbeefdeadbeefdeadbeef';
    //         });
    //         // console.log(arr1.length);
    //         for (let j = 0; j < arr3.length; j++) {
    //             user3.prepend(
    //                 '<tr>' +
    //                 '<td>Udeadbeefdeadbeefdeadbeefdeadbeef: ' + arr3[j].message + '</td>' +
    //                 // '<td>' + arr1[j].messageTime + '</td>' +
    //                 '</tr>'
    //             );

    //         }

    //         // user4
    //         let arr4 = dataArray.filter(user4 => {
    //             return user4.user == 'U3919284a3de4cd0c0b570090c3dc9943';
    //         });
    //         // console.log(arr1.length);
    //         for (let j = 0; j < arr4.length; j++) {
    //             user4.prepend(
    //                 '<tr>' +
    //                 '<td>U3919284a3de4cd0c0b570090c3dc9943: ' + arr4[j].message + '</td>' +
    //                 // '<td>' + arr1[j].messageTime + '</td>' +
    //                 '</tr>'
    //             );

    //         }

    //         // user5
    //         let arr5 = dataArray.filter(user5 => {
    //             return user5.user == 'U39dc316178dbca5a9e85f4a10aa4210e';
    //         });
    //         // console.log(arr1.length);
    //         for (let j = 0; j < arr5.length; j++) {
    //             user5.prepend(
    //                 '<tr>' +
    //                 '<td>U39dc316178dbca5a9e85f4a10aa4210e: ' + arr5[j].message + '</td>' +
    //                 // '<td>' + arr1[j].messageTime + '</td>' +
    //                 '</tr>'
    //             );

    //         }

    //         let arr6 = dataArray.filter(user6 => {
    //             return user6.user == 'U0cbbba0d281fc5b095caaacac73fd1b5';
    //         });
    //         // console.log(arr1.length);
    //         for (let j = 0; j < arr6.length; j++) {
    //             user6.prepend(
    //                 '<tr>' +
    //                 '<td>U0cbbba0d281fc5b095caaacac73fd1b5: ' + arr6[j].message + '</td>' +
    //                 // '<td>' + arr1[j].messageTime + '</td>' +
    //                 '</tr>'
    //             );

    //         }

    //         let arr7 = dataArray.filter(user7 => {
    //             return user7.user == 'Ue369116591fbd2d13a7eb5f0ff12547b';
    //         });
    //         // console.log(arr1.length);
    //         for (let j = 0; j < arr7.length; j++) {
    //             user7.prepend(
    //                 '<tr>' +
    //                 '<td>Ue369116591fbd2d13a7eb5f0ff12547b: ' + arr7[j].message + '</td>' +
    //                 '</tr>'
    //             );

    //         }


    //     }); //database

    // } //function

// HISTORY CHATS BUTTONS
    // $(document).on('click', "#U0cbbba0d281fc5b095caaacac73fd1b5", function() {
    //     user1.show();
    //     user2.hide();
    //     user3.hide();
    //     user4.hide();
    //     user5.hide();
    //     canvas1.hide();
    //     canvas2.hide();
    //     canvas3.hide()
    // });
    // $(document).on('click', "#U376b6ec748e32f594cf2f6248800d094", function() {
    //     user2.show();
    //     user1.hide();
    //     user3.hide();
    //     user4.hide();
    //     user5.hide();
    //     canvas1.hide();
    //     canvas2.hide();
    //     canvas3.hide()
    // });
    // $(document).on('click', "#U52b2014e2905721d4072e65407653235", function() {
    //     user3.show();
    //     user2.hide();
    //     user1.hide();
    //     user4.hide();
    //     user5.hide();
    //     canvas1.hide();
    //     canvas2.hide();
    //     canvas3.hide()
    // });
    // $(document).on('click', "#U3919284a3de4cd0c0b570090c3dc9943", function() {
    //     user4.show();
    //     user2.hide();
    //     user3.hide();
    //     user1.hide();
    //     user5.hide();
    //     canvas1.hide();
    //     canvas2.hide();
    //     canvas3.hide()
    // });
    // $(document).on('click', "#U976afdecc6ba7f25bc04c9c520e5490e", function() {
    //     user5.show();
    //     user2.hide();
    //     user3.hide();
    //     user4.hide();
    //     user1.hide();
    //     canvas1.hide();
    //     canvas2.hide();
    //     canvas3.hide()
    // });
    /*  ==================================================  */

    function agentName() {
        person;
        if (person != null) {
               socket.emit('new user', person, (data) => {
      if(data){

      } else {
        nicknameError.html('username is already taken');
      }
    });

            printAgent.append("Welcome <b>" + person + "</b>! You're now on board.");
        } //'name already taken'功能未做、push agent name 未做


    }

/*  =======  To indentify the right receiver  =====  */
    function defReceiver(){
        socket.emit('receiver', receiver, (data) => {

        });
        console.log('receiver sent to www');
    }

/*  =======  CODES FROM GITHUB: NICKNAME  ======  */

  nicknameForm.submit((e) => {
    e.preventDefault();
    socket.emit('new user', nicknameInput.val(), (data) => {
      if(data){
        $('#nickWrap').hide();
        $('#contentWrap').show();
      } else {
        nicknameError.html('username is already taken');
      }
    });
    nicknameInput.val('');
  });

  messageForm.submit((e) => {
    e.preventDefault();
    socket.emit('send message', messageInput.val(), (data) => {

      messageContent.append('<span class="error">' + data + "</span><br/>");
    });
    messageInput.val('');
  });

  socket.on('usernames', (data) => {
    var html = '';
    for(i=0; i < data.length; i++){
      html += data[i] + '<br />';
    }
    users.html(html);
  });

/*  =========== to assign the right receiverId  =========  */

    socket.on('send message', messageInput.val(), (data) =>{

    })

/*  =================================  */
// // nickname
//   person.submit((e) => {

//     e.preventDefault();
//     socket.emit('new user', person.val(), (data) => {

//     if (data){
//         console.log('nickname successfully input');
//       } else {
//         nicknameError.html('username is already taken');
//       }
//     });

//     person.val('');
//   });


    // socket.on('usernames', (data) => {
    //   var html = '';
    //   for(i=0; i < data.length; i++){
    //     html += data[i] + '<br />';
    //   }
    //   users.html(html);
    // });

    socket.on('new message', (data) => {
        displayMessage(data);
        displayClient(data);

        // messageContent.append('<b>' + data.name + ': </b>' + data.msg + "<br/>");
    });

    socket.on('whisper', (data) => {
        messageContent.append('<span class="whisper"><b>' + data.name + ': </b>' + data.msg + "</span><br/>");
    });

    // socket.on('load old messages', docs => {
    //   for(i=0; i < data.length; i++){
    //     displayMessage(docs[i]);
    //   }
    // });



    function displayMessage(data) {




        let chat_number = 1;
        var i = data.name;

        // console.log(data);

        // } else {

        //    var namefound = (t_value > -1); //if client existed retrieved by key value
        //    console.log(namefound);

         var namefound = (name_list.indexOf(i) > -1); //if client exists
        /*     var n, dataName ;
             dataName = document.getElementsById(data.name);
             for (n = 0; n < dataName.length; n++) { */

        //  messageContent.append('<b>' + data.name + ': </b>' + data.msg + "<br/>");

        if (namefound == true) {
            //append new msg in existed window
            console.log('im: '+i);

            console.log('namefound');



                if(i == person && data.id !== undefined){
                    console.log('yes existed agent msg identified');
                    var n;
                    for (n=0; n < t_value+1; n++){
                        console.log('yes it gets to the for loop');
                        console.log('n is currently looping to')
                        console.log(n);
                        console.log('Is n already == t_value?')
                        console.log(n == t_value);

                        var k = t[n].key;
                        console.log('the below is t[n].key');
                        console.log(t[n].key);

                        if ( $("#"+k).is(':visible')){
                            console.log('yes it knows what is visible');
                            var gotIt;
                            gotIt = k;
                            console.log('the following is gotIt');
                            console.log(gotIt);
                            receiver = gotIt;
                            console.log('tell me whats receiver');
                            console.log(receiver);
                            defReceiver();

                            $("#"+gotIt).append("<p><strong>"+data.name+": </strong>"+ data.msg + "<br/></p>");
                            console.log('agent reply appended to according canvas');

                           }//if if
                        else{
                            console.log('no the n is not visible, do it again')

                        }
                        }//for

                    }//if agent




             else if (i){

                    $("#"+i).append("<p><strong>"+data.name+": </strong>"+ data.msg + "<br/></p>");
                    console.log('appended to according canvas');
                }//if

                // else if (i == person && data.id != undefined){

                //                                 for (var n=0; n < length.t_value; n++){

                //                 var k = t[n].key;


                //         if ($("#"+k).style.dispaly="block"){
                //             $("#"+k).append("<p><strong>"+data.name+": </strong>"+ data.msg + "<br/></p>");
                //             console.log('agent reply appended to according canvas')
                //             }//if block

                //         }//for


                // }//else if i == agent


//             if ( i == 'U0cbbba0d281fc5b095caaacac73fd1b5') {
//                 console.log('found1');

//                 canvas1.append("<p>" + data.msg + "<br/></p>");


//             } else if (i == 'U52b2014e2905721d4072e65407653235') {

//                 console.log('found2');
//                 canvas2.append("<p>" + data.msg + "<br/></p>");


//             } else if (i =='U636956e3c62bdeecab26ea39be27cccc') {

//                 console.log('found3');
//                 canvas3.append("<p>" + data.msg + "<br/></p>");


// } else if (i === "Ue369116591fbd2d13a7eb5f0ff12547b") {


//             $('#user7').show();
//             user7.prepend('<tr>' +
//                 '<td>Ue369116591fbd2d13a7eb5f0ff12547b: ' + data.msg + '</td>' + '</tr>');


//          }//else if

    // else{


    //     chatNumberNeeded == name_list.indexOf(i)
    //     var k = 'chat'+chatNumberNeeded
    //     theid = $('existed but undefined')
    //     return theid


    //     console.log('msg appended');
    //     tooadd.append("<p>" + data.msg + "<br/></p>");


    // }//else

     }//close if
     else{

            console.log('new msg append to canvas');
//             if (i == 'U0cbbba0d281fc5b095caaacac73fd1b5'){
//                 console.log('append msg to canvas1');
//                 canvas1.append(
//                 "<span onclick=\"this.parentElement.style.display=\'none\'\" class=\"topright\">x</span>" +
//                 "<div id=\"" + data.name + "\">" +
//                 "<h7>" +
//                 "<strong>" + data.name + ":</strong></h7><br/><p>" + data.msg + "<br/></p></div>"


//                     );
//             }else if (i == 'U636956e3c62bdeecab26ea39be27cccc'){
//                 canvas3.append(
//                 "<span onclick=\"this.parentElement.style.display=\'none\'\" class=\"topright\">x</span>" +
//                 "<div id=\"" + data.name + "\">" +
//                 "<p>" +
//                 "<strong>" + data.name + ": </strong><br/>" + data.msg + "<br/></p></div>"
// );


//             }else if (i == 'U52b2014e2905721d4072e65407653235'){
//                 console.log('append msg to canvas2');

//                 canvas2.append(
//                 "<span onclick=\"this.parentElement.style.display=\'none\'\" class=\"topright\">x</span>" +
//                 "<div id=\"" + data.name + "\">" +
//                 "<p>" +
//                 "<strong>" + data.name + ": </strong><br/>" + data.msg + "<br/></p></div>"
// );

//         }else{



            canvas.append(




                "<div id=\"" + data.name + "\" class=\"tabcontent\">" +
                "<span onclick=\"this.parentElement.style.display=\'none\'\" class=\"topright\">x</span>" +
                "<p>" +
                "<strong>" + data.name + ": </strong>" + data.msg + "<br/></p></div>");// close append


        // }


    }//else

// }// if

}//function

    function displayClient(data) {
        var i = data.name;
        var namefound = (name_list.indexOf(i) > -1);
 //       var namefound = (t_value > -1); //if client existed retrieved by key value


        if (namefound) {
            console.log('user existed');

        }else if (i == 'notice'){
            console.log('notice sent');

        }else {
           if (i == person){
                    console.log('agent username loaded');
                    name_list.push(data.name);
                    t.push({key:data.name, value:count});
                    console.log(t);
                    t_value = t[count].value ;
                    console.log('the below is t_value');
                    console.log(t_value);
                    t_key = t[count].key;
                    count ++;

                    console.log('is data.name == person? \(should be yes coz were now in the if agent');
                    console.log(i == person);

                    if   (data.name == person && data.id != undefined){
                                console.log('yes agent msg identified');

                               for (var n=0; n < t_value; n++){
                                console.log('yes it gets to the for loop');


                                var k = t[n].key;


                        if ( $("#"+k).is(':visible')){
                            console.log('yes it knows it is visible');
                            var gotIt;
                            gotIt = k;
                            console.log('the following is gotIt');
                            console.log(gotIt);
                            receiver = gotIt;
                            console.log('Tell me whats receiver');
                            console.log(receiver);
                            defReceiver();


                            $("#"+gotIt).append("<p><strong>"+data.name+": </strong>"+ data.msg + "<br/></p>");
                            console.log('agent reply appended to according canvas');


                           }//if if

                        }//for

                    }//if agent



           }else{



            clients.append("<b><button  rel=\""+data.name+"\" class=\"tablinks\"> " + data.name + "</button></b>");
            name_list.push(data.name);
            t.push({key:data.name, value:count});
            console.log(t);
            t_value = t[count].value ;
            t_key = t[count].key;
            count ++;








//            console.log(name_list);
        }//close else
        }//close else

        //     $(document).on('click', "#U0cbbba0d281fc5b095caaacac73fd1b5", function() {
        //     canvas1.show();
        //     canvas2.hide();
        //     canvas3.hide();
        //     user1.hide();
        //     user2.hide();
        //     user3.hide();
        //     user4.hide();
        //     user5.hide()
        // });
        // $(document).on('click', "#U52b2014e2905721d4072e65407653235", function() {
        //     canvas2.show();
        //     canvas1.hide();
        //     canvas3.hide();
        //     user1.hide();
        //     user2.hide();
        //     user3.hide();
        //     user4.hide();
        //     user5.hide()
        // });
        // $(document).on('click', "#U636956e3c62bdeecab26ea39be27cccc", function() {
        //     canvas3.show();
        //     canvas1.hide();
        //     canvas2.hide();
        //     user3.hide();
        //     user2.hide();
        //     user1.hide();
        //     user4.hide();
        //     user5.hide()
        // });

    }//close client function

}); //document ready close tag
