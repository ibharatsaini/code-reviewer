import { useState } from 'react';
import  Controlled, { EditorView, Extension }   from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { java } from '@codemirror/lang-java';
import { markdown } from '@codemirror/lang-markdown';

export default function CodeEditor({ onCodeChange, onReviewChange }:{onCodeChange?:Function , onReviewChange ?: Function}) {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState<Extension[]>([javascript()]); // Default to JavaScript

  const detectLanguage = (code:string) => {
    if (/^\s*<!DOCTYPE\s+html/i.test(code) || /<html>/i.test(code)) {
      return html();
    } else if (/^\s*#include|int\s+main|System\.out\.println/i.test(code)) {
      return java();
    } else if (/^\s*def\s|\s*print\(|^\s*import\s+/i.test(code)) {
      return python();
    } else if (/^\s*body\s*{|^\s*@keyframes/i.test(code)) {
      return css();
    } else if (/^\s*#|^\s*[-*]\s/i.test(code)) {
      return markdown();
    } else {
      return javascript();
    }
  };

  const handleCodeChange = (value:string) => {
    setCode(value);
    const detectedLang = detectLanguage(value);
    setLanguage([detectedLang]);
    onCodeChange && onCodeChange(value);
  };


  return (
    <div className='flex-1 flex-1 max-w-[50%] max-h-full border-2 h-full bg-slate-200	overflow-y-auto	' >
      <Controlled
        value={code}
        // style={}
        // width="100%"
        minHeight="100%"
        extensions={[language]}
        onChange={(value) => handleCodeChange(value) }
        // style={{height:"100%"}}
        theme={EditorView.theme({
            '&': { backgroundColor: 'rgb(226, 232, 240);'},
            '.cm-content': { fontFamily: 'monospace', fontSize: '13px' },
            // '.cm-theme': { minHeight: "100%" },
          })}
      />
    </div>
  );
}
