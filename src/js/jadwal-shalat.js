var now = new Date()
now = `${now.getFullYear()}-${('0' + (now.getMonth()+1)).slice(-2)}-${now.getDate()}`

$.ajax({
    url: 'https://api.banghasan.com/sholat/format/json/jadwal/kota/667/tanggal/' + now,
    type: 'get',
    dataType: 'json',
    success: function (e) {
        var jadwal = e.jadwal.data

        $('#imsak').text(jadwal.imsak)
        $('#subuh').text(jadwal.subuh)
        $('#dhuha').text(jadwal.dhuha)
        $('#dzuhur').text(jadwal.dzuhur)
        $('#ashar').text(jadwal.ashar)
        $('#maghrib').text(jadwal.maghrib)
        $('#isya').text(jadwal.isya)

    }
})