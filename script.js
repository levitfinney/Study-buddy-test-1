function generateStudy() {
    let topic = document.getElementById("topicInput").value.trim();
    let output = document.getElementById("output");

    if (!topic) {
        output.innerHTML = "❌ Enter a topic first.";
        return;
    }

    let explanation = buildExplanation(topic);
    let guide = buildGuide(topic);
    let quiz = buildQuiz(topic);

    output.innerHTML = `
        <h2>📖 ${topic}</h2>

        <h3>🧠 Explanation</h3>
        <p>${explanation}</p>

        <h3>📌 Study Guide</h3>
        ${guide}

        <h3>❓ Quiz</h3>
        ${quiz}
    `;
}

function buildExplanation(topic) {
    let t = topic.toLowerCase();

    // Detect category
    if (isScience(t)) {
        return `${topic} is a scientific concept that explains how something in the natural world works. 
        It involves cause and effect, meaning one thing leads to another. 
        To understand ${topic}, you need to look at what it is made of, how it behaves, and what laws or rules control it. 
        Scientists study ${topic} through observation and experiments to understand real-world applications.`;
    }

    if (isHistory(t)) {
        return `${topic} is an important part of history. It involves events that happened in the past and shaped the world today. 
        Understanding ${topic} requires knowing who was involved, what happened, when it occurred, and why it was significant. 
        These events often have lasting impacts on societies and cultures.`;
    }

    if (isMath(t)) {
        return `${topic} is a mathematical concept used to solve problems and understand patterns. 
        It involves rules, formulas, and logical steps. 
        Learning ${topic} means understanding how to apply it step-by-step and when to use it in real situations.`;
    }

    // Default (still smarter than before)
    return `${topic} is a concept that can be understood by breaking it into key parts. 
    First, define what ${topic} is. Then understand how it works and why it matters. 
    Finally, look at examples of ${topic} in real life to fully understand it.`;
}

function buildGuide(topic) {
    return `
    <ul>
        <li><b>Definition:</b> What is ${topic}?</li>
        <li><b>How it Works:</b> Explain the process or system</li>
        <li><b>Key Parts:</b> Important components or ideas</li>
        <li><b>Examples:</b> Real-world uses of ${topic}</li>
        <li><b>Importance:</b> Why ${topic} matters</li>
    </ul>`;
}

function buildQuiz(topic) {
    return `
    <ul>
        <li>What is ${topic}?</li>
        <li>How does ${topic} work?</li>
        <li>Why is ${topic} important?</li>
        <li>Give a real-world example of ${topic}.</li>
    </ul>`;
}

// CATEGORY DETECTION
function isScience(t) {
    return ["energy","atom","cell","force","gravity","photosynthesis","electric","wave","matter"].some(word => t.includes(word));
}

function isHistory(t) {
    return ["war","empire","revolution","king","civil","ancient","battle"].some(word => t.includes(word));
}

function isMath(t) {
    return ["equation","algebra","geometry","number","fraction","angle"].some(word => t.includes(word));
}
