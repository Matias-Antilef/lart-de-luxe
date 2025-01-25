interface ProductsWrapperProps {
  children: React.ReactNode;
  className?: string;
}
function ProductsWrapper({ children, className }: ProductsWrapperProps) {
  return (
    <div
      className={`${className} grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-1`}
    >
      {children}
    </div>
  );
}
export default ProductsWrapper;
