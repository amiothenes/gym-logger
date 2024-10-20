"use client";
import React, { useState } from 'react';

const initialExercises = [
    { id: 1, name: 'Push Up', category: 'Chest' },
    { id: 2, name: 'Squat', category: 'Legs' },
];

const initialCategories = ['Chest', 'Legs', 'Back', 'Arms', 'Shoulders'];

const SettingsPage = () => {

    const [exercises, setExercises] = useState(initialExercises);
    const [categories, setCategories] = useState(initialCategories);
    const [newExercise, setNewExercise] = useState({ name: '', category: '' });
    const [newCategory, setNewCategory] = useState('');

    const handleExerciseChange = (e, id) => {
        const { name, value } = e.target;
        setExercises(exercises.map(ex => ex.id === id ? { ...ex, [name]: value } : ex));
    };

    const handleAddExercise = () => {
        setExercises([...exercises, { ...newExercise, id: exercises.length + 1 }]);
        setNewExercise({ name: '', category: '' });
    };

    const handleAddCategory = () => {
        setCategories([...categories, newCategory]);
        setNewCategory('');
    };

    return (
        <div>
            <h1>Settings</h1>
            <h2>Edit Exercises</h2>
            {exercises.map(ex => (
                <div key={ex.id}>
                    <input
                        type="text"
                        name="name"
                        value={ex.name}
                        onChange={(e) => handleExerciseChange(e, ex.id)}
                    />
                    <select
                        name="category"
                        value={ex.category}
                        onChange={(e) => handleExerciseChange(e, ex.id)}
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            ))}
            <h2>Add Custom Exercise</h2>
            <input
                type="text"
                placeholder="Exercise Name"
                value={newExercise.name}
                onChange={(e) => setNewExercise({ ...newExercise, name: e.target.value })}
            />
            <select
                value={newExercise.category}
                onChange={(e) => setNewExercise({ ...newExercise, category: e.target.value })}
            >
                <option value="">Select Category</option>
                {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <button onClick={handleAddExercise}>Add Exercise</button>
            <h2>Categories</h2>
            {categories.map(cat => (
                <div key={cat}>{cat}</div>
            ))}
            <input
                type="text"
                placeholder="New Category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
            />
            <button onClick={handleAddCategory}>Add Category</button>
        </div>
    );
};

export default SettingsPage;