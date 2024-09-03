function SkillList({ src, skill }) {
    return (
        <span>
            <img src={src} alt="Icon" />
            <p>{skill}</p>
        </span>
    )
}

export default SkillList