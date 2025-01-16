
// components/Editor/EditorToolbar.tsx
import { Editor } from '@tiptap/react';
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Image as ImageIcon,
  Link as LinkIcon,
  Table as TableIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface EditorToolbarProps {
  editor: Editor;
  onImageUpload: (file: File) => Promise<void>;
}

export function EditorToolbar({ editor, onImageUpload }: EditorToolbarProps) {
  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <div className="border-b p-2 flex flex-wrap gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'bg-muted' : ''}
          >
            <Bold className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Bold</TooltipContent>
      </Tooltip>

      {/* Add more toolbar buttons */}
      {/* Image upload button */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => document.getElementById('image-upload')?.click()}
          >
            <ImageIcon className="h-4 w-4" />
            <input
              id="image-upload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageInput}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Upload Image</TooltipContent>
      </Tooltip>
    </div>
  );
}