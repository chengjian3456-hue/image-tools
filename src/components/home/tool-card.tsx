import Link from "next/link";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

export default function ToolCard({ title, description, href, icon, badge }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-3 p-6 rounded-xl border border-border bg-[var(--surface)] hover:border-[var(--color-primary)]/30 hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all duration-200 hover:-translate-y-0.5"
    >
      {badge && (
        <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
          {badge}
        </span>
      )}
      <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold group-hover:text-[var(--color-primary)] transition-colors">
          {title}
        </h3>
        <p className="mt-1 text-sm text-[var(--muted)] line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
