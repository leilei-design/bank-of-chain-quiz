let currentQuestion = null;
let selectedOption = null;
let totalQuestions = 0;
let correctAnswers = 0;

// 加载随机题目
function loadRandomQuestion() {
    if (questions.length === 0) {
        alert('没有可用的题目！');
        return;
    }

    // 随机选择一道题目
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];
    
    // 清空之前的选择
    selectedOption = null;
    
    // 更新题目显示
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        <div class="options">
            ${currentQuestion.options.map((option, index) => `
                <div class="option" onclick="selectOption(${index})" id="option${index}">
                    ${String.fromCharCode(65 + index)}. ${option}
                </div>
            `).join('')}
        </div>
    `;
}

// 选择选项
function selectOption(index) {
    // 移除之前的选择
    if (selectedOption !== null) {
        document.getElementById(`option${selectedOption}`).classList.remove('selected');
    }
    
    // 更新新的选择
    selectedOption = index;
    document.getElementById(`option${index}`).classList.add('selected');
}

// 检查答案
function checkAnswer() {
    if (currentQuestion === null) {
        alert('请先抽取一道题目！');
        return;
    }
    
    if (selectedOption === null) {
        alert('请选择一个选项！');
        return;
    }
    
    const selectedAnswer = String.fromCharCode(65 + selectedOption);
    const isCorrect = selectedAnswer === currentQuestion.answer;
    
    // 更新统计信息
    totalQuestions++;
    if (isCorrect) {
        correctAnswers++;
    }
    
    // 更新显示
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('accuracy').textContent = 
        Math.round((correctAnswers / totalQuestions) * 100) + '%';
    
    // 显示结果
    const resultClass = isCorrect ? 'correct' : 'incorrect';
    const resultText = isCorrect ? '回答正确！' : '回答错误！';
    
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML += `
        <p class="${resultClass}">${resultText}</p>
        <p>正确答案是：${currentQuestion.answer}</p>
        <div class="explanation" style="margin-top: 15px; padding: 10px; background-color: #f8f9fa; border-left: 4px solid #2196f3;">
            <p style="margin: 0; font-weight: bold;">解析：</p>
            <p style="margin: 5px 0 0 0;">${currentQuestion.explanation}</p>
        </div>
    `;
    
    // 禁用选项点击
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
} 