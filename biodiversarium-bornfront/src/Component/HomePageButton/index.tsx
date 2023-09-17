import React from 'react'
import {Button} from '@mui/material';
import {Logo} from '../'
import {Grid, MenuItem} from '@mui/material';
import Select from '@mui/material/Select';
import {CameraKey, cameraObject, CameraType} from '../../config';

interface homePageButtonProps {
    onClickCommencer: () => void;
    onCameraChoice: (value: string) => void;
}

const HomePageButton: React.FC<homePageButtonProps> = ({onClickCommencer, onCameraChoice}) => {

    let cameraChoice = React.useRef<CameraKey>("CAMERA_OUT");

    const onCameraChoiceChange = (sender: any) => {
        cameraChoice.current = sender?.target?.value ? sender.target.value : cameraObject.CAMERA_OUT;
        onCameraChoice(cameraChoice.current);
    };

    return (
        <Grid container spacing={1}>
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
                <source src={require('./PrincipalBackgroundLooped.mp4')} type="video/mp4"/>
            </video>
            <Logo/>
            <Grid container spacing={1}>

                <Button
                    style={{
                        marginTop: 30,
                        position: 'absolute',
                        left: '50%',
                        top: '35%',
                        transform: 'translate(-50%, -50%)',
                        color: 'rgba(255,255,255,1)',
                        fontWeight: 'bold',
                        fontSize: '30px',
                        fontFamily: 'Lato',
                        backgroundColor: 'rgba(173,216,230,0.5)',
                        fontStyle: 'oblique',
                        textTransform: 'capitalize',

                    }}
                    variant='outlined'
                    onClick={onClickCommencer}
                >
                    Commencer l'expérience
                </Button>
                <Select
                    style={{
                        borderColor: 'rgba(255,255,255,1)',
                        backgroundColor: 'rgba(173,216,230,0.5)',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        fontWeight: "bold",
                        fontSize: '30px',
                        fontFamily: 'Lato',
                        fontStyle: 'oblique',
                    }}
                    labelId="camera-choice-select-label"
                    id="camera-choice-select"
                    value={cameraChoice.current}
                    label="cameraChoice"
                    onChange={onCameraChoiceChange}
                >
                    {Object.keys(cameraObject).map((camera) => (
                        <MenuItem value={camera}> {cameraObject[camera].name} </MenuItem>
                    ))}

                </Select>
            </Grid>


        </Grid>
    )
}

export default HomePageButton;