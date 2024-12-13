async function ProductInfo({ params }: { params: Promise<{ slug: number }> }) {
  const { id } = await params;
  return (
    <div>
      <h1> {id} </h1>
    </div>
  );
}
export default ProductInfo;
