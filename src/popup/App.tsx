import './App.scss';
import RFont from '../font/Font';
import RMargin from '../margin/Margin';
import RSkin from '../skin/Skin';
import RSize from '../size/Size';
import { usePageInfo } from './hooks';
import { useState } from 'react';

function App() {
    const { pageInfo } = usePageInfo();

    const [status, setStatus] = useState('ON');

    return (
        <div className='app'>
            <h1>Readest</h1>

            <section className='info'>
                <span className='info__title'>{pageInfo.title}</span>

                <span className='info__switch'>
                    <span
                        className={`info__switch-btn ${
                            status === 'ON' ? 'info__switch-checked' : ''
                        }`}
                        onClick={() => setStatus('ON')}>
                        ON
                    </span>
                    <span
                        className={`info__switch-btn ${
                            status === 'OFF' ? 'info__switch-checked' : ''
                        }`}
                        onClick={() => setStatus('OFF')}>
                        OFF
                    </span>
                </span>
            </section>

            <section className='font'>
                <p className='title'>Font</p>
                <div className='app__block'>
                    <RFont></RFont>
                </div>
            </section>

            <section className='skin'>
                <p className='title'>Skin</p>
                <div className='app__block'>
                    <RSkin></RSkin>
                </div>
            </section>

            <section className='size'>
                <p className='title'>Size</p>
                <div className='app__block'>
                    {' '}
                    <RSize></RSize>
                </div>
            </section>

            <section className='margin'>
                <p className='title'>Margin</p>
                <div className='app__block'>
                    {' '}
                    <RMargin></RMargin>
                </div>
            </section>
        </div>
    );
}

export default App;
