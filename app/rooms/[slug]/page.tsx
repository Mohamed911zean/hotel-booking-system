import { rooms } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import RoomDetailClient from "./RoomDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return { title: "Room Not Found" };
  return {
    title: room.name,
    description: room.description,
  };
}

export default async function RoomDetailPage({ params }: Props) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) notFound();

  return <RoomDetailClient />;
}
