const API_URL: string = process.env.REACT_APP_API_URL ?? "http://10.3.1.37"


export type CameraType = { url: string, name: string }
export type CameraKey = string

export const cameraObject: { [key: CameraKey]: CameraType } = {
    CAMERA_OUT : { url : 'video/1/stream.m3u8', "name": "Camera extérieure" },
    CAMERA_IN : { url: 'video/2/stream.m3u8', "name": "Camera Interieur" } ,
    CAMERA_TEST : { url: 'video/test/stream.m3u8', "name": "Camera test" }
}
export const config = {
    IA_API_TABLET_ANALYZE: `${API_URL}/api/tablet/analyze`
}
