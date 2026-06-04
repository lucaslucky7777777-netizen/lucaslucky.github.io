let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let checked = false;
let wrongQuestions = [];
let lastSettings = null;

const $ = (id) => document.getElementById(id);

const setupScreen = $("setupScreen");
const quizScreen = $("quizScreen");
const resultScreen = $("resultScreen");

$("totalWords").textContent = VOCAB_DATA.length;

function normalizeAnswer(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[’']/g, "")
    .replace(/[-\s]/g, "");
}

function expandBaseWord(word) {
  const answers = new Set();
  answers.add(word);

  // fulfil(l) → fulfil, fulfill / enrol(l) → enrol, enroll
  const optionalLetter = word.match(/^(.+)\(([a-z])\)$/i);
  if (optionalLetter) {
    answers.add(optionalLetter[1]);
    answers.add(optionalLetter[1] + optionalLetter[2]);
  }

  return [...answers];
}

function getAcceptedAnswers(item) {
  const answers = new Set();

  if (item.type === "sentence") {
    // 예문 빈칸 문제는 예문에 실제로 들어간 형태만 정답으로 인정한다.
    // 예: {attempted}가 들어간 문장은 attempted만 정답, attempt는 오답.
    answers.add(normalizeAnswer(item.blank));
    return answers;
  }

  // 한글 뜻 문제는 표제어를 정답으로 인정한다.
  // fulfil(l), enrol(l)처럼 괄호 표기가 있는 단어는 두 철자를 모두 인정한다.
  expandBaseWord(item.word).forEach((answer) => answers.add(normalizeAnswer(answer)));
  return answers;
}

function getDisplayAnswer(item, type) {
  if (type === "sentence") {
    return item.blank;
  }
  return item.word;
}

function shuffle(array) {
  const copied = [...array];
  for (let i = copied.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

function getUnitItems(unitValue) {
  if (unitValue === "all") {
    return [...VOCAB_DATA];
  }

  const unitNumber = Number(unitValue);
  const startIndex = (unitNumber - 1) * 30;
  const endIndex = startIndex + 30;
  return VOCAB_DATA.slice(startIndex, endIndex);
}

function getUnitLabel(unitValue) {
  if (unitValue === "all") {
    return "전체 Unit";
  }

  const unitNumber = Number(unitValue);
  const start = (unitNumber - 1) * 30 + 1;
  const end = unitNumber * 30;
  return `Unit ${unitNumber} (${start}~${end})`;
}

function makeBlank(answer) {
  if (!answer) return "";
  const first = answer[0];
  const rest = answer.slice(1).replace(/[A-Za-z]/g, "_");
  return first + rest;
}

function exampleWithBlank(example, blank) {
  return example.replace(/\{([^}]+)\}/, makeBlank(blank));
}

function buildQuestions(settings, source) {
  let items = settings.order === "random" ? shuffle(source) : [...source];
  const count = settings.count === "all" ? items.length : Math.min(Number(settings.count), items.length);
  items = items.slice(0, count);

  return items.map((item) => {
    let type = settings.mode;
    if (settings.mode === "mixed") {
      type = Math.random() < 0.5 ? "meaning" : "sentence";
    }
    return { ...item, type };
  });
}

function startQuiz(source = null) {
  const settings = {
    mode: $("modeSelect").value,
    unit: $("unitSelect").value,
    count: $("countSelect").value,
    order: $("orderSelect").value
  };

  lastSettings = settings;
  const selectedSource = source ?? getUnitItems(settings.unit);
  currentQuestions = buildQuestions(settings, selectedSource);
  currentIndex = 0;
  score = 0;
  checked = false;
  wrongQuestions = [];

  setupScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  checked = false;
  const q = currentQuestions[currentIndex];

  $("answerInput").value = "";
  $("answerInput").disabled = false;
  $("answerInput").focus();
  $("feedback").className = "feedback hidden";
  $("feedback").innerHTML = "";
  $("nextBtn").classList.add("hidden");

  $("progressText").textContent = `${currentIndex + 1} / ${currentQuestions.length}`;
  $("scoreText").textContent = `${score}점`;
  $("progressFill").style.width = `${(currentIndex / currentQuestions.length) * 100}%`;

  const unitText = q.retryFromWrong ? "오답 재도전" : getUnitLabel(lastSettings?.unit || "all");

  if (q.type === "meaning") {
    $("modeLabel").textContent = `Meaning Quiz · ${unitText}`;
    $("questionType").textContent = "뜻 → 영어";
    $("questionTitle").textContent = "한글 뜻에 맞는 영어 단어를 입력하세요.";
    $("questionText").textContent = q.meaning;
    $("subHint").textContent = "힌트가 필요하면 아래 버튼을 누르세요.";
  } else {
    $("modeLabel").textContent = `Sentence Quiz · ${unitText}`;
    $("questionType").textContent = "예문 빈칸";
    $("questionTitle").textContent = "빈칸에 들어갈 영어 단어를 입력하세요.";
    $("questionText").textContent = exampleWithBlank(q.example, q.blank);
    $("subHint").textContent = `빈칸 첫 글자 힌트: ${q.blank[0]}`;
  }
}

function showHint() {
  const q = currentQuestions[currentIndex];

  if (q.type === "meaning") {
    $("subHint").textContent = `첫 글자: ${q.word[0]} / 글자 수: ${q.word.replace(/\(.+\)/, "").length}`;
  } else {
    $("subHint").textContent = `뜻: ${q.meaning}`;
  }
}

function checkAnswer() {
  if (checked) return;

  const q = currentQuestions[currentIndex];
  const userAnswer = normalizeAnswer($("answerInput").value);
  const acceptedAnswers = getAcceptedAnswers(q);
  const isCorrect = acceptedAnswers.has(userAnswer);

  checked = true;
  $("answerInput").disabled = true;
  $("nextBtn").classList.remove("hidden");

  const feedback = $("feedback");
  feedback.classList.remove("hidden");

  const displayAnswer = getDisplayAnswer(q, q.type);

  if (isCorrect) {
    score += 1;
    feedback.className = "feedback correct";
    feedback.innerHTML = `정답! <br>정답: <strong>${displayAnswer}</strong>`;
  } else {
    wrongQuestions.push({
      ...q,
      userAnswer: $("answerInput").value || "(빈칸)"
    });
    feedback.className = "feedback wrong";
    feedback.innerHTML = `
      오답! <br>
      네 답: <strong>${$("answerInput").value || "(빈칸)"}</strong><br>
      정답: <strong>${displayAnswer}</strong><br>
      뜻: ${q.meaning}
    `;
  }

  $("scoreText").textContent = `${score}점`;
}

function nextQuestion() {
  if (!checked) {
    checkAnswer();
    return;
  }

  currentIndex += 1;

  if (currentIndex >= currentQuestions.length) {
    finishQuiz();
  } else {
    showQuestion();
  }
}

function finishQuiz() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  $("progressFill").style.width = "100%";
  $("finalScore").textContent = `${score} / ${currentQuestions.length}`;

  const ratio = score / currentQuestions.length;
  if (ratio === 1) {
    $("finalMessage").textContent = "완벽해! 이제 틀린 문제가 없어.";
  } else if (ratio >= 0.9) {
    $("finalMessage").textContent = "엄청 잘했어. 거의 완벽해! 남은 오답만 다시 풀어보자.";
  } else if (ratio >= 0.7) {
    $("finalMessage").textContent = "좋아. 조금만 더 반복하면 안정적으로 외울 수 있어.";
  } else if (ratio >= 0.5) {
    $("finalMessage").textContent = "절반 이상 맞혔어. 오답노트를 중심으로 다시 풀어보자.";
  } else {
    $("finalMessage").textContent = "괜찮아. 처음에는 틀린 단어를 모으는 게 더 중요해.";
  }

  renderWrongList();
}

function renderWrongList() {
  const wrap = $("wrongListWrap");
  const list = $("wrongList");
  const wrongOnlyBtn = $("wrongOnlyBtn");

  if (wrongQuestions.length === 0) {
    wrap.classList.add("hidden");
    wrongOnlyBtn.disabled = true;
    wrongOnlyBtn.textContent = "틀린 문제가 없습니다";
    return;
  }

  wrongOnlyBtn.disabled = false;
  wrongOnlyBtn.textContent = `틀린 문제 ${wrongQuestions.length}개 다시 풀기`;
  wrap.classList.remove("hidden");
  list.innerHTML = wrongQuestions.map((q, idx) => {
    const answer = getDisplayAnswer(q, q.type);
    return `
      <div class="wrong-item">
        <p><strong>${idx + 1}. ${answer}</strong> — ${q.meaning}</p>
        <p>예문: ${q.example.replace(/[{}]/g, "")}</p>
        <p>네 답: ${q.userAnswer}</p>
      </div>
    `;
  }).join("");
}

$("startBtn").addEventListener("click", () => startQuiz());
$("checkBtn").addEventListener("click", checkAnswer);
$("nextBtn").addEventListener("click", nextQuestion);
$("hintBtn").addEventListener("click", showHint);

$("answerInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (checked) {
      nextQuestion();
    } else {
      checkAnswer();
    }
  }
});

$("restartBtn").addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
});

$("homeBtn").addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
});

$("wrongOnlyBtn").addEventListener("click", () => {
  if (wrongQuestions.length === 0) return;

  // 방금 틀린 문제만 다시 출제한다.
  // 다시 풀다가 또 틀리면, 결과 화면에서 그 문제만 다시 남는다.
  // 따라서 오답이 0개가 될 때까지 계속 반복할 수 있다.
  const source = wrongQuestions.map(({ userAnswer, type, ...rest }) => ({
    ...rest,
    type,
    retryFromWrong: true
  }));

  currentQuestions = source;
  currentIndex = 0;
  score = 0;
  checked = false;
  wrongQuestions = [];

  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
});


// 정답 확인 후 Space를 누르면 다음 문제로 넘어간다.
// 아직 정답 확인 전이면 입력칸 사용을 방해하지 않기 위해 아무 동작도 하지 않는다.
document.addEventListener("keydown", (event) => {
  const quizIsVisible = !quizScreen.classList.contains("hidden");
  if (!quizIsVisible || event.code !== "Space" || !checked) return;

  event.preventDefault();
  nextQuestion();
});
