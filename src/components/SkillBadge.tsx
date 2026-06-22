import { skills, skillCategories } from "@/data/skills";

export default function SkillBadge() {
  return (
    <div className="space-y-6">
      {skillCategories
        .filter((c) => c.id !== "all")
        .map((category) => {
          const categorySkills = skills.filter(
            (s) => s.category === category.id
          );
          if (categorySkills.length === 0) return null;
          return (
            <div key={category.id}>
              <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
                {category.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}
