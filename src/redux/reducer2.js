import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import useHttp from "../hooks/useHttps"


const initialState = {
    comments: [],
    commentLoading:true,
    searchVideos:[],
    searchVideosLoading:true
}

export const commentsFetching = createAsyncThunk(
    "comment/commentsFetchig",
    async (id) => {
        const {request3} = useHttp()

        const res = await request3(id)
        return res
    }
) 

export const searchVideosFetching = createAsyncThunk(
    "searchVideos/searchVideosFetchig",
    async (value) => {
        const {request5} = useHttp()

        const res = await request5(value)
        return res
    }
) 

const fetchingSlice = createSlice({
    name:"comments",
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder
            .addCase(commentsFetching.pending, (state) => {
                state.commentLoading = true
            })
            .addCase(commentsFetching.fulfilled, (state, action) => {
                state.commentLoading = false
                state.comments = action.payload
            })
            .addCase(commentsFetching.rejected, (state) => {
                state.commentLoading = false
            })
            .addCase(searchVideosFetching.pending, (state) => {
                state.searchVideosLoading = true
            })
            .addCase(searchVideosFetching.fulfilled, (state, action) => {
                state.searchVideosLoading = false
                state.searchVideos = action.payload
            })
            .addCase(searchVideosFetching.rejected, (state) => {
                state.searchVideosLoading = false
            })
    }
})



const {reducer, actions} = fetchingSlice

export default reducer