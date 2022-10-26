import axios from "axios";
const API_KEY1 = "055edbc0ccmshcd52161ed4a5e06p1caac0jsn9797163a1520"
// const API_KEY2 = "a8a48071ddmsh34dacd5862bd12dp1239a9jsn26d84333edba"
// const API_KEY3 = "43a1f96c3amsh72e392c7a7db2e5p14bf07jsnb0ea223f5850"
// const API_KEY4 = "79d3e59debmsh441f4fbc045cc24p176332jsnf7eb26019ccd"
// const API_KEY5 = "57c8065c56msh2723caf251c260fp16596djsn056bbae27962"
// const API_KEY6 = "ee2c89fdb6msh76d553919d3abe6p1e5fa8jsn76f525045f21"
// const API_KEY7 = "56a1601a18mshf98e507616581bfp183d7cjsn817861cf7573"

const API_KEY = API_KEY1 

const useHttp = () => {
  const request = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          relatedToVideoId: '7ghhRHRP6t4',
          part: 'id,snippet',
          type: 'video',
          maxResults: '50'
        },
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      
      const res = await axios.request(options)
      // console.log(res.data.items);
      return res.data.items
    }
    catch(e){
        console.log(e.message);
    }
  }
  
  const request1 = async (id) => {
      try {
          
        const options = {
          method: 'GET',
          url: 'https://youtube-v31.p.rapidapi.com/videos',
          params: {part: 'contentDetails,snippet,statistics', id},
          headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
          }
        };
        
        const res = await axios.request(options)
        // console.log(res.data);
        return res.data
      }
      catch(e){
        console.log(e.message);
      }
  }
  
  const request2 = async (id) => {
    try {
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/channels',
        params: {part: 'snippet,statistics', id},
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      
      const res = await axios.request(options)
      // console.log(res.data);
      return res.data
    }
    catch(e){
        console.log(e.message);
    }
  }

  const request3 = async (id) => {
    try {
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          relatedToVideoId: id,
          part: 'id,snippet',
          type: 'video',
          maxResults: '50'
        },
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      
      const res = await axios.request(options)
      // console.log(res.data.items);
      return res.data.items
    }
    catch(e){
        console.log(e.message);
    }
    
  }

  const request4 = async (id) => {
    try {
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          relatedToVideoId: id,
          part: 'id,snippet',
          type: 'video',
          maxResults: '50'
        },
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      
      const res = await axios.request(options)
      // console.log(res.data.items);
      return res.data.items
    }
    catch(e){
        console.log(e.message);
    }
    finally{
    }
  }

  const request5 = async (value) => {
    try {
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          q: value,
          part: 'snippet,id',
          regionCode: 'US',
          maxResults: '60',
          order: 'date'
        },
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      
      const res = await axios.request(options)
      // console.log(res.data.items);
      return res.data.items
    }
    catch(e){
      console.log(e.message);
    }
    
  }


  return {request,request1,request2,request3, request4,request5}
}

export default useHttp

// const options = {
//   method: 'GET',
//   url: 'https://youtube-v31.p.rapidapi.com/search',
//   params: {
//     q: "samar badriddinov",
//     part: 'snippet,id',
//     regionCode: 'US',
//     maxResults: '60',
//     order: 'date'
//   },
//   headers: {
//     'X-RapidAPI-Key': '57c8065c56msh2723caf251c260fp16596djsn056bbae27962',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
