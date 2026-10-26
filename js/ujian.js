let currentQuestionIndex = 0;
let questions = [
    // Data dummy sementara untuk memastikan UI berjalan sebelum database soal siap
    { id: 1, question_text: "Apa ibu kota Indonesia?", option_a: "Bandung", option_b: "Jakarta", option_c: "Surabaya", option_d: "Medan", correct_answer: "B" }
];
let answers = {};

async function initUjian() {
    renderQuestion();
    startCamera();
}

function renderQuestion() {
    const q = questions[currentQuestionIndex];
    if(!q) return;
    document.getElementById('no-soal').innerText = `Soal ${currentQuestionIndex + 1} dari ${questions.length}`;
    document.getElementById('pertanyaan').innerText = q.question_text;
    
    const opsiContainer = document.getElementById('opsi-jawaban');
    opsiContainer.innerHTML = `
        <label><input type="radio" name="jawaban" value="A" ${answers[q.id]==='A'?'checked':''} onchange="simpanJawaban('${q.id}', 'A')"> A. ${q.option_a}</label><br>
        <label><input type="radio" name="jawaban" value="B" ${answers[q.id]==='B'?'checked':''} onchange="simpanJawaban('${q.id}', 'B')"> B. ${q.option_b}</label><br>
        <label><input type="radio" name="jawaban" value="C" ${answers[q.id]==='C'?'checked':''} onchange="simpanJawaban('${q.id}', 'C')"> C. ${q.option_c}</label><br>
        <label><input type="radio" name="jawaban" value="D" ${answers[q.id]==='D'?'checked':''} onchange="simpanJawaban('${q.id}', 'D')"> D. ${q.option_d}</label>
    `;
}

function simpanJawaban(qId, value) { answers[qId] = value; }
function nextQuestion() { if(currentQuestionIndex < questions.length - 1) { currentQuestionIndex++; renderQuestion(); } }
function prevQuestion() { if(currentQuestionIndex > 0) { currentQuestionIndex--; renderQuestion(); } }

function kumpulkanUjian() {
    if(confirm("Yakin ingin mengumpulkan ujian?")) {
        alert("Ujian selesai!");
        window.location.href = 'dashboard.html';
    }
}

async function startCamera() {
    const video = document.getElementById('video');
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if(video) video.srcObject = stream;
    } catch (err) {
        showToast("Kamera tidak diizinkan.", "error");
    }
}

function ambilSnapshot() {
    showToast("Snapshot berhasil diambil!");
}
