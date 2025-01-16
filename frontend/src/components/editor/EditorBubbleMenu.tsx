
// components/Editor/EditorBubbleMenu.tsx
import { BubbleMenu, Editor } from '@tiptap/react';
import { Bold, Italic, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EditorBubbleMenuProps {
  editor: Editor;
}

export function EditorBubbleMenu({ editor }: EditorBubbleMenuProps) {
  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{ duration: 100 }}
      className="flex items-center gap-1 rounded-lg border bg-background p-1 shadow-lg"
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'bg-muted' : ''}
      >
        <Bold className="h-4 w-4" />
      </Button>
      
      {/* Add more bubble menu options */}
    </BubbleMenu>
  );
}