import ThemeSelector from "@/components/ThemeSelector";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div>
      <h1>Hello world</h1>
      <ThemeSelector />
    </div>
  );
}
