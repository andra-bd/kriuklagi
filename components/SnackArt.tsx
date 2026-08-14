export function SnackArt({ variant = "orange" }: { variant?: string }) {
  return <div className={`snack-art ${variant}`} aria-hidden="true"><i /><i /><i /><i /><i /><i /><b>✦</b><em>✦</em></div>;
}
