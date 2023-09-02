import { useState } from 'react';

function Skin() {
    const skins = ['grey', 'grass', 'butter', 'dark'];

    const [selectSkin, setSkin] = useState('');

    const renderSkin = (margin: any) => {
        setSkin(margin);
    };

    return skins.map((skin) => {
        return (
            <div
                className={`skin__item skin__${skin} ${
                    selectSkin === skin ? 'skin__item-checked' : ''
                }`}
                key={skin}
                onClick={() => renderSkin(skin)}>
                Aa
            </div>
        );
    });
}

export default Skin;
