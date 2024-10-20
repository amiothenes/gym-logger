import React from 'react';
import styles from "./page.module.css";

// Dummy data
const workoutData = {
    date: '2023-10-01',
    workoutName: 'Leg Day',
    startTime: '10:00 AM',
    endTime: '11:30 AM',
    bodyWeight: '70kg',
    notes: 'Felt strong today',
    exercises: [
        {
            name: 'Squats',
            sets: [
                { weight: '100kg', reps: 10, notes: 'Good form' },
                { weight: '105kg', reps: 8, notes: 'Challenging' },
                { weight: '110kg', reps: 6, notes: 'Max effort' },
            ],
        },
        {
            name: 'Leg Press',
            sets: [
                { weight: '200kg', reps: 12, notes: 'Easy' },
                { weight: '220kg', reps: 10, notes: 'Moderate' },
                { weight: '240kg', reps: 8, notes: 'Hard' },
            ],
        },
    ],
};

const WorkoutPage = () => {
    return (
        <main className={styles.main}>
            <h1>Workout on {workoutData.date}</h1>
            <header>
                <h2>{workoutData.workoutName}</h2>
                <p>Start Time: {workoutData.startTime}</p>
                <p>End Time: {workoutData.endTime}</p>
                <p>Body Weight: {workoutData.bodyWeight}</p>
                <p>Notes: {workoutData.notes}</p>
            <div className={styles.meta_edit}>
                <button className={styles.new_order}>New order</button>
                <button className={styles.duplicate}>Duplicate</button>
                <button className={styles.repeat}>Repeat workout</button>
                <button className={styles.delete}>Delete</button>
            </div>
            </header>
            <div className={styles.body}>
                <h2>Exercises</h2>
                {workoutData.exercises.map((exercise, index) => (
                    <div key={index}>
                        <h3>{exercise.name}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Weight</th>
                                    <th>Reps</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {exercise.sets.map((set, setIndex) => (
                                    <tr key={setIndex}>
                                        <td>{set.weight}</td>
                                        <td>{set.reps}</td>
                                        <td>{set.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
                <button className={styles.add_exercise}>Add exercise</button>
            </div>
        </main>
    );
};

export default WorkoutPage;