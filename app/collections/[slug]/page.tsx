import { collections } from "../../data/collections";
import CollectionDetailClient from "./CollectionDetailClient";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default function CollectionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <CollectionDetailClient slug={params.slug} />;
}
