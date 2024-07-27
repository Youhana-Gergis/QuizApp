import React, { useRef, useState } from 'react';
import { data } from '../data';
import './Quiz.css';
const Quiz = () => {

  let [index , setIndex] = useState(0);
  let [question , setQuestion] = useState(data[index]);
  let [lock , setLock] = useState(false);
  let [score , setScore] = useState(0);
  let [result , setResult] = useState(false);


  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);
  let option_array = [Option1,Option2,Option3,Option4];



  const checkAns = (e,ans) => {
    if(lock === false){
      if(question.ans === ans){
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev=>prev+1);
      }
      else{
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans-1].current.classList.add("correct") 
      }
    }
  }


  const Next = () => {
    if(lock === true){
      if(index === data.length-1){
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("wrong");
        return null;
      })
    }
  }


  const Reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  }

  return (
    <div className=' w-[600px] m-auto mt-[150px] bg-white text-[#262626] flex flex-col gap-5 border-raduis rounded py-10 px-14'>
      <h1 className='text-center font-medium text-4xl'>Quiz App</h1>
      <hr className=' border-t-black'/>
      {result?<></>:<>
        <h2 className='text-[20px] font-medium'>{index+1}. {question.qusetion}</h2>
        <ul>
          <li ref={Option1} onClick={(e) => {checkAns(e,1)}} className='core flex items-center h-[60px] pl-4 rounded text-[20px] cursor-pointer border-solid border-2 border-[#333]-500 mb-2'>{question.option1}</li>
          <li ref={Option2} onClick={(e) => {checkAns(e,2)}} className='flex items-center h-[60px] pl-4 rounded text-[20px] cursor-pointer border-solid border-2 border-[#333]-500 mb-2'>{question.option2}</li>
          <li ref={Option3} onClick={(e) => {checkAns(e,3)}} className='flex items-center h-[60px] pl-4 rounded text-[20px] cursor-pointer border-solid border-2 border-[#333]-500 mb-2'>{question.option3}</li>
          <li ref={Option4} onClick={(e) => {checkAns(e,4)}} className='flex items-center h-[60px] pl-4 rounded text-[20px] cursor-pointer border-solid border-2 border-[#333]-500'>{question.option4}</li>
        </ul>
        <button onClick={Next} class="w-[150px] m-auto cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500">
          <span class="font-bold text-white text-xl relative z-10 group-hover:text-green-500 duration-500">Next</span>
          <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
          <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>
          
          <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
          <span class="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
        </button>
        <div className='index m-auto text-xl'> <span className='font-bold'>{index+1}</span> of <span className='font-bold'>{data.length}</span> question</div>
      </>}

      {result?<>
        <h2 className='text-center text-xl'>You scored <span className='font-bold'>{score}</span> out of <span className='font-bold'>{data.length}</span></h2>
        <button onClick={Reset} class="w-[150px] m-auto cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500">
          <span class="font-bold text-white text-xl relative z-10 group-hover:text-green-500 duration-500">Reset</span>
          <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
          <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>
          
          <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
          <span class="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
        </button></>:<>

      </>}

    </div>
  )
}

export default Quiz
