import profile from "./data/data";
import Avatar from "./components/Avatar";
import Intro from "./components/Intro";
import SkillList from "./components/SkillList";

function App() {
  return (
    <article className="card">
      <Avatar image={profile.image} name={profile.name} />
      <div className="data">
        <Intro name={profile.name} summary={profile.summary}/>
        <SkillList skills={profile.skills} colors={profile.color}/>
      </div>
    </article>
  );
}

export default App;
