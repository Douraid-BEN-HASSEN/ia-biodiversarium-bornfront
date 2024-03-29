import React, {useState, useEffect} from 'react'
import {Grid} from '@mui/material';
import {Cam, Logo, Description, HomePageButton} from '../'
import {CameraKey, cameraObject, CameraType} from "../../config";

interface mainPageProps {
}

const MainPage: React.FC<mainPageProps> = ({}) => {

    const [isHomePage, setIsHomePage] = useState(true);
    const [fishResult, setFishResult] = useState<{
        certainty: number,
        detection: string,
        s_name: string,
        s_type: string,
        family: string,
        description: string,
        position: {
            bottomright: { x: number, y: number },
            topleft: { x: number, y: number }
        }
    }[]>([]);


    const onClickCommencer = () => {
        setIsHomePage(false);
    }

    const fishResultHandler = (value: {
        certainty: number,
        detection: string,
        s_name: string,
        s_type: string,
        family: string,
        description: string,
        position: {
            bottomright: { x: number, y: number },
            topleft: { x: number, y: number }
        }
    }[]): void => {
        setFishResult(value);
    };

    const [cameraChoice, setCameraChoice] = useState<CameraKey>("CAMERA_OUT");

    useEffect(() => {
        setCameraChoice(cameraChoice)
    }, [cameraChoice]);

    const cameraChoiceHandler = (value: CameraKey) => {
        setCameraChoice(value);
    };

    return (
        <Grid container spacing={1}>

            {isHomePage ?

                <Grid item xs={12}>
                    <HomePageButton onCameraChoice={cameraChoiceHandler} onClickCommencer={onClickCommencer}/>
                </Grid>
                :
                <>
                    <Grid item xs={12}
                          style={{backgroundColor: "rgba(228, 233, 237,0.5)"}}>
                        <Cam
                            cameraChoice={cameraChoice}
                            fishResult={fishResult}
                            setFishResult={fishResultHandler}
                        />
                    </Grid>
                </>
            }
        </Grid>
    )

}

export default MainPage