import type { Metadata } from "next";
import RoomsClient from "./RoomsClient";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description: "Browse our collection of luxury rooms and suites at Royal Palace Hotel.",
};

export default function RoomsPage() {
  return <RoomsClient />;
}
