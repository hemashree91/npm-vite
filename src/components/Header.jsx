const Header = ({getData}) => {

    const user = 'guest';
    getData(user);
    return (
        <h1>Hello {user}</h1>
    )
}
export default Header;