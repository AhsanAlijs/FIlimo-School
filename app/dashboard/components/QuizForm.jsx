'use client'
import React, { useState } from 'react';

const QuizForm = ({ questions, setQuestions }) => {

    console.log(questions);


    // Handlers for quiz details

    // Handlers for questions
    const handleQuestionChange = (index, event) => {
        const newQuestions = [...questions];
        newQuestions[index].question = event.target.value;
        setQuestions(newQuestions);
    };

    const handleOptionChange = (qIndex, oIndex, event) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options[oIndex] = event.target.value;
        setQuestions(newQuestions);
    };

    const handleCorrectOptionChange = (index, event) => {
        const newQuestions = [...questions];
        newQuestions[index].answer = event.target.value;
        setQuestions(newQuestions);
    };

    const handleAddQuestion = () => {
        setQuestions([
            ...questions,
            { question: '', answer: '', options: ['', '', '', ''] }
        ]);
    };

    const handleRemoveQuestion = (index) => {
        setQuestions(questions.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Combine quiz details and questions into one object
        console.log('Form submitted:', questions);
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className='mt-6 text-xl font-semibold'>Questions</h2>
            {questions.map((q, qIndex) => (
                <div key={qIndex} style={{ marginBottom: '20px' }} className='grid grid-cols-2 gap-4 mt-4'>
                    <input
                        className='shadow-md outline-none p-2 px-4 rounded-xl col-span-2'
                        type="text"
                        value={q.question}
                        onChange={(event) => handleQuestionChange(qIndex, event)}
                        placeholder="Enter the question"
                        required
                    />
                    <div className='grid grid-cols-2 gap-4 col-span-2 max-sm:grid-cols-1'>
                        {q.options.map((option, oIndex) => (
                            <input
                                className='shadow-md outline-none p-2 px-4 rounded-xl'
                                key={oIndex}
                                type="text"
                                value={option}
                                onChange={(event) => handleOptionChange(qIndex, oIndex, event)}
                                placeholder={`Option ${oIndex + 1}`}
                                required
                            />
                        ))}
                    </div>
                    <select
                        value={q.correctOption}
                        onChange={(event) => handleCorrectOptionChange(qIndex, event)}
                        required
                        className='shadow-md outline-none p-2 px-4 rounded-xl col-span-2'
                    >
                        <option value="">Select Correct Option</option>
                        {q.options.map((_, oIndex) => (
                            <option key={oIndex} value={_}>
                                Option {oIndex + 1}
                            </option>
                        ))}
                    </select>
                    <button className='font-semibold bg-red-500 text-white rounded-xl p-2 px-4 text-xl col-span-2 w-fit shadow-md max-[500px]:w-full' type="button" onClick={() => handleRemoveQuestion(qIndex)}>
                        Remove Question
                    </button>
                </div>
            ))}
            <div className='flex items-center justify-between mt-6'>
                <button className='flex items-center justify-center gap-2 bg-[#eeb84b] text-xl font-semibold text-white rounded-xl p-2 px-4  shadow-md' type="button" onClick={handleAddQuestion}>
                    Add <span className='max-[500px]:hidden'>Question</span> <span className='text-2xl'>+</span>
                </button>
                {/* <button className='p-2 px-4 rounded-xl bg-[#eeb84b] text-white font-semibold text-xl shadow-md' type="submit">Submit</button> */}
            </div>
        </form>
    );
};

export default QuizForm;