import './App.scss';
import RFont from '../font/Font';
import RMargin from '../margin/Margin';
import RSkin from '../skin/Skin';
import RSize from '../size/Size';

function App() {
    return (
        <div className='app'>
            <h1>Readest</h1>

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
