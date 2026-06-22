import { skills, skillCategories } from "@/data/skills";

export default function SkillBadge() {
  return (
    <div className="space-y-6">
      {skillCategories.filter((c) => c.id !== "all").map((category) => {
        const categorySkills = skills.filter((s) => s.category === category.id);
        if (categorySkills.length === 0) return null;
        return (
          <div key={category.id}>
            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
              {category.label}
            </h4>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <span key={skill.name}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/90 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
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
