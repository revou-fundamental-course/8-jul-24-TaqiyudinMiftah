// index.js

function calculateBMI() {
    // input value
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // ubah cm ke meters
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validasi input
    if (!gender) {
        alert('Pilih jenis kelamin.');
        return false;
    }

    if (isNaN(weight) || isNaN(age) || isNaN(height)) {
        alert('Isi semua field yang diperlukan dengan benar.');
        return false;
    }

    // Calculate BMI
    const bmi = (weight / (height * height));

    // Hasil elements
    const bmiResult = document.querySelector('.bmi-result h3');
    const bmiCategory = document.querySelector('.bmi-result p');
    const resultDetails = document.querySelector('.right');
    const article = document.querySelector('.right article');
    const p = document.querySelector('.hasil');

    // BMI category
    let category1, category2, category3;
    if (bmi < 18.5) {
        category1 = 'kekurangan berat badan';
        category2 = 'Kekurangan berat badan dapat menyebabkan masalah kesehatan serius seperti kekurangan nutrisi, penurunan massa otot, dan menurunkan kekebalan tubuh. Orang dengan kekurangan berat badan sering kali perlu meningkatkan asupan kalori dengan cara yang sehat. Pilih makanan yang kaya akan energi, seperti lemak sehat dari alpukat, kacang-kacangan, dan minyak zaitun. Konsumsi protein yang cukup untuk membantu membangun dan mempertahankan massa otot. Selain itu, fokus pada porsi yang lebih besar dari makanan sehat seperti nasi merah, kacang-kacangan dan juga sesuai'
        category3 = 'Kurang dari 18.5'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category1 = 'berat badan normal';
        category2 = 'Memiliki berat badan normal berarti proporsi lemak tubuh Anda sesuai dengan tinggi badan dan usia Anda. Ini penting untuk kesehatan umum dan kesejahteraan. Untuk mempertahankan berat badan normal, penting untuk menjaga pola makan sehat dengan memilih makanan yang seimbang, mengontrol porsi, dan tetap aktif secara fisik. Pilihlah makanan yang kaya akan nutrisi seperti buah-buahan, sayuran, protein sehat, dan karbohidrat kompleks. Lakukan aktivitas fisik secara teratur untuk menjaga kebugaran dan keseimbangan energi tubuh.'
        category3 = 'antara 18.5 dan 25'
    } else if (bmi >= 25 && bmi <= 29.9) {
        category1 = 'berat badan berlebih';
        category2 = 'Seseorang dikatakan berada dalam kondisi overweight jika memiliki lebih banyak lemak tubuh daripada yang sehat untuk tinggi badan mereka. Ini dapat meningkatkan risiko masalah kesehatan seperti diabetes tipe 2, penyakit jantung, dan tekanan darah tinggi. Cara terbaik untuk mengatasi overweight adalah dengan mengadopsi pola makan seimbang yang mengandung lebih sedikit kalori daripada yang Anda bakar, serta meningkatkan aktivitas fisik. Hindari makanan olahan, gula tambahan, dan lemak jenuh. Gantilah dengan lebih banyak sayur-sayuran, buah-buahan, sumber protein tanpa lemak, dan biji-bijian utuh. Olahraga teratur seperti berjalan cepat, bersepeda, atau berenang juga dapat membantu membakar kalori lebih banyak.'
        category3 = 'antara 25 dan 30'
    } else {
        category1 = 'obesitas';
        category2 = 'Obesitas adalah kondisi ketika seseorang memiliki BMI 30 atau lebih. Ini menunjukkan akumulasi lemak tubuh yang berlebihan, yang dapat meningkatkan risiko serius terhadap kesehatan seperti penyakit jantung, diabetes tipe 2, dan masalah sendi. Mengelola obesitas membutuhkan pendekatan holistik yang melibatkan perubahan gaya hidup seperti makan sehat dengan porsi terkontrol, meningkatkan aktivitas fisik secara teratur, dan mungkin juga mempertimbangkan bantuan medis seperti konsultasi dengan ahli gizi atau program pengelolaan berat badan yang terstruktur.'
        category3 = 'lebih dari 30'
    }

    // Menampilkan results
    bmiResult.textContent = bmi.toFixed(1);
    bmiCategory.textContent = `Anda memiliki ${category1}`;
    p.textContent = `Hasil BMI ${category3}`;
    article.textContent = category2;
    resultDetails.style.display = 'block';

    // Prevent form submission
    return false;
}

function resetForm() {
    // Hide the result section
    document.querySelector('.right').style.display = 'none';
}
