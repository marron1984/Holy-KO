interface AdSlotProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}

export function AdSlot({
  slot,
  format = "auto",
  className = "",
}: AdSlotProps) {
  return (
    <div
      className={`ad-slot my-8 flex items-center justify-center min-h-[100px] bg-beige-50 border border-dashed border-sage-200 rounded-lg ${className}`}
      data-ad-slot={slot}
      data-ad-format={format}
    >
      <p className="text-xs text-sage-400">
        広告スペース (slot: {slot})
      </p>
    </div>
  );
}
