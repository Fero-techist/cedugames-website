export default function Badge({ children }) {
  return (
    <div className="px-4 py-2 rounded-full bg-white/20 text-white text-sm flex items-center gap-1">
      {children}
    </div>
  );
}
