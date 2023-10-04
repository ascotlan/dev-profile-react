import SkillListItem from "./SkillListItem";

function SkillList({ skills}) {
  const renderedSkills = skills.map((skill) => (
    <SkillListItem key={skill.skill} skill={skill.skill} color={skill.color} level={skill.level}/>
  ));
  return <ul className="skill-list">{renderedSkills}</ul>;
}

export default SkillList;
