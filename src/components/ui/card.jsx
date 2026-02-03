export function Card({ className = "", ...props }) {
    return (
      <div
        className={`rounded-lg border bg-white p-4 shadow-sm
        dark:border-gray-700 dark:bg-gray-900 ${className}`}
        {...props}
      />
    );
  }