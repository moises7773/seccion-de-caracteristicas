import "./design-system.css"
import List from "./carateristicas-componente/List.jsx"
import teamBuilder from "./assets/icon-team-builder.svg"
import supervisor from "./assets/icon-supervisor.svg"
import karma from "./assets/icon-karma.svg"
import calculator from "./assets/icon-calculator.svg"
import styles from "./app.module.css"

function App (){
  return(
  <>
  <main className={styles.main}>
    <header className={styles.head}>
      <div className={styles.divTitle}>
        <p className="text-preset-2 grey-500">Reliable, efficient delivery</p>
        <h1 className="text-preset-1 grey-500">Powered by Technology</h1> 
      </div>
      <p className="text-preset-4 grey-500">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
    </header>
    <ul className={styles.ul}>
      <List titulo="Team Builder" parrafo="Scans our talent network to create the optimal team for your project" imagen={teamBuilder} color="red"/>
      <List titulo="Supervisor" parrafo="Monitors activity to identify project roadblocks" imagen={supervisor} color="cyan"/>
      <List titulo="Karma" parrafo="Regularly evaluates our talent to ensure quality" imagen={karma} color="orange"/>
      <List titulo="Calculator" parrafo="Uses data from past projects to provide better delivery estimates" imagen={calculator} color="blue"/>
    </ul>
  </main>
  </>)
}
export default App