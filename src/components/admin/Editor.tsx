
import { useEffect, useRef, useState } from 'react';

interface EditorProps {
  initialValue: string;
  onChange: (content: string) => void;
  height?: string;
  placeholder?: string;
}

export const Editor = ({ initialValue, onChange, height = "400px", placeholder = "Start writing..." }: EditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Load Quill script
    const loadQuill = async () => {
      const quillStylesheet = document.createElement('link');
      quillStylesheet.rel = 'stylesheet';
      quillStylesheet.href = 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
      document.head.appendChild(quillStylesheet);
      
      const quillScript = document.createElement('script');
      quillScript.src = 'https://cdn.quilljs.com/1.3.6/quill.min.js';
      quillScript.async = true;
      document.body.appendChild(quillScript);
      
      quillScript.onload = () => {
        setIsLoaded(true);
        initQuill();
      };
    };
    
    const initQuill = () => {
      if (!window.Quill || !editorRef.current) return;
      
      // Define toolbar options
      const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean'],
        ['link', 'image']
      ];
      
      // Initialize Quill
      const quill = new window.Quill(editorRef.current, {
        modules: {
          toolbar: toolbarOptions
        },
        placeholder: placeholder,
        theme: 'snow'
      });
      
      // Set initial content
      if (initialValue) {
        quill.clipboard.dangerouslyPasteHTML(initialValue);
      }
      
      // Add change handler
      quill.on('text-change', () => {
        const html = editorRef.current?.querySelector('.ql-editor')?.innerHTML;
        if (html) {
          onChange(html);
        }
      });
    };
    
    loadQuill();
    
    return () => {
      // Clean up quill instance
    };
  }, [initialValue, onChange, placeholder]);
  
  return (
    <div>
      <div 
        ref={editorRef} 
        className="bg-white min-h-[100px]" 
        style={{ height: height }}
      />
      {!isLoaded && (
        <div className="flex items-center justify-center h-20 bg-gray-50 border border-dashed border-gray-300 rounded">
          <span className="text-gray-400">Loading editor...</span>
        </div>
      )}
    </div>
  );
};
