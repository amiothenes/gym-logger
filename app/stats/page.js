import styles from "./page.module.css";

export default function Home() {

    //sample titles for buttons of total stats
    const totalStats = [
        { id: 1, title: "Total Workouts" },
        { id: 2, title: "Total Distance" },
        { id: 3, title: "Total Time" },
        { id: 4, title: "Total Calories" },
    ];
    //sample titles for buttons of muscle cat. stats
    const categorieStats = [
        { id: 1, title: "Chest" },
        { id: 2, title: "Back" },
        { id: 3, title: "Legs" },
        { id: 4, title: "Arms" },
        { id: 5, title: "Shoulders" },
        { id: 6, title: "Core" },
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
