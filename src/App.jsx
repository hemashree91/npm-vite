import Header from './components/Header';

const App =() => {

  const data ={
 name : "janvi",
 age:21,
 student:true
}
const data1 ={
  name:"ravi",
  age:24,
  student:false
}



  return (
    <>
      <Header data={data}
      data1={data1}
      />
    
    </>
  )
}
export default App;