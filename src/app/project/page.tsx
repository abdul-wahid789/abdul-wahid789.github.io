import type { Metadata } from "next";
import AllProjects from "@/components/AllProjects";

export const metadata: Metadata = {
  title: "All Projects | Abdul Wahid",
  description:
    "Browse all web applications and full-stack projects built by Abdul Wahid.",
};

export default function ProjectArchivePage() {
  return <AllProjects />;
}
