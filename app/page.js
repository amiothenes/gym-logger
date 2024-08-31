import Image from "next/image";
import styles from "./page.module.css";

//home page is the Journal of all past workouts done
export default function Home() {

  //sample workout entries
  const workouts = [
    { id: 1, date: "2023-10-01", description: "Ran 5 miles" },
    { id: 2, date: "2023-10-02", description: "Swam 30 laps" },
    { id: 3, date: "2023-10-03", description: "Biked 20 miles" },
  ];

  return (
    <main className={styles.main}>
      <button className={styles.edit}>Edit</button>
      <header className={styles.header}>Journal</header>
      {workouts.map((workout) => (
        <div key={workout.id} className={styles.workoutItem}> 
          <div className={styles.date}>{workout.date}</div>
          <div className={styles.description}>{workout.description}</div>
        </div>
      ))}
    </main>
  );
}
