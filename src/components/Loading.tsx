type LoadingProps = {
  size?: "normal" | "small"
}

export function Loading({ size = "normal" }: LoadingProps) {
  const sizeLoad = size === 'small' ? "h-4 w-4" : "h-5 w-5"

  return (
    <div
      className={`inline-block ${sizeLoad} animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  )
}