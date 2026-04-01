"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site-content";

export const DownloadButton = () => {
  return (
    <Button className="rounded-full" size="lg" asChild>
      <a href={siteContent.hero.primaryCta.href} target="_blank" rel="noreferrer">
        <Download className="size-4 mr-2" />
        {siteContent.hero.primaryCta.label}
      </a>
    </Button>
  );
};
