'use client';

import CodeEditor from '@/components/CodeEditor'; // Import the CodeEditor component
import Reviewer from '@/components/Reviewer';
import { SidebarDemo } from '@/components/Sidebar';
import { useEffect, useState } from 'react';

function CodeReviewPage() {
  const [code, setCode] = useState('');
  const [ans, setAns] = useState(`
The code you provided has a couple of issues:

1. **Typo:** The function name is \`abcd()\`, but you're calling it as \`ab()\`.
2. **Missing String Completion:** The \`print\` statement is missing the closing quotation mark for the string "Hell".

Here's the corrected code:

\`\`\`python
def abcd():
  print("Hello")  # Corrected the string and function call
abcd()
\`\`\`
`);
  const [review, setReview] = useState('');

  const submitCode = async () => {
    console.log('codex')
    const response = await fetch('/api/codex', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });

    const result = await response.json();
    console.log(result.code)
    setReview(result.review);
    setAns(result.code)
  };


  useEffect(()=>{
    fetch('/api/all-reviews').then(async (res)=>console.log(await res.json()))
  },[])
//   setAns()
  return (
    <div className='bg-slate-50 flex h-screen'>
        {/* <div className='bg-neutral-100 w-52 h-screen'></div> */}
      <SidebarDemo />

        <div className='w-full h-full flex flex-col'>
            <div className='w-full h-full flex justify-evenly gap-2 px-10 align-center pt-3'>
                <CodeEditor onCodeChange={setCode}/> 
                <Reviewer reviewResult={ans}  /> 
            </div>
      <SubmitButton submitCode={submitCode} />


            
        </div>
      {/* <h1>Paste your code below for review</h1> */}
      {review && <p>Code Review: {review}</p>}
    </div>
  );
}



export default CodeReviewPage;


function SubmitButton({submitCode}:{submitCode:Function}){
    return (
      <>
        <button onClick={()=>submitCode()} className="px-4 py-2  w-32 mx-auto mt-1 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
  Sketch
</button>
</>
    )
}
