import styles from "./page.module.css";

    //sameple dictionary for a workout to edit
    //they will probably be passed from a dictionary
    const workout = {
        id: 1,
        title: "Workout 1",
        duration: "1h 30m",
        start_time: "2016-09-01T12:00:00.000000Z", // format: 2016-09-01T12:00:00.000000Z
        end_time: "2016-09-01T13:30:00.000000Z",
        volume: "100kg",
        exercises: {
            1: {
                name: "Squat",
                sets: 3,
                reps: 10,
                weight: 90,
            },
            2: {
                name: "Deadlift",
                sets: 10,
                reps: 10,
                weight: 90,
            },
            3: {
                name: "Bench Press",
                sets: 10,
                reps: 10,
                weight: 90,
            },
            4: {
                name: "Shoulder Press",
                sets: 10,
                reps: 10,
                weight: 90,
            },
            5: {
                name: "Pull Up",
                sets: 10,
                reps: 10,
                weight: 90,
            },
        },
        bodyweight: 90
    };

export default function Home() {

  return (
    <main className={styles.main}>
      <div className="header">
        <h2 className={styles.header}>{workout.title}</h2>
        <button className={styles.edit}>Start workout</button>
        <div className={styles.meta_edit}>
            <button className={styles.new_order}>New order</button>
            <button className={styles.duplicate}>Duplicate</button>
            <button className={styles.delete}>Delete</button>
        </div>
      </div>
      <div className="body">
        <div className="edit-name-notes">
            <div className="edit-name">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" value={workout.title}/>
            </div>
            <div className="edit-notes">
                <label for="notes">Notes</label>
                <textarea id="notes" name="notes" value={workout.notes}></textarea>
            </div>
        </div>
        <div className="exercises">
            {Object.keys(workout.exercises).map((key) => (
                <button key={key} className={styles.exercise}>
                    <div className={styles.exerciseName}>{workout.exercises[key].name}</div>
                    <div className={styles.exerciseSets}>{workout.exercises[key].sets} sets</div>
                    <div className={styles.exerciseReps}>{workout.exercises[key].reps} reps</div>
                    <div className={styles.exerciseWeight}>{workout.exercises[key].weight} kg</div>
                </button>
            ))}
        </div>
        <button className={styles.addExercise}>Add exercise</button>
      </div>
    </main>
  );
}