import styles from "./page.module.css";

export default function Home() {

    //sample titles for buttons of total stats
    const totalStats = [
        { id: 1, title: "Training Duration" },
        { id: 2, title: "Volume" },
        { id: 3, title: "Total Sets" },
        { id: 4, title: "Total Reps" },
        { id: 5, title: "Bodyweight" },
        { id: 6, title: "Number of Workouts" },
    ];
    //sample titles for buttons of muscle cat. stats
    const categorieStats = [
        { id: 1, title: "Abs" },
        { id: 2, title: "Back" },
        { id: 3, title: "Biceps" },
        { id: 4, title: "Cardio" },
        { id: 5, title: "Chest" },
        { id: 6, title: "Legs" },
        { id: 7, title: "Shoulders" },
        { id: 8, title: "Triceps" },
    ];

  return (
    <main className={styles.main}>
      <div className="header">
        <h2 className={styles.header}>Statistics</h2>
      </div>
      <div className="body">
        <div className="total-stats">
            <h3>Total Stats</h3>
            <div className="total-stats-row">
                {totalStats.map((totalStat) => (
                    <button key={totalStat.id} className={styles.totalStatButton}>{totalStat.title}</button>
                ))}
            </div>
        </div>
        <div className="categorie-stats">
            <h3>Categorie Stats</h3>
            <div className="daily-stats-row">
                {categorieStats.map((categorieStat) => (
                    <button key={categorieStat.id} className={styles.categorieStatButton}>{categorieStat.title}</button>
                ))}
            </div>
        </div>
      </div>
    </main>
  );
}
