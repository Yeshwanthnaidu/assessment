import { createSlice } from '@reduxjs/toolkit';

const randomData = [
    {
        "id": "random-id-1",
        "name": "entrance-exam",
        "description": "fission-entrance",
        "topic_document": { "path": "random.pdf" },
        "level_of_difficulty": "medium",
        "no_of_questions": 10,
        "passing_criteria": 8
    },
    {
        "id": "random-id-2",
        "name": "math-quiz",
        "description": "algebra-basics",
        "topic_document": { "path": "algebra.pdf" },
        "level_of_difficulty": "easy",
        "no_of_questions": 15,
        "passing_criteria": 12
    },
    {
        "id": "random-id-3",
        "name": "science-test",
        "description": "physics-fundamentals",
        "topic_document": { "path": "physics.pdf" },
        "level_of_difficulty": "hard",
        "no_of_questions": 20,
        "passing_criteria": 15
    },
    {
        "id": "random-id-4",
        "name": "history-exam",
        "description": "ancient-history",
        "topic_document": { "path": "history.pdf" },
        "level_of_difficulty": "medium",
        "no_of_questions": 25,
        "passing_criteria": 18
    },
    {
        "id": "random-id-5",
        "name": "programming-quiz",
        "description": "java-basics",
        "topic_document": { "path": "java.pdf" },
        "level_of_difficulty": "easy",
        "no_of_questions": 10,
        "passing_criteria": 7
    },
    {
        "id": "random-id-6",
        "name": "chemistry-test",
        "description": "organic-chemistry",
        "topic_document": { "path": "organic_chemistry.pdf" },
        "level_of_difficulty": "hard",
        "no_of_questions": 30,
        "passing_criteria": 25
    },
    {
        "id": "random-id-7",
        "name": "geography-exam",
        "description": "world-geography",
        "topic_document": { "path": "geography.pdf" },
        "level_of_difficulty": "medium",
        "no_of_questions": 20,
        "passing_criteria": 16
    },
    {
        "id": "random-id-8",
        "name": "literature-quiz",
        "description": "modern-literature",
        "topic_document": { "path": "literature.pdf" },
        "level_of_difficulty": "easy",
        "no_of_questions": 10,
        "passing_criteria": 8
    },
    {
        "id": "random-id-9",
        "name": "biology-test",
        "description": "cell-biology",
        "topic_document": { "path": "biology.pdf" },
        "level_of_difficulty": "hard",
        "no_of_questions": 25,
        "passing_criteria": 20
    },
    {
        "id": "random-id-10",
        "name": "philosophy-exam",
        "description": "ethics-basics",
        "topic_document": { "path": "philosophy.pdf" },
        "level_of_difficulty": "medium",
        "no_of_questions": 12,
        "passing_criteria": 9
    },
    {
        "id": "random-id-11",
        "name": "economics-quiz",
        "description": "microeconomics-intro",
        "topic_document": { "path": "microeconomics.pdf" },
        "level_of_difficulty": "easy",
        "no_of_questions": 15,
        "passing_criteria": 10
    },
    {
        "id": "random-id-12",
        "name": "computer-science-test",
        "description": "data-structures",
        "topic_document": { "path": "data_structures.pdf" },
        "level_of_difficulty": "hard",
        "no_of_questions": 20,
        "passing_criteria": 14
    },
    {
        "id": "random-id-13",
        "name": "art-history-exam",
        "description": "renaissance-art",
        "topic_document": { "path": "renaissance.pdf" },
        "level_of_difficulty": "medium",
        "no_of_questions": 18,
        "passing_criteria": 13
    },
    {
        "id": "random-id-14",
        "name": "psychology-quiz",
        "description": "cognitive-psychology",
        "topic_document": { "path": "cognitive_psychology.pdf" },
        "level_of_difficulty": "easy",
        "no_of_questions": 10,
        "passing_criteria": 7
    },
    {
        "id": "random-id-15",
        "name": "sociology-test",
        "description": "social-theories",
        "topic_document": { "path": "social_theories.pdf" },
        "level_of_difficulty": "medium",
        "no_of_questions": 20,
        "passing_criteria": 15
    },
    {
        "id": "random-id-16",
        "name": "physics-exam",
        "description": "quantum-physics",
        "topic_document": { "path": "quantum_physics.pdf" },
        "level_of_difficulty": "hard",
        "no_of_questions": 25,
        "passing_criteria": 18
    },
    {
        "id": "random-id-17",
        "name": "chemistry-quiz",
        "description": "inorganic-chemistry",
        "topic_document": { "path": "inorganic_chemistry.pdf" },
        "level_of_difficulty": "medium",
        "no_of_questions": 15,
        "passing_criteria": 10
    },
    {
        "id": "random-id-18",
        "name": "biology-exam",
        "description": "genetics",
        "topic_document": { "path": "genetics.pdf" },
        "level_of_difficulty": "hard",
        "no_of_questions": 30,
        "passing_criteria": 24
    },
    {
        "id": "random-id-19",
        "name": "history-quiz",
        "description": "modern-history",
        "topic_document": { "path": "modern_history.pdf" },
        "level_of_difficulty": "easy",
        "no_of_questions": 12,
        "passing_criteria": 9
    },
    {
        "id": "random-id-20",
        "name": "math-test",
        "description": "calculus-basics",
        "topic_document": { "path": "calculus.pdf" },
        "level_of_difficulty": "medium",
        "no_of_questions": 22,
        "passing_criteria": 17
    }
]


export const assessmentData = createSlice({
    name: 'assessment-data',
    initialState: {
        assessment_data: randomData,
        selected_topic: {}
    },
    reducers: {
        setAssessmentData: (state, action) => {
            state.assessment_data = action.payload;
        },
        setSelectedTopic: (state, action) => {
            state.selected_topic = action.payload
        }
    }
});

// this is for dispatch
export const { setAssessmentData, setSelectedTopic } = assessmentData.actions;

// this is for configureStore
export default assessmentData.reducer;