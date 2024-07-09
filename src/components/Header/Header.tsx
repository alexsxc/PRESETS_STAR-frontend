import React, { useEffect, useState } from 'react';
import AuthModal from '../AuthModal/AuthModal';
import Logo from '../../assets/logo.svg'
import Acc from '../../assets/acc.svg'
import Shop from '../../assets/shop.svg'

function Header() {
   /* изменение картинки Acc на аву чела авторизованного
    const [avatarUrl, setAvatarUrl] = useState<string>('');

    useEffect(() => {
        const fetchAvatar = async () => {
            try {
                const response = await fetch('https://example.com/api/user/avatar', {
                    headers: {
                        'Authorization': 'Bearer your-token-here'
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setAvatarUrl(data.avatarUrl);
            } catch (error) {
                console.error('Ошибка при загрузке аватарки:', error);
            }
        };

        fetchAvatar();
    }, []);
    */
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

    const handleAccClick = () => {
        setIsAuthModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsAuthModalOpen(false)
    }

    return (
        <header className="header">
            <div className="logo">
                <a href="#"><img src={Logo} alt="logotype" /></a>
            </div>
            <nav className="nav">
                <button onClick={handleAccClick} className="acc-button">
                    <img className="acc_logo" src={Acc} alt="your account" />
                </button>
                <a href="#"><img src={Shop} alt="shop" /></a>
            </nav>
            <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseModal} />
        </header>
    )
}

export default Header
