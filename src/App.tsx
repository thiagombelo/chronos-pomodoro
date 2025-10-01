import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { Cycles } from './components/Cycles'
import { DefaultInput } from './components/DefaultInput'
import { DefaultButton } from './components/DefaultButton'
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'
import { Footer } from './components/Footer'

import './styles/theme.css'
import './styles/global.css'


export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form className='form' action="" method="post">
                    <div className="formRow">
                        <DefaultInput labelText='Campo' id='input' type='text' />
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formRow">
                        <Cycles />
                    </div>

                    <div className="formRow">
                        <DefaultButton icon={<PlayCircleIcon />} />
                    </div>
                </form>
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    )
}