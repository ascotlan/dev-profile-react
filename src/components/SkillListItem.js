function SkillListItem({ skill, color, level }) {

  return <li style={{backgroundColor:color}} className="skill">
  {skill}
  <span>
    {level === "beginner" && "👶🏽"}
    {level === "intermediate" && "👍🏽" }
    {level === "advanced" && "💪🏽"}
  </span>
  </li>;
}

export default SkillListItem;
