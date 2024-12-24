import Header from './Header';
import Discription from './Discription';

const Hello = () => {

    const getData=(data)=>{
        console.log(data);
        name = data;
    }
   

    return (
        <>
    <Header 
      getData ={getData}/>
    <Discription />
    </>
    )
    
}

export default Hello;