import { useState } from 'react';

function Margin() {
    const margins = [1, 1.25, 1.5, 1.75, 2];

    const [selectMargin, setMargin] = useState(1);

    const renderMargin = (margin: any) => {
        setMargin(margin);
    };

    return margins.map((margin) => {
        return (
            <span
                className={`margin__item ${
                    selectMargin === margin ? 'margin__item-checked' : ''
                }`}
                key={margin}
                onClick={() => renderMargin(margin)}>
                {margin}
            </span>
        );
    });
}

export default Margin;
