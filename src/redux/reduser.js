import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import useHttp from "../hooks/useHttps"

const initialState = {
    videos: [],
    video: {},
    chanelDetails:{},
    nextVideos: [],
    comments:{},
    loading: true,
    videoLoading:true,
    chanelLoading: true,
    commentLoading: true,
    nextVideoLoading:true,
    error: false,
    sidebareActive: true,
}

export const fetchVideos = createAsyncThunk(
    "videos/fetchingVideos",
    async () => {
        const  {request} = useHttp() 
        const data = await request()
        return data
    }
)

export const fetchVideoDetails = createAsyncThunk(
    "videoDetals/fetchingVideo",
    async (id) => {
        const {request1} = useHttp()
        const res = await request1(id)
        return res
    }
)

export const fetchChanelDetails = createAsyncThunk(
    "channelDetals/fetchingVideo",
    async (id) => {
        const {request2} = useHttp()
        const res = await request2(id)
        return res
    }
)

export const fetchNextVideo = createAsyncThunk(
    "nextVideo/fetchingVideo",
    async (id) => {
        const {request4} = useHttp()
        const res = await request4(id)
        return res
    }
)

const fetchingSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        isActiveSidebar: (state) => {
            state.sidebareActive = false
        },
        activeSidebar: (state) => {
            state.sidebareActive = !state.sidebareActive
        },
        // replyComment: (state, action) => {
        //     state.comments = state.comments.map(el => (
        //         action.payload === el.id ? {...el, .snippet.topLevelComment.snippet.textOriginal.canRate: !el.active,} : el
                
        //         ))
        // },
        newNextVideos: (state,action) => {
            state.nextVideoLoading = false
        }
    },

    extraReducers: builder => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.videos = action.payload;
                state.loading = false;
            })
            .addCase(fetchVideos.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(fetchVideoDetails.pending, (state) => {
                state.videoLoading = true
            })
            .addCase(fetchVideoDetails.fulfilled, (state, action) => {
                state.video = action.payload
                state.videoLoading = false;
            })
            .addCase(fetchVideoDetails.rejected, (state) => {
                state.videoLoading = false;
                state.error = true;
            })
            .addCase(fetchChanelDetails.pending, (state) => {
                state.chanelLoading = true
            })
            .addCase(fetchChanelDetails.fulfilled, (state, action) => {
                state.chanelDetails = action.payload
                state.chanelLoading = false;
            })
            .addCase(fetchChanelDetails.rejected, (state) => {
                state.chanelLoading = false;
                state.error = true;
            })
            .addCase(fetchNextVideo.pending, (state) => {
                state.nextVideoLoading = true
            })
            .addCase(fetchNextVideo.fulfilled, (state, action) => {
                console.log(action.payload);
                state.nextVideos = action.payload;
                state.nextVideoLoading = false;
            })
            .addCase(fetchNextVideo.rejected, (state) => {
                state.nextVideoLoading = false;
            })
            
    }

})


const {actions,reducer} = fetchingSlice
export const {isActiveSidebar,activeSidebar,newNextVideos} = actions
export default reducer