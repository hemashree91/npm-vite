import Header from './Header';
import Discription from './Discription';

const Hello = () => {

    const user = 'shree';
   

    return (
        <>
    <Header 
      user ={user}/>
    <Discription />
    </>
    )
    
}

export default Hello;