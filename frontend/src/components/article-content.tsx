"use client";

import ReactMarkdown from "react-markdown";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TableOfContents } from "@/components/table-of-contents";

export function ArticleContent({ content }: { content: string }) {
  return (
    <div className="grid gap-6 md:grid-cols-[250px_1fr]">
      <Card className="hidden md:block h-fit sticky top-20">
        <ScrollArea className="h-[calc(100vh-120px)]">
          <TableOfContents content={content} />
        </ScrollArea>
      </Card>
      
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}