/* =====================================
   القراية والكورة AI - script.js
===================================== */

// 1. قاعدة بيانات الدروس
const lessonsData = {
  "ابتدائي": {
    "الرياضيات": [
      {
        title: "الجمع والطرح",
        content: "الجمع هو إضافة عدد إلى عدد آخر.\nمثال: 5 + 3 = 8.\nالطرح هو إنقاص عدد من عدد آخر.\nمثال: 9 - 4 = 5."
      },
      {
        title: "الضرب",
        content: "الضرب هو جمع متكرر.\nمثال: 3 × 4 = 12."
      }
    ],
    "اللغة العربية": [
      {
        title: "الاسم والفعل والحرف",
        content: "الاسم يدل على إنسان أو حيوان أو شيء.\nالفعل يدل على حدث.\nالحرف يربط بين الكلمات."
      },
      {
        title: "الجملة الاسمية",
        content: "الجملة الاسمية تبدأ باسم وتتكون غالباً من مبتدأ وخبر.\nمثال: التلميذ مجتهد."
      }
    ],
    "العلوم": [
      {
        title: "أجزاء جسم الإنسان",
        content: "يتكون جسم الإنسان من أعضاء مختلفة، مثل القلب والرئتين والدماغ.\nلكل عضو وظيفة مهمة."
      }
    ]
  },

  "إعدادي": {
    "الرياضيات": [
      {
        title: "الأعداد النسبية",
        content: "الأعداد النسبية هي الأعداد التي يمكن كتابتها على شكل كسر a/b حيث b لا يساوي الصفر.\nمثال: 1/2 و -3/4."
      },
      {
        title: "المعادلات",
        content: "المعادلة تحتوي على مجهول.\nمثال: x + 5 = 12.\nإذن x = 7."
      }
    ],
    "الفيزياء": [
      {
        title: "السرعة",
        content: "السرعة تساوي المسافة مقسومة على الزمن.\nالقانون: V = d / t."
      }
    ],
    "اللغة العربية": [
      {
        title: "أنواع الجمل",
        content: "الجملة الاسمية تبدأ باسم، والجملة الفعلية تبدأ بفعل."
      }
    ]
  },

  "ثانوي": {
    "الرياضيات": [
      {
        title: "الدوال",
        content: "الدالة علاقة تربط كل عنصر من مجموعة بعنصر واحد من مجموعة أخرى.\nمثال: f(x) = 2x + 3."
      },
      {
        title: "النهايات",
        content: "النهاية تصف القيمة التي تقترب منها الدالة عندما يقترب المتغير من قيمة معينة."
      }
    ],
    "الفيزياء": [
      {
        title: "قوانين نيوتن",
        content: "القانون الأول: مبدأ العطالة.\nالقانون الثاني: مجموع القوى يساوي الكتلة مضروبة في التسارع F = m × a.\nالقانون الثالث: لكل فعل رد فعل مساوٍ له في المقدار ومعاكس له في الاتجاه."
      }
    ],
    "علوم الحياة والأرض": [
      {
        title: "الخلية",
        content: "الخلية هي الوحدة الأساسية لبناء الكائنات الحية.\nتحتوي الخلية على مكونات مختلفة مثل الغشاء والسيتوبلازم والنواة."
      }
    ]
  },

  "جامعة": {
    "الرياضيات": [
      {
        title: "التفاضل",
        content: "التفاضل يدرس معدل تغير الدالة.\nمشتقة الدالة f(x) = x² هي f'(x) = 2x."
      }
    ],
    "الإعلاميات": [
      {
        title: "مقدمة في JavaScript",
        content: "JavaScript لغة برمجة تستعمل لإضافة التفاعل إلى صفحات الويب.\nمثال:\nlet name = 'Ali';\nconsole.log(name);"
      }
    ]
  }
};


// 2. قاعدة بيانات أسئلة الامتحانات
const quizData = [
  {
    question: "ما ناتج 5 + 7 ؟",
    answers: ["10", "12", "14", "15"],
    correct: 1
  },
  {
    question: "ما هي عاصمة المغرب؟",
    answers: ["الرباط", "الدار البيضاء", "مراكش", "فاس"],
    correct: 0
  },
  {
    question: "ما هو الكوكب المعروف بالكوكب الأحمر؟",
    answers: ["الأرض", "المشتري", "المريخ", "الزهرة"],
    correct: 2
  },
  {
    question: "ما ناتج 3 × 4 ؟",
    answers: ["7", "10", "12", "15"],
    correct: 2
  },
  {
    question: "ما اللغة المستعملة لتفاعل صفحات الويب؟",
    answers: ["HTML", "CSS", "JavaScript", "SQL"],
    correct: 2
  }
];


// 3. مباريات تجريبية
const footballMatches = [
  {
    home: "المغرب",
    away: "إسبانيا",
    competition: "مباراة دولية",
    date: "بيانات تجريبية",
    status: "قادم",
    score: "-"
  },
  {
    home: "فرنسا",
    away: "إنجلترا",
    competition: "مباراة دولية",
    date: "بيانات تجريبية",
    status: "قادم",
    score: "-"
  },
  {
    home: "ريال مدريد",
    away: "برشلونة",
    competition: "الدوري الإسباني",
    date: "بيانات تجريبية",
    status: "انتهت",
    score: "2 - 1"
  },
  {
    home: "مانشستر سيتي",
    away: "ليفربول",
    competition: "الدوري الإنجليزي",
    date: "بيانات تجريبية",
    status: "انتهت",
    score: "1 - 1"
  }
];


// 4. عناصر الصفحة
const levelSelect = document.getElementById("level");
const yearSelect = document.getElementById("year");
const subjectSelect = document.getElementById("subject");
const lessonSearch = document.getElementById("lessonSearch");
const lessonsContainer = document.getElementById("lessons");
const lessonContent = document.getElementById("lessonContent");

const quizContainer = document.getElementById("quiz");

const teamSearch = document.getElementById("teamSearch");
const matchFilter = document.getElementById("matchFilter");
const matchesList = document.getElementById("matchesList");


// 5. تحميل المواد حسب المستوى
function loadSubjects() {
  if (!levelSelect || !subjectSelect) return;

  const level = levelSelect.value;
  const subjects = Object.keys(lessonsData[level] || {});

  subjectSelect.innerHTML = "";

  subjects.forEach(subject => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });

  showLessons();
}


// 6. عرض الدروس
function showLessons() {
  if (!lessonsContainer || !levelSelect || !subjectSelect) return;

  const level = levelSelect.value;
  const subject = subjectSelect.value;

  const lessons = lessonsData[level]?.[subject] || [];
  const search = lessonSearch?.value.trim().toLowerCase() || "";

  lessonsContainer.innerHTML = "";

  const filteredLessons = lessons.filter(lesson =>
    lesson.title.toLowerCase().includes(search)
  );

  if (filteredLessons.length === 0) {
    lessonsContainer.textContent = "لم يتم العثور على دروس.";
    return;
  }

  filteredLessons.forEach((lesson, index) => {
    const card = document.createElement("div");
    card.className = "lesson-card";

    const title = document.createElement("h3");
    title.textContent = lesson.title;

    const button = document.createElement("button");
    button.textContent = "افتح الدرس";
    button.addEventListener("click", () => {
      openLesson(lesson.title, lesson.content);
    });

    card.append(title, button);
    lessonsContainer.appendChild(card);
  });
}


// 7. فتح الدرس
function openLesson(title, content) {
  if (!lessonContent) return;

  lessonContent.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.textContent = content;

  lessonContent.append(heading, paragraph);

  lessonContent.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}


// 8. تحديث السنة الدراسية
function updateYears() {
  if (!levelSelect || !yearSelect) return;

  const years = {
    "ابتدائي": ["الأولى ابتدائي", "الثانية ابتدائي", "الثالثة ابتدائي", "الرابعة ابتدائي", "الخامسة ابتدائي", "السادسة ابتدائي"],
    "إعدادي": ["الأولى إعدادي", "الثانية إعدادي", "الثالثة إعدادي"],
    "ثانوي": ["الجذع المشترك", "الأولى باكالوريا", "الثانية باكالوريا"],
    "جامعة": ["السنة الأولى", "السنة الثانية", "السنة الثالثة"]
  };

  yearSelect.innerHTML = "";

  (years[levelSelect.value] || []).forEach(year => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  });
}


// 9. نظام الامتحانات
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function startQuiz() {
  if (!quizContainer) return;

  currentQuestion = 0;
  score = 0;

  showQuestion();
}


function showQuestion() {
  if (!quizContainer) return;

  selectedAnswer = null;

  if (currentQuestion >= quizData.length) {
    finishQuiz();
    return;
  }

  const question = quizData[currentQuestion];

  quizContainer.innerHTML = "";

  const title = document.createElement("h3");
  title.textContent =
    `السؤال ${currentQuestion + 1} من ${quizData.length}`;

  const questionText = document.createElement("p");
  questionText.textContent = question.question;

  quizContainer.append(title, questionText);

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.className = "answer-button";

    button.addEventListener("click", () => {
      if (selectedAnswer !== null) return;

      selectedAnswer = index;

      if (index === question.correct) {
        score++;
        button.textContent += " ✓";
      } else {
        button.textContent += " ✗";
      }

      Array.from(
        quizContainer.querySelectorAll(".answer-button")
      ).forEach((item, i) => {
        item.disabled = true;

        if (i === question.correct) {
          item.textContent += " ✓";
        }
      });

      const nextButton = document.createElement("button");
      nextButton.textContent = "السؤال التالي";

      nextButton.addEventListener("click", () => {
        currentQuestion++;
        showQuestion();
      });

      quizContainer.appendChild(nextButton);
    });

    quizContainer.appendChild(button);
  });
}


// 10. نهاية الامتحان
function finishQuiz() {
  quizContainer.innerHTML = `
    <h2>انتهى الامتحان!</h2>
    <p>النقطة ديالك: ${score} / ${quizData.length}</p>
    <button onclick="startQuiz()">عاود الامتحان</button>
  `;

  saveQuizResult(score);
}


// 11. حفظ التقدم
function getProgress() {
  try {
    return JSON.parse(localStorage.getItem("footballStudyProgress")) || {
      completed: 0,
      quizzes: 0,
      totalScore: 0
    };
  } catch {
    return {
      completed: 0,
      quizzes: 0,
      totalScore: 0
    };
  }
}


function saveProgress(progress) {
  localStorage.setItem(
    "footballStudyProgress",
    JSON.stringify(progress)
  );

  updateProgress();
}


function saveQuizResult(points) {
  const progress = getProgress();

  progress.quizzes++;
  progress.totalScore += points;

  saveProgress(progress);
}


function markLessonCompleted() {
  const progress = getProgress();

  progress.completed++;

  saveProgress(progress);
}


// 12. تحديث واجهة التقدم
function updateProgress() {
  const progress = getProgress();

  const completedCount = document.getElementById("completedCount");
  const quizCount = document.getElementById("quizCount");
  const totalScore = document.getElementById("totalScore");
  const progressMessage = document.getElementById("progressMessage");

  if (completedCount) {
    completedCount.textContent = progress.completed;
  }

  if (quizCount) {
    quizCount.textContent = progress.quizzes;
  }

  if (totalScore) {
    totalScore.textContent = progress.totalScore;
  }

  if (progressMessage) {
    progressMessage.textContent =
      "واصل التعلم والتدريب باش تطور المستوى ديالك!";
  }
}


// 13. المباريات
function renderFootball() {
  if (!matchesList) return;

  const search = teamSearch?.value.trim().toLowerCase() || "";
  const filter = matchFilter?.value || "all";

  matchesList.innerHTML = "";

  const filteredMatches = footballMatches.filter(match => {
    const teams = `${match.home} ${match.away}`.toLowerCase();

    const matchesSearch = teams.includes(search);

    const matchesFilter =
      filter === "all" || match.status === filter;

    return matchesSearch && matchesFilter;
  });

  if (filteredMatches.length === 0) {
    matchesList.textContent = "لا توجد مباريات مطابقة.";
    return;
  }

  filteredMatches.forEach(match => {
    const card = document.createElement("div");
    card.className = "match-card";

    const title = document.createElement("h3");
    title.textContent = `${match.home} × ${match.away}`;

    const competition = document.createElement("p");
    competition.textContent = match.competition;

    const result = document.createElement("p");
    result.textContent = `النتيجة: ${match.score}`;

    const status = document.createElement("p");
    status.textContent = `الحالة: ${match.status}`;

    const date = document.createElement("p");
    date.textContent = match.date;

    card.append(title, competition, result, status, date);
    matchesList.appendChild(card);
  });
}


// 14. تغيير تبويبات المباريات
function setMatchTab(tab) {
  const buttons = document.querySelectorAll("[data-match-tab]");

  buttons.forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.matchTab === tab
    );
  });

  if (matchFilter) {
    matchFilter.value = tab === "all" ? "all" : tab;
  }

  renderFootball();
}


// 15. ربط الأحداث
if (levelSelect) {
  levelSelect.addEventListener("change", () => {
    updateYears();
    loadSubjects();
  });
}

if (subjectSelect) {
  subjectSelect.addEventListener("change", showLessons);
}

if (lessonSearch) {
  lessonSearch.addEventListener("input", showLessons);
}

if (teamSearch) {
  teamSearch.addEventListener("input", renderFootball);
}

if (matchFilter) {
  matchFilter.addEventListener("change", renderFootball);
}


// 16. تشغيل الموقع
document.addEventListener("DOMContentLoaded", () => {
  updateYears();
  loadSubjects();
  renderFootball();
  updateProgress();
});
