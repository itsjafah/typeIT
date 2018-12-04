import React from 'react'

const WordPerMin = (props) => {
  let wordsPerMinCount = 0
  let goodWordCount = 0
  let badWordCount = 0


  if(props.appState.state){
    if(props.appState.state.allSubmittedWords.length > 0){

      const allSubmittedWordsVar = props.appState.state.allSubmittedWords
       goodWordCount = allSubmittedWordsVar.filter((word)=>{
         return word.type.name == "Word"
      }).length
       badWordCount = allSubmittedWordsVar.filter((word)=>{
         return word.type.name == "BadWord"
      }).length
      wordsPerMinCount = goodWordCount

    }
  }


  return(


    <div>{wordsPerMinCount}</div>
  )
}

export default WordPerMin
