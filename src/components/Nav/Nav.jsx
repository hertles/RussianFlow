import s from './Nav.module.css';
import Button from '../Button/Button';

const Nav = () => {
    return (
        <span className={s.Nav}>
            <Button to='/main' text='Маршруты'/>
            <Button to='/rent' text='Прокат'/>
            <Button to='/profile' text='Мой профиль'/>
            <Button to='/forum/etc' text='Форум'/>
            <Button to='/api' text='React/Redux API'/>
        </span>
    );
}
export default Nav;