import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import {Logo} from '../'
import { Grid, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';

export enum cameraChoiceEnum {
        OUT = 'http://localhost:8000/out',
        IN = 'http://localhost:8000/in',
};

interface homePageButtonProps {
        onClickCommencer: () => void;
        onCameraChoice: (value: cameraChoiceEnum) => void;        
}

const HomePageButton: React.FC<homePageButtonProps> = ({
        onClickCommencer,
        onCameraChoice
}) => {

        const [counter, setCounter] = useState(0);
        //const [cameraChoice, setCameraChoice] = useState<cameraChoiceEnum>(cameraChoiceEnum.OUT);
        let cameraChoice = React.useRef<cameraChoiceEnum>(cameraChoiceEnum.OUT);

        /*useEffect(() => {
                setCameraChoice(cameraChoice)
        }, [cameraChoice]);*/

        const onCameraChoiceChange = (sender: any) => {
                //setCameraChoice(sender?.target?.value ? sender.target.value : cameraChoiceEnum.OUT);
                cameraChoice.current = sender?.target?.value ? sender.target.value : cameraChoiceEnum.OUT;
                onCameraChoice(cameraChoice.current);
        };

        return <Grid container spacing={1}>             
            <video
            autoPlay
            loop
            muted
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: -1
            }}
        >
            <source src={require('./PrincipalBackground.mp4')} type="video/mp4"/>
        </video>
                <Logo/>
                <Grid container spacing={1}>
                        <Grid item xs={12} style={{
                                position: 'absolute',
                                left: '50%',
                                top: '35%',
                                transform: 'translate(-50%, -50%)',
                                color:'white',
                                fontWeight:"bold",
                                fontSize: '30px',
                                fontFamily: 'italic',
                                backgroundColor: 'rgba(189,195,199,0.5)',
                                borderRadius:'10px' ,
                        }}>
                                <Button
                                        variant='outlined'
                                        onClick={onClickCommencer}
                                >
                                        Commencer l'expérience
                                </Button>
                        </Grid>
                        <Grid item xs={12} style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                color:'white',
                                fontWeight:"bold" ,
                                fontSize: '30px',
                                fontFamily: 'italic',
                                backgroundColor: 'rgba(189,195,199,0.5)',
                                borderRadius:'10px' ,
                        }}>
                                <Select
                                labelId="camera-choice-select-label"
                                id="camera-choice-select"
                                value={cameraChoice.current}
                                label="cameraChoice"
                                onChange={onCameraChoiceChange}
                                >
                                        <MenuItem value={cameraChoiceEnum.OUT}>Caméra extérieure</MenuItem>
                                        <MenuItem value={cameraChoiceEnum.IN}>Caméra intérieure</MenuItem>
                                </Select>
                        </Grid>
                </Grid>
                
                
        </Grid>
}

export default HomePageButton;