export default function SkeletonQuestion() {
    return (
      <div className="space-y-3 animate-pulse">
        <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-10 rounded bg-slate-200 dark:bg-slate-700"
          />
        ))}
      </div>
    );
  }