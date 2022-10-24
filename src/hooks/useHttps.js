import axios from "axios";
// const API_KEY1 = "055edbc0ccmshcd52161ed4a5e06p1caac0jsn9797163a1520"
// const API_KEY2 = "a8a48071ddmsh34dacd5862bd12dp1239a9jsn26d84333edba"
const API_KEY4 = "79d3e59debmsh441f4fbc045cc24p176332jsnf7eb26019ccd"
// const API_KEY3 = "43a1f96c3amsh72e392c7a7db2e5p14bf07jsnb0ea223f5850"

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
          'X-RapidAPI-Key': API_KEY4,
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
            'X-RapidAPI-Key': API_KEY4,
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
          'X-RapidAPI-Key': API_KEY4,
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
      console.log(id);
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/commentThreads',
        params: {part: 'snippet', videoId: `${id}`, maxResults: '100'},
        headers: {
          'X-RapidAPI-Key': API_KEY4,
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };

      const res = await axios.request(options);
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
          channelId: id,
          part: 'snippet,id',
          order: 'date',
          maxResults: '50'
        },
        headers: {
          'X-RapidAPI-Key': API_KEY4,
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      
      const res = await axios.request(options)
      // console.log(res.data);
      return res.data.items
    }
    catch(e){
        console.log(e.message);
    }
  }

  // const request5 = async (id) => {
  //   try {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://youtube-v3-alternative.p.rapidapi.com/video',
  //       params: {id},
  //       headers: {
  //         'X-RapidAPI-Key': API_KEY3,
  //         'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  //       }
  //     };
      
  //     const res = await axios.request(options);
  //     return res.data
  //   }
  //   catch(e){
  //     console.log(e.message);
  //   }
  // }

  return {request,request1,request2,request3,request4}
}

export default useHttp

// const options = {
//   method: 'GET',
//   url: 'https://youtube-v31.p.rapidapi.com/search',
//   params: {
//     relatedToVideoId: '7ghhRHRP6t4',
//     part: 'id,snippet',
//     type: 'video',
//     maxResults: '50'
//   },
//   headers: {
//     'X-RapidAPI-Key': '43a1f96c3amsh72e392c7a7db2e5p14bf07jsnb0ea223f5850',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
