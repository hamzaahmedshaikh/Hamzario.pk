export default function SkillsSection() {
  // Skill groups, percent-style for illustration
  const skills = [
    {
      group: "Frontend",
      items: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      group: "Backend",
      items: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "REST APIs", level: 95 },
        { name: "JWT", level: 90 },
        { name: "OpenAPI/Swagger", level: 85 },
      ],
    },
    {
      group: "Database & Storage",
      items: [
        { name: "MongoDB (Atlas)", level: 90 },
        { name: "Mongoose", level: 90 },
        { name: "Firebase Storage", level: 85 },
      ],
    },
    {
      group: "Mobile",
      items: [
        { name: "React Native", level: 70 },
      ],
    },
    {
      group: "Testing & Tools",
      items: [
        { name: "Postman", level: 90 },
        { name: "Git", level: 90 },
        { name: "GitHub Actions", level: 80 },
        { name: "Jest", level: 85 },
        { name: "React Testing Library", level: 80 },
      ],
    },
    {
      group: "Other",
      items: [
        { name: "Firebase Auth", level: 85 },
        { name: "SWR", level: 80 },
        { name: "TypeScript", level: 90 },
      ]
    }
  ];
  return (
    <section className="py-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-pink">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map(({ group, items }) => (
          <div key={group}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{group}</h3>
            <ul className="space-y-2">
              {items.map(skill => (
                <li key={skill.name} className="flex justify-between items-center">
                  <span>{skill.name}</span>
                  <div className="w-2/5 h-2 rounded bg-gray-200 overflow-hidden">
                    <div
                      className="h-full bg-pink"
                      style={{ width: `${skill.level}%` }}
                      aria-label={`${skill.level}% proficiency in ${skill.name}`}
                    />
                  </div>
                  <span className="ml-2 text-sm text-gray-500">{skill.level}%</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}