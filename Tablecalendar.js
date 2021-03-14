
 const Dayofweek = [
    "SU",
    "M",
    "TU",
    "M",
    "TH",
    "F", 
    "SA",
]


const Monthsof = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun", 
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]

var dry = new Date();

const givecolor = [
    "De",
    "Ja",
    "Fe",
    "Ma",
    "Ap",
    "Ma",
    "Ju", 
    "Ju",
    "Au",
    "Se",
    "Oc",
    "No",
]

const monthNames = [ 
    "December" ,
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June",
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
]

var valueMonth = 0
$( document ).ready(function() {
    var table = Maketable(valueMonth);
    $('#calendarID').html($(table));
    $('#MounthYEAR').html(monthNames[valueMonth]);
    document.getElementById("prevbut").disabled = true;
    document.getElementById("prevbut").style.color = "red";

})

$( "#prevbut" ).click(function() {
    document.getElementById("nextbut").style.color = "black";
    valueMonth--;
    if(valueMonth < 1){
        document.getElementById("prevbut").disabled = true;
        document.getElementById("prevbut").style.color = "red";
    }
    var table = Maketable(valueMonth);
    $('#calendarID').html($(table));
    $('#MounthYEAR').html(monthNames[valueMonth]);
    
  });

  $( "#nextbut" ).click(function() {
    document.getElementById("prevbut").style.color = "black";
    valueMonth++;
      if(valueMonth > 10){
        document.getElementById("nextbut").disabled = true;
        document.getElementById("nextbut").style.color = "red";
      }
      var table = Maketable(valueMonth);
    $('#calendarID').html($(table));
    $('#MounthYEAR').html(monthNames[valueMonth]);
  });


  function Maketable(monthvalue){
    var monthlastdays = new Date(dry.getFullYear(), monthvalue, 0).getDate();
    var weekdays = new Date(dry.getFullYear(), monthvalue, 0).getDay();
    var monthdate = 1;
    
    var table = '<thead class="Headtab "><tr>';
    for(var i=0; i<7; i++){
        table += '<th>' + Dayofweek[i] + '</th>';
    }
    table += '</tr></thead>';
    table += '<tbody class="bodyoftable">';
    for (var p=0; p<6; p++){
        table += '<tr></tr>'
        for (var m = 0; m < 7; m++){
            if (calendar[monthvalue][monthdate] == undefined)
            {
                if (0 == weekdays){
                    if (monthdate <= monthlastdays){
                        table+= '<td>'+ monthdate +'</td>'
                        monthdate++;
                    }
                    else{
                        table+= '<td></td>'
                    }
                }
                else{
                    table+= '<td></td>';
                    weekdays -- ;
                }
            }
            else{
                if (0 == weekdays){
                    if (monthdate <= monthlastdays){
                        table+= '<td class="'+ givecolor[monthvalue] +' circle';
                        table+='">' + monthdate +'</td>';
                        monthdate++;
                    }
                    else{
                        table+= '<td></td>'
                    }
                }
                else{
                    table+= '<td></td>';
                    weekdays -- ;
                }
            }
        }
    }
    table += '</tbody>';
    console.log(table);
    return table;
}

  var calendar = {1: {1: "Сайхан амарна"}, 
2: {1: "Сагсны тэмцээнтэй", 3: "Шагнал гардуулна даа", 17: "Жавхлан багшийн лаб 2-ыг хийнэ"}, 
3: {2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ", 6: "Энд юу бичье дээ байз", 8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ"},
 4: {1: "Бүгдээрээ худлаа ярьцаагаагаарай"}, 
 5: {10: "Энэ сард ч ёстой юу ч болдоггүй сар даа"}, 
 6: {6: "Жавхлан багшийн төрсөн өдөр"},  
 7: {4: "Хичээл амарсаан ураа"}, 
 8: {1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ"}, 
 9: {1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа"}, 
 10: {13: "Сур сур бас дахин сур"}, 
 11: {2: "Сурсаар л бай"}, 
 0: {20: "Өвлийн семистер хаагдах нь дээ", 30: "Дүн гаргаж дууслаа баярлалаа баяртай"} }

        
