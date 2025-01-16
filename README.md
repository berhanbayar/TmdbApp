
# The Movie DB App

I developed this application as part of a task given by a company I applied to for their long-term internship program. The application contributed to my experience in REST API integration, UI/UX design, and basic mobile application development.


## API Usage Example

#### Fetches movies currently in theaters: (NowPlaying)

```http
  GET `${apibaseUrl}/movie/now_playing?api_key=${apiKey}` 
```

| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `apibaseUrl` | `string` | https://api.themoviedb.org/3 |
| `apiKey` | `string` | **MUST** Your Api Key from Themoviedb |





  
## How to run this project

Clone the project

```bash
  git clone https://github.com/berhanbayar/TmdbApp
```

Go to root of project

```bash
  cd TmdbApp
```

You have to install Expo SDK 52

```bash
  npm add expo
```

Sunucuyu çalıştırın

```bash
  npx expo start
```

  
## Technologies Used

**Frontend:** ReactNative, Expo, NativeWindCSS, Thirdparty Libraries

**Backend:** Ready API from TheMovieDb

  
## Features

- A dynamic Light/Dark theme that changes based on the user's phone theme.  
- A homepage where we can see currently showing movies, trending movies, the all-time most liked movies, and upcoming releases through API connections.  
- A movie detail page where we can find information about the release year, runtime, cast, genres, a brief description, and similar movies.  
- An actor page where we can get detailed information about the actors and see all the movies they have appeared in.  
- A search page where we can look up all the movies available in the app.  

  
## Screenshots

![Home Page](https://hizliresim.com/cjmyfxm)

![Home Page - Dark](https://i.hizliresim.com/bv1dcw0.png)

![Movie Page](https://i.hizliresim.com/43p8ig0.png)

![Movie Page - Dark](https://i.hizliresim.com/6u73yef.png)

![Search Page](https://i.hizliresim.com/nr6f49z.png)

![Search Page - Dark](https://i.hizliresim.com/je0xxub.png)

![Cast Page](https://i.hizliresim.com/5eqt7pc.png)

![Cast Page -Dark](https://i.hizliresim.com/9er7kll.png)

![Home Page 2](https://i.hizliresim.com/byuzhpl.png)

![Home Page 2 - Dark](https://i.hizliresim.com/pztt4jq.png)



  
## Teşekkürler



  
