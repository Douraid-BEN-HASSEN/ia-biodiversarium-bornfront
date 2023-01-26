const API_URL: string = process.env.REACT_APP_API_URL ?? "http://10.3.1.37"

export enum camera {
    CAMERA_OUT='video/1/stream.m3u8',
    CAMERA_IN='video/test/stream.m3u8',
    CAMERA_TEST='video/test/stream.m3u8',
}
export const config = {
    IA_API_TABLET_ANALYZE: `${API_URL}/api/tablet/analyze`
}
