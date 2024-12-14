export default async function SearchPage({
  params,
}: {
  params: Promise<{ params: string }>;
}) {
  const category = (await params).params;
  return (
    <div>
      <h1 className="pt-32"> {category} </h1>
    </div>
  );
}
