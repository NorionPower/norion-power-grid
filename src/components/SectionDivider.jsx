export default function SectionDivider() {
  return (
    <div className="flex items-center gap-4 my-2">
      <div className="flex-1 h-px bg-border" />
      <div className="w-1.5 h-1.5 bg-primary rotate-45" />
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}