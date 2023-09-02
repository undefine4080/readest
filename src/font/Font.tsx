import { useState } from 'react';

function Font() {
    const [selectFont, setFont] = useState('');

    const fonts = [
        {
            name: 'VisbyRoundCF',
            fontFamily: 'VisbyRoundCF-Bold',
            link: 'http://cdn.repository.webfont.com/webfonts/nomal/140053/47019/64f2cdcf6f50f600f0475b08.css',
        },
        {
            name: 'Digital',
            fontFamily: 'DS-Digital',
            link: 'http://cdn.repository.webfont.com/webfonts/nomal/140053/32780/64f2ce2f6f50f600f0475b09.css',
        },
        {
            name: 'Georgia',
            fontFamily: 'Georgia',
            link: 'http://cdn.repository.webfont.com/webfonts/nomal/140053/46975/64f2cea46f50f600f0475b0a.css',
        },
    ];

    const renderFont = (font: any) => {
        setFont(font.name);
    };

    return fonts.map((font) => {
        return (
            <span
                className={`font__item ${
                    selectFont === font.name ? 'font__item-checked' : ''
                }`}
                key={font.name}
                onClick={() => renderFont(font)}>
                Aa
            </span>
        );
    });
}

export default Font;
