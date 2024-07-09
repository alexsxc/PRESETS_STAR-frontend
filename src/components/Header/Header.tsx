// import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.svg'
import Acc from '../../assets/acc.svg'
import Shop from '../../assets/shop.svg'

function Header() {
   /*
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
    return (
        <header className="header">
                <div className="logo">
                    <a href="#"><img src={Logo} alt="logotype" /></a>
                </div>
                <nav className="nav">
                    <a href="#"><img className="acc_logo" src={Acc} alt="your account" /></a>
                    <a href="#"><img src={Shop} alt="shop" /></a>
                </nav>
        </header>
    )
}

export default Header
