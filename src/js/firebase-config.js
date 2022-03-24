// Firebase Config

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";

import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyALARJjJPzgER_V6UuJxA04GGjJE6lCKdw",
    authDomain: "uswatunhasanah-1a643.firebaseapp.com",
    projectId: "uswatunhasanah-1a643",
    storageBucket: "uswatunhasanah-1a643.appspot.com",
    messagingSenderId: "551899711587",
    appId: "1:551899711587:web:738d2b32dc9f70332a9056",
    measurementId: "G-BH3ZCCZXTB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    setDoc,
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    deleteField
}
from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
const db = getFirestore();

import {
    getStorage,
    ref,
    getDownloadURL,
    listAll
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js";
const storage = getStorage();

// Load Basic

export async function banner() {
    var refs = doc(db, "Banner", "c31PPY8ORN5VkBNXAa5R");
    const docSnap = await getDoc(refs);
    const gambar = ref(storage, 'gs://uswatunhasanah-1a643.appspot.com/app/Banner/'+docSnap.data().Gambar);

    console.log(gambar)
    
    getDownloadURL(gambar)
    .then((url) =>{
        $('#banner').css("background-image", `url(${url})`)
    })
}

async function tentang() {
    var refs = doc(db, "Tentang", "7G5Qbnt7tdwuLTU95uEX");
    const docSnap = await getDoc(refs);
    const gambar = ref(storage, 'gs://uswatunhasanah-1a643.appspot.com/app/tentang/7G5Qbnt7tdwuLTU95uEX.png');
    
    getDownloadURL(gambar)
    .then((url) =>{
        $('#tentang-gambar').attr("src", url)
        $('#tentang-text').text(docSnap.data().Tentang)
        $('#tentang-footer').text(docSnap.data().Tentang)
        $('#alamat').text(docSnap.data().Alamat)
        $('#alamat-footer').text(docSnap.data().Alamat)
        $('#telp').text(docSnap.data().Telp)
        $('#telp-footer').text(docSnap.data().Telp)
        $('#email').text(docSnap.data().Email)
        $('#email-footer').text(docSnap.data().Email)
        $("#map").attr("src", docSnap.data().Maps)
    });
}

// Read All Data

export async function readDataPengumuman(dir = '.') {
    var refs = collection(db, "Pengumuman");
    const tabledatahtml = document.getElementById('card');
    const docSnap = await getDocs(refs);
    var tabledata = "";
    var duration = 600;

    $('#banner').css("background-image", `url()`)

    docSnap.forEach(data => {
        var text = data.data().Pengumuman.substring(0, 100) + '...';
        tabledata += `
        <div class="item py-3" data-aos="fade-up" data-aos-duration="${duration}">
            <a href="${dir}/?${data.id}">
                <div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 ease-linear duration-200">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">${data.data().Judul}</div>
                        <p class="text-gray-700 text-sm">
                            ${text}
                        </p>
                    </div>
                </div>
            </a>
        </div>`
    })
    tabledatahtml.innerHTML += tabledata
    duration += 200;
    owl_one()
}

export async function readDataLayanan(dir = '.') {
    var refs = collection(db, "Layanan");
    const tabledatahtml = document.getElementById('list-layanan');
    const docSnap = await getDocs(refs);
    var tabledata = "";
    var duration = 600;

    docSnap.forEach(data => {
        var text = data.data().Layanan.substring(0, 100) + '...';

        tabledata += `
        <div class="item py-3" data-aos="fade-up" data-aos-duration="${duration}">
            <a href="${dir}/?${data.id}">
                <div class="rounded overflow-hidden shadow-lg hover:scale-105 ease-linear duration-200">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">${data.data().Judul}</div>
                        <p class="text-gray-700 text-sm">
                            ${text}
                        </p>
                    </div>
                </div>
            </a>
        </div>`

        duration += 200;
    });
    tabledatahtml.innerHTML += tabledata
    owl_two()
}

export async function readDataBerita(dir = '.') {
    var refs = collection(db, "Berita");
    const tabledatahtml = document.getElementById('list-berita');
    const docSnap = await getDocs(refs);
    var tabledata = "";
    var duration = 600;

    docSnap.forEach(data => {
    
        var tanggal = new Date(data.data().Update.toDate())
        tanggal = `${tanggal.getFullYear()}-${('0' + (tanggal.getMonth()+1)).slice(-2)}-${('0' + (tanggal.getDate())).slice(-2)}`
        var text = data.data().Berita.substring(0, 100) + '...';

        tabledata += `
        <div class="item py-3" data-aos="fade-up" data-aos-duration="${duration}">
            <a href="${dir}/?${data.id}">
                <div class="rounded overflow-hidden shadow-lg hover:scale-105 ease-in-out duration-200 hover:cursor-pointer group">
                    <div class="px-6 py-4">
                        <div class="font-bold text-3xl mb-2">
                            <span class="pt-2 ease-linear duration-200 group-hover:border-t-stone-900 rounded">${data.data().Judul}</span>
                        </div>
                        <p class="text-gray-700 text-sm leading-6 my-5 text-justify">
                            ${text}
                        <p class="text-xs text-right">${tanggal}</p>
                    </div>
                </div>
            </a>
        </div>`
        duration += 200;
    });
    tabledatahtml.innerHTML += tabledata
    owl_three()
}

// Read Spesific Data

export async function ReadPengumuman(id) {
    var refs = doc(db, "Pengumuman", id);
    const docSnap = await getDoc(refs);
    
    var tanggal = new Date(docSnap.data().Update.toDate())
    tanggal = `${tanggal.getFullYear()}-${('0' + (tanggal.getMonth()+1)).slice(-2)}-${('0' + (tanggal.getDate())).slice(-2)}`
    const gambar = ref(storage, 'gs://uswatunhasanah-1a643.appspot.com/app/Pengumuman/'+docSnap.data().Gambar);

    getDownloadURL(gambar)
    .then((url) =>{ 
        $('#judul').text(docSnap.data().Judul),
        $('#text').text(docSnap.data().Pengumuman),
        $('#tanggal').text(tanggal),
        $('#banner').css("background-image", `url(${url})`)
    })
}

export async function ReadLayanan(id) {
    var refs = doc(db, "Layanan", id);
    const docSnap = await getDoc(refs);
    
    var tanggal = new Date(docSnap.data().Update.toDate())
    tanggal = `${tanggal.getFullYear()}-${('0' + (tanggal.getMonth()+1)).slice(-2)}-${('0' + (tanggal.getDate())).slice(-2)}`
    const gambar = ref(storage, 'gs://uswatunhasanah-1a643.appspot.com/app/Layanan/'+docSnap.data().Gambar);

    getDownloadURL(gambar)
    .then((url) =>{ 
        $('#judul').text(docSnap.data().Judul),
        $('#text').text(docSnap.data().Layanan),
        $('#tanggal').text(tanggal)
        $('#banner').css("background-image", `url(${url})`)
    })
}

export async function ReadBerita(id) {
    var refs = doc(db, "Berita", id);
    const docSnap = await getDoc(refs);
    
    var tanggal = new Date(docSnap.data().Update.toDate())
    tanggal = `${tanggal.getFullYear()}-${('0' + (tanggal.getMonth()+1)).slice(-2)}-${('0' + (tanggal.getDate())).slice(-2)}`
    const gambar = ref(storage, 'gs://uswatunhasanah-1a643.appspot.com/app/Berita/'+docSnap.data().Gambar);

    getDownloadURL(gambar)
    .then((url) =>{ 
        $('#judul').text(docSnap.data().Judul),
        $('#text').text(docSnap.data().Berita),
        $('#tanggal').text(tanggal)
        $('#banner').css("background-image", `url(${url})`)
    })
}

window.onload = tentang