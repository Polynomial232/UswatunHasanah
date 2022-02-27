const getCurrentTimeDate = () => {

    let currentTimeDate = new Date();

    var weekday = new Array(7);
    weekday[0] = "Minggu";
    weekday[1] = "Senin";
    weekday[2] = "Selasa";
    weekday[3] = "Rabu";
    weekday[4] = "Kamis";
    weekday[5] = "Jumat";
    weekday[6] = "Sabtu";

    var month = new Array();
    month[0] = "Januari";
    month[1] = "Februari";
    month[2] = "Maret";
    month[3] = "April";
    month[4] = "Mei";
    month[5] = "Juni";
    month[6] = "Juli";
    month[7] = "Agustus";
    month[8] = "September";
    month[9] = "Ocotber";
    month[10] = "November";
    month[11] = "Desember";

    var hours = currentTimeDate.getHours();

    var minutes = currentTimeDate.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var seconds = currentTimeDate.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var currentTime = `${hours}:${minutes}:${seconds}`;
    var currentDay = weekday[currentTimeDate.getDay()] + ',';

    var currentDate = currentTimeDate.getDate();
    var currentMonth = month[currentTimeDate.getMonth()];
    var CurrentYear = currentTimeDate.getFullYear();

    var fullDate = `${currentDate} ${currentMonth} ${CurrentYear}`;


    $("#time").text(currentTime);
    $("#day").text(currentDay);
    $("#date").text(fullDate);

    setTimeout(getCurrentTimeDate, 1000);

}
getCurrentTimeDate();