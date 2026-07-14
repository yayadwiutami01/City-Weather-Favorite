# 🌆 Favorite City Weather Dashboard

## Deskripsi Project
Favorite City Weather Dashboard adalah sebuah website yang digunakan untuk mencari dan menampilkan informasi cuaca dari berbagai kota secara real-time.

Pengguna dapat memasukkan nama kota yang ingin dicari, kemudian sistem akan mengambil lokasi kota tersebut secara otomatis dan menampilkan informasi cuaca seperti suhu, kelembapan, kecepatan angin, tekanan udara, kondisi cuaca, prakiraan cuaca beberapa hari ke depan, serta lokasi kota pada peta.

Project ini dibuat untuk mempelajari penggunaan API pada website, pengambilan data menggunakan JavaScript Fetch API, pengolahan data JSON, dan pembuatan dashboard yang interaktif.

---

# ✨ Fitur Website
## 🔍 Search Kota Otomatis

Pengguna dapat mencari kota berdasarkan nama kota.
Contoh:
- Jakarta
- Bandung
- Tokyo
- London
- Paris
- Seoul

Sistem akan mencari koordinat lokasi kota secara otomatis menggunakan API Geocoding.

---

## 🌤 Informasi Cuaca Saat Ini
Website menampilkan informasi cuaca terbaru dari kota yang dipilih.

Informasi yang ditampilkan:
- Nama kota
- Suhu saat ini
- Kondisi cuaca
- Icon cuaca otomatis
- Kelembapan udara
- Kecepatan angin
- Tekanan udara

---

## 📅 Forecast Cuaca 7 Hari
Website menyediakan perkiraan cuaca selama 7 hari.

Data yang ditampilkan:
- Tanggal
- Kondisi cuaca
- Suhu maksimum

---

## 🗺 Peta Lokasi Kota
Website menampilkan lokasi kota menggunakan peta interaktif.

Fitur peta:
- Menampilkan posisi kota
- Marker lokasi
- Popup nama kota
- Zoom lokasi

---

## 📈 Grafik Suhu
Data suhu ditampilkan menggunakan grafik agar pengguna dapat melihat perubahan suhu selama beberapa hari.

Grafik dibuat menggunakan Chart.js.

---

# 🛠 Teknologi Yang Digunakan

## Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap 5


## API

### Open-Meteo API
Digunakan untuk mengambil data:

- Koordinat lokasi kota
- Informasi cuaca
- Forecast harian


Dokumentasi:

https://open-meteo.com/en/docs

---

### Leaflet Maps
Digunakan untuk menampilkan lokasi kota pada peta.

Dokumentasi:

https://leafletjs.com/


---

### Chart.js
Digunakan untuk membuat grafik suhu.

Dokumentasi:

https://www.chartjs.org/

---

# 📂 Struktur Folder

```
FavoriteCityWeather/

│
├── index.html
│
├── style.css
│
├── script.js
│
└── README.md
```


Penjelasan file:

| File | Fungsi |
|---|---|
| index.html | Membuat struktur halaman website |
| style.css | Mengatur tampilan dan desain website |
| script.js | Mengatur program JavaScript dan koneksi API |
| README.md | Dokumentasi project |


---

# ⚙️ Cara Menjalankan Project

## 1. Download Project

Download atau clone repository.


Contoh:

```bash
git clone https://github.com/username/FavoriteCityWeather.git
```


---

## 2. Menjalankan Menggunakan XAMPP

1. Buka folder XAMPP

2. Masukkan project ke folder:

```
htdocs/FavoriteCityWeather
```

3. Jalankan Apache pada XAMPP

4. Buka browser:

```
http://localhost/FavoriteCityWeather
```


---

# 🔄 Alur Kerja Website

```
User memasukkan nama kota

          ↓

Open-Meteo Geocoding API mencari kota

          ↓

Mendapatkan Latitude dan Longitude

          ↓

Mengambil data cuaca

          ↓

Data ditampilkan pada dashboard

          ↓

Lokasi kota ditampilkan pada peta

          ↓

Data suhu ditampilkan dalam grafik
```


---

# 📡 API Endpoint

## 1. Geocoding API

Digunakan untuk mencari lokasi berdasarkan nama kota.


```
https://geocoding-api.open-meteo.com/v1/search
```


---

## 2. Weather Forecast API

Digunakan untuk mengambil data cuaca.


```
https://api.open-meteo.com/v1/forecast
```


---

# 📱 Tampilan Website

Website memiliki beberapa bagian:

- Navbar
- Hero section
- Form pencarian kota
- Informasi cuaca
- Forecast 7 hari
- Peta lokasi
- Grafik suhu


Website dibuat responsive sehingga dapat digunakan pada:

- Desktop
- Laptop
- Tablet
- Smartphone


---

# 🎯 Tujuan Project

Pembuatan website ini bertujuan untuk memahami:

- Penggunaan API pada website
- Fetch data menggunakan JavaScript
- Pengolahan data JSON
- Membuat tampilan dashboard
- Integrasi peta digital
- Membuat website responsive


---

# 👨‍💻 Developer

Nama:
```
Rara Dwi Utami
```

Project:
```
Favorite City Weather Dashboard
```

---

# 📄 License
Project ini dibuat untuk kebutuhan pembelajaran dan pengembangan website.