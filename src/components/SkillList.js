import SkillListItem from "./SkillListItem";

function SkillList({ skills, colors, emojis }) {
  const renderedSkills = skills.map((skill, index) => (
    <SkillListItem key={skill} skill={skill} color={colors[index]}/>
  ));
  return <ul className="skill-list">{renderedSkills}</ul>;
}

export default SkillList;
