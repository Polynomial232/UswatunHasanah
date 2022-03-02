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

export async function readData(dir = '.') {
    var refs = collection(db, "Pengumuman");
    const tabledatahtml = document.getElementById('card');
    const docSnap = await getDocs(refs);
    var tabledata = "";

    docSnap.forEach(data => {
        var text = data.data().Pengumuman.substring(0, 100) + '...';

        tabledata += `
        <div class="item py-3" data-aos="fade-up" data-aos-duration="600">
            <a href="${dir}/?${data.id}">
                <div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 ease-linear duration-200">
                    <img class="w-full h-56 object-cover object-top"
                        src="https://www.grahanusantara.co.id/dir/gambar/cow-goat_57812-2.jpg" alt="">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">${data.data().Judul}</div>
                        <p class="text-gray-700 text-sm">
                            ${text}
                        </p>
                    </div>
                </div>
            </a>
        </div>`
    });
    tabledatahtml.innerHTML += tabledata
}

export async function readpengumuman(id) {
    var refs = doc(db, "Pengumuman", id);
    const docSnap = await getDoc(refs);

    $('#judul').text(docSnap.data().Judul),
    $('#text').text(docSnap.data().Pengumuman),
    $('#tanggal').text('03-02-2022')
}