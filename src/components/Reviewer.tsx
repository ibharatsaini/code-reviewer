import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'; // Theme for code block
import { a11yDark, androidstudio, atelierDuneDark, atomOneDark, darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { TextGenerateEffect } from './ui/text-generate-effect';

interface MarkdownRendererProps {
  content: string; // Markdown content as string
}

const customTheme = {
    ...materialDark,
    'pre[class*="language-"]': {
      ...materialDark['pre[class*="language-"]'],
      backgroundColor: '#1e1e1e', // Override background color
      borderRadius: '10px', // Custom border radius
      fontFamily:'monospace',

    },
    'code[class*="language-"]': {
      ...materialDark['code[class*="language-"]'],
      fontSize: '15px', // Override font size
      color: '#dcdcdc', // Override text color
      fontFamily:'monospace'
    },
  };
  
function Reviewer({ reviewResult }:{reviewResult:string}){
  return (
    <div className='flex-1 max-w-[50%]  border-2 rounded-md bg-slate-100  flex flex-col font-mono overflow-y-auto	'>
    <ReactMarkdown
      components={{
        // Override the rendering of code blocks
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            // <TextGenerateEffect words={String(children)}>
            <SyntaxHighlighter
              
              style={customTheme} // Syntax highlighter theme
              language={'markdown'} // Extract the language from the className (e.g., python, javascript)
              PreTag="div"
            >
                {String(children).replace(/\n$/,'')}
            </SyntaxHighlighter>
            // </TextGenerateEffect>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {reviewResult}
    </ReactMarkdown>
    </div>
  );
};

export default Reviewer;
