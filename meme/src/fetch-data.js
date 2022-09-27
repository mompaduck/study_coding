import React from "react"

export default function FetchData() {
  
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(1)
     
  // 1. GET the data (fetch) - starWars data
  // 2. Save the data to state
  
//useEffect로 전달된 함수는 지연 이벤트 동안에 레이아웃 배치와 그리기를 완료한 후 발생한다.
//(useLayoutEffect라는 별도의 Hook은 화면을 그리기 이전에 동기화됨.)

//effect의 기본 동작은 모든 렌더링이 완료한 후 발생한다. 
//의존성 하나가 변경된다면 effect는 항상 재생성된다.

//effect를 한번만 실행하고 싶다면, 두번째 인자로 빈 배열[]을 전달한다.
//빈 배열을 전달하면 React에게 props나 state에서 가져온 어떤값에도 의존하지 않으므로 다시 실행할 필요가 없다고 알려주게된다.

    console.log("Component rendered...")
    
    // // side effects
    // React.useEffect(function() {
    //   console.log("useEffect ran")
    // }, [count])   //count 값이 바뀌면 실행됨.

// side effects
React.useEffect(function() {
  console.log("Effect ran")
  fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
}, [count]) 
  
  return (
    <div>
      {/*  수정하기
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
       <h2>The count is {count}</h2>
       <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button> 
       */}
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    
    </div>
  )
}
