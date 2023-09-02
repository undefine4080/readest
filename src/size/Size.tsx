import { useState } from 'react';

function Size() {
    const sizes = [12, 16, 18, 24, 32, 36, 42];

    const [selectSize, setSize] = useState(16);

    const renderSize = (size: any) => {
        setSize(size);
    };

    return sizes.map((size) => {
        return (
            <span
                className={`size__item ${
                    selectSize === size ? 'size__item-checked' : ''
                }`}
                style={{ fontSize: size + 'px' }}
                key={size}
                onClick={() => renderSize(size)}>
                A
            </span>
        );
    });
}

export default Size;
