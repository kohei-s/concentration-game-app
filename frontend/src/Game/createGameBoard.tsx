import FlipCard from "./FlipCard.tsx";
import {UserInfo} from "../UserInfo.ts";


export default function createGameBoard(gameSize: string, gameName: string, userInfo: UserInfo | undefined) {

    switch (gameName) {
        case "hiragana":
            return <FlipCard
                gameSize={gameSize}
                gameName={gameName}
                colorStyle={"#D05F5F"}
                colorStyle2={"#73683F"}
                colorStyle3={"#4D6A9A"}
                userInfo={userInfo}/>;
        case "katakana":
            return <FlipCard
                gameSize={gameSize}
                gameName={gameName}
                colorStyle={"#4D6A9A"}
                colorStyle2={"#D05F5F"}
                colorStyle3={"#73683F"}
                userInfo={userInfo}/>;
        case "playing-cards":
            return <FlipCard
                gameSize={gameSize}
                gameName={gameName}
                colorStyle={"#73683F"}
                colorStyle2={"#4D6A9A"}
                colorStyle3={"#D05F5F"}
                userInfo={userInfo}/>;
        default:
            return <FlipCard
                gameSize={gameSize}
                gameName={gameName}
                colorStyle={"#587c18"}
                colorStyle2={"#233d67"}
                colorStyle3={"#834242"}
                userInfo={userInfo}/>;
    }

}
