function Text({
  children,
  size = "text-lg",
  color = "text-[#0F172A]",
  className,
}) {
  return <p className={`${size} ${color} ${className} `}>{children}</p>;
}

export default Text;
