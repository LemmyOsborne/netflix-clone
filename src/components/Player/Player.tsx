import React, { createContext, SetStateAction, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Button, Container, Overlay, Inner } from "./Player.styles"

interface IPlayerComposition extends React.FC {
    Video: React.FC<React.HTMLAttributes<HTMLDivElement> & { src: string }>
    Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>
}

interface IPlayerContext {
    showPlayer: boolean
    setShowPlayer: React.Dispatch<SetStateAction<boolean>>
}

const PlayerContext = createContext({} as IPlayerContext)

export const Player: IPlayerComposition = ({ children }) => {
    const [showPlayer, setShowPlayer] = useState(false)

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext)
    
    return showPlayer ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...restProps} data-testid="player">
            <Inner>
                <video controls autoPlay>
                    <source src={src} type="video/mp4" />
                </video>
            </Inner>
        </Overlay>,
        document.body
    ) : null
}

Player.Button = function PlayerButton({ children, ...restProps }) {
    const { setShowPlayer } = useContext(PlayerContext)

    return <Button onClick={() => setShowPlayer(true)} {...restProps}>{children}</Button>
}