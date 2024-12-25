import Header from './components/Header';
import Footer from './components/footer';
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
      <Footer />
    
    </>
  )
}
export default App;