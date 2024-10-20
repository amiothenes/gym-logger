import styles from "./page.module.css";

    //maybe change it to the version of the json as in settings
    const exercise = {
        name: "Squat",
        sets: 3,
        reps: 10,
        weight: 90,
    }
export default function Home() {

  return (
    <main className={styles.main}>
      <div className="header">
        <h2 className={styles.header}>{exercise.name}</h2>
        <div className={styles.meta_edit}>
            <button className={styles.replace}>Replace</button>
            <button className={styles.delete}>Delete</button>
        </div>
      </div>
      <div className="body">
        <form className={styles.form}>
            <label>
                Warmup Sets:
                <input type="number" name="warmupSets" min="0" defaultValue="0" />
            </label>
            <label>
                Regular Sets:
                <input type="number" name="regularSets" min="0" defaultValue={exercise.sets} />
            </label>
        </form>
        <div className={styles.notes}>
            <label>
                Notes:
                <textarea name="notes" rows="4" cols="50" placeholder="Add your notes here..."></textarea>
            </label>
        </div>
      </div>
    </main>
  );
}