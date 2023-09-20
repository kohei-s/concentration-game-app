import React, {useState} from "react";
import axios from "axios";
import {GameCard} from "../Game/GameCard.ts";
import {Button, Card, CardActions, CardContent, IconButton, Stack, TextField, Typography} from "@mui/material";
import TranslateIcon from '@mui/icons-material/Translate';
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import "./NewGameCard.css"
import {Link} from "react-router-dom";

type Props = {
    onClose: () => void
    onAddNewCard: () => void
}
export default function NewGameCard(props: Props) {

    const [title, setTitle] = useState<string>("");
    const [cardSetName, setCardSetName] = useState<string>("");

    function inputTitle(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    function inputCardSetName(event: React.ChangeEvent<HTMLInputElement>) {
        setCardSetName(event.target.value)
    }

    function saveGameCard() {
        axios.post(
            "/api/game_cards", {
                "title": title,
                "cardSetName": cardSetName
            } as GameCard)
            .then(() => {
                setTitle("")
                setCardSetName("")
                props.onAddNewCard()
                props.onClose()
            }).catch(console.error)
    }

    return (
        <>
            <Card className="new-card" sx={{
                maxWidth: 300,
                margin: 3,
                background: "#FDF6E1",
                boxShadow: 0,
                border: 0.5,
                borderColor: "rgba(122,119,119,0.3)",
                borderRadius: '15px'
            }}>
                <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom component="div">
                        Create new game card
                    </Typography>
                    <div id={"translate-button"}>
                        <IconButton  size={"small"} sx={{
                            mr: 1,
                            color: "#ffffff",
                            backgroundColor: "#3c7ee8",
                            boxShadow: 0,
                            borderRadius: '10px'
                        }}><Link id={"link-translation"} to="/translation"><TranslateIcon fontSize={"small"}/></Link></IconButton>
                    </div>
                    <Typography variant="h5" component="div">
                        <TextField id="title" label="card title?" onInput={inputTitle}/>
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary" component="div">
                        <TextField id="set" label="set name?" onInput={inputCardSetName}/>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Stack className={"new-card-edit-stack"} direction="row" paddingBottom={3}>
                        <Button id={"new-card-button"} onClick={saveGameCard} sx={{
                            m: 5,
                            color: "#508356",
                            boxShadow: 0,
                            borderRadius: '15px'
                        }}><CheckBoxIcon/></Button>
                        <Button id={"new-card-button"} onClick={props.onClose} sx={{
                            m: 5,
                            color: "#D05F5F",
                            boxShadow: 0,
                            borderRadius: '15px'
                        }}><DoDisturbOnIcon/></Button>
                    </Stack>
                </CardActions>
            </Card>
        </>
    )

}
