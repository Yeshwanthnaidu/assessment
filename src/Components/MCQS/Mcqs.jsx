import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './Mcqs.css'

const randomMcqs = [
    {
        "question": "What is Artificial Intelligence?",
        "options": [
            "A type of hardware used in computers",
            "The science of making computers behave like humans",
            "A programming language",
            "A type of network protocol"
        ],
        "answer": "The science of making computers behave like humans"
    },
    {
        "question": "Which of the following is a common application of AI in daily life?",
        "options": [
            "Web development",
            "Online customer support chatbots",
            "Network security protocols",
            "Desktop publishing"
        ],
        "answer": "Online customer support chatbots"
    },
    {
        "question": "What does 'machine learning' refer to in the context of AI?",
        "options": [
            "Machines learning how to operate without human intervention",
            "The ability of machines to adapt to new data and learn from it",
            "Teaching machines to understand human emotions",
            "Programming machines to perform tasks"
        ],
        "answer": "The ability of machines to adapt to new data and learn from it"
    },
    {
        "question": "Which of the following is NOT a type of machine learning?",
        "options": [
            "Supervised learning",
            "Unsupervised learning",
            "Reinforcement learning",
            "Manual learning"
        ],
        "answer": "Manual learning"
    },
    {
        "question": "What is the main goal of natural language processing (NLP)?",
        "options": [
            "To develop new programming languages",
            "To enable machines to understand and respond to human language",
            "To create realistic animations",
            "To enhance computer graphics"
        ],
        "answer": "To enable machines to understand and respond to human language"
    },
    {
        "question": "Who is considered one of the pioneers of AI and created the Turing Test?",
        "options": [
            "Alan Turing",
            "Isaac Newton",
            "Albert Einstein",
            "Nikola Tesla"
        ],
        "answer": "Alan Turing"
    },
    {
        "question": "Which algorithm is often used for classification and regression tasks in machine learning?",
        "options": [
            "Quick Sort",
            "K-means clustering",
            "Linear regression",
            "Breadth-First Search"
        ],
        "answer": "Linear regression"
    },
    {
        "question": "What is 'deep learning'?",
        "options": [
            "A subset of machine learning involving neural networks with many layers",
            "The process of learning AI programming languages",
            "A type of reinforcement learning",
            "Learning algorithms that mimic human brain function"
        ],
        "answer": "A subset of machine learning involving neural networks with many layers"
    },
    {
        "question": "Which of the following is a popular framework for building machine learning models?",
        "options": [
            "React",
            "TensorFlow",
            "Django",
            "Bootstrap"
        ],
        "answer": "TensorFlow"
    },
    {
        "question": "What is the primary function of a convolutional neural network (CNN)?",
        "options": [
            "To process and analyze sequential data",
            "To perform natural language processing tasks",
            "To recognize and process visual data, such as images and videos",
            "To manage database transactions"
        ],
        "answer": "To recognize and process visual data, such as images and videos"
    }
]

const Mcqs = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [randomQuetions, setRandomQuestions] = useState(randomMcqs.map(q => { return { choose: '', ...q } }))

    const updateChoose = (value) => {
        const tempData = randomQuetions.map((m, index) => {
            if (currentQuestion === index) {
                m.choose = value
                return m
            }
            return m
        })
        setRandomQuestions(tempData)
    }

    return <div style={{ marginTop: '-15.5rem' }} className="d-flex flex-column align-items-center">
        <div className="w-75">
            <div className="fs-1 d-flex justify-content-center align-items-center" style={{ color: 'white', border: '2px solid white', borderRadius: '0rem 1rem 0rem 1rem', height: '15rem' }}>Q. {randomQuetions[currentQuestion].question}</div>
        </div>
        <div className="w-75 p-5" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className={`p-1 d-flex justify-content-center align-items-center ${randomQuetions[currentQuestion].choose == 'a' ? 'active' : ''}`} onClick={() => updateChoose('a')} style={{ border: '2px solid red', borderRadius: '0rem 1rem 0rem 1rem', height: '3rem' }}>A. {randomQuetions[currentQuestion].options[0]}</div>
            <div className={`p-1 d-flex justify-content-center align-items-center ${randomQuetions[currentQuestion].choose == 'b' ? 'active' : ''}`} onClick={() => updateChoose('b')} style={{ border: '2px solid red', borderRadius: '0rem 1rem 0rem 1rem', height: '3rem' }}>B. {randomQuetions[currentQuestion].options[1]}</div>
            <div className={`p-1 d-flex justify-content-center align-items-center ${randomQuetions[currentQuestion].choose == 'c' ? 'active' : ''}`} onClick={() => updateChoose('c')} style={{ border: '2px solid red', borderRadius: '0rem 1rem 0rem 1rem', height: '3rem' }}>C. {randomQuetions[currentQuestion].options[2]}</div>
            <div className={`p-1 d-flex justify-content-center align-items-center ${randomQuetions[currentQuestion].choose == 'd' ? 'active' : ''}`} onClick={() => updateChoose('d')} style={{ border: '2px solid red', borderRadius: '0rem 1rem 0rem 1rem', height: '3rem' }}>D. {randomQuetions[currentQuestion].options[3]}</div>
        </div>
        <div className="d-flex" style={{ gap: '1rem' }}>
            <Button variant="light" disabled={currentQuestion === 0} onClick={() => setCurrentQuestion(prev => prev - 1)}>Previous</Button>
            <Button variant="danger" disabled={randomMcqs.length - 1 === currentQuestion} onClick={() => setCurrentQuestion(prev => prev + 1)}>Next</Button>
        </div>
    </div>
}

export default Mcqs