import styles from "./page.module.css";

export default function Home() {

    //sameple dictionary for a workout to see stats
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

  return (
    <main className={styles.main}>
      <div className="header">
        <h2 className={styles.header}>Well done!</h2>
      </div>
      <div className="body">
        <div className="overview">
            <h3>Overview</h3>
            <div className="overview-row">
                <p className={styles.overviewText}>{workout.title}</p>
                <p className={styles.overviewText}>Start Time: {convertTime(workout.start_time)}</p>
                <p className={styles.overviewText}>End Time: {convertTime(workout.end_time)}</p>
                <p className={styles.overviewText}>Duration: {workout.duration}</p>
                <p className={styles.overviewText}>You have completed {Object.keys(workout.exercises).length} workouts today.</p>
                <p className={styles.overviewText}>Your bodyweight is {workout.bodyweight}kg.</p>
            </div>
        </div>
        <div className="end-stats">
            <div className="stats-row">
                <p className={styles.statsText}>Duration: {workout.duration}</p>
                <p className={styles.statsText}>Volume: {workout.volume}</p>
            </div>
        </div>
      </div>
    </main>
  );
}

function convertTime(time) {
    const date = new Date(time);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}