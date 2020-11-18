import { useContext } from 'react';
import Context from '../components/Context';

const useMenu = () => {
    const [menuOpen, setMenuOpen] = useContext(Context);

    const changeMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return {
        menuOpen,
        changeMenu,
    };
};

export default useMenu
