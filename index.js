var bestMovie = document.getElementsByClassName('best-movie');
var myBoxImage = document.getElementsByClassName('box');
var imageData = {};
var page = 1;
var pageAnimation = 1;
var pageAction = 1;
var pageAdventure = 1;



var onClickRight = document.querySelectorAll("#Best-movies-onClick-right");
var onClickLeft = document.querySelectorAll("#Best-movies-onClick-left");
allImagesLoaded();


onClickRight[0].onclick = changeImagesRight;
onClickLeft[0].onclick = changeImagesLeft;
onClickRight[1].onclick = changeImagesRightAnimation;
onClickLeft[1].onclick = changeImagesLefttAnimation;
onClickRight[2].onclick = changeImagesRightAction;
onClickLeft[2].onclick = changeImagesLefttAction;
onClickRight[3].onclick = changeImagesRightAdventure;
onClickLeft[3].onclick = changeImagesLefttAdventure;


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

btn.onclick = function() {
    modal_func(imageData['best']);
    modal.style.display = "block";
    
  }
document.getElementById("new-realeases-modal-one").onclick = function() {
    modal_func(imageData['bestS'][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-two").onclick = function() {
    modal_func(imageData['bestS'][1]);
    modal.style.display = "block";
  }


function modal_func(nom) {
    
    document.getElementById('image-modal').src = nom[0];
    document.getElementById('title-modal').textContent = nom[1] ;
    document.getElementById('genre-modal').textContent = "Genre : " + nom[2];
    document.getElementById('date-published-modal').textContent = "Date published : " + nom[3];
    document.getElementById('rated-modal').textContent = "Rated : " + nom[4];
    document.getElementById('imb-score-modal').textContent = "Score : " + nom[5];
    document.getElementById('directors-modal').textContent = "Directors : " + nom[6];
    document.getElementById('actors-modal').textContent = "Actors : " + nom[7];
    document.getElementById('duration-modal').textContent = "Duration : " + nom[8];
    document.getElementById('country-modal').textContent = "Country : " + nom[9];
    document.getElementById('box_office-modal').textContent = "Box office : " + nom[10];
    document.getElementById('resume-modal').textContent = nom[11];




}

function allImagesLoaded() {
    
    fetch("http://localhost:8000/api/v1/titles/?page=1&sort_by=-imdb_score&page_size=1")
    .then(function(res) {
        if (res.ok) {   
            return res.json();
            
        }
    })
    .then(function(value) {
        url = value['results'][0]['url'];
        fetch(url)
            .then(function(res) {
                if (res.ok) {
                    
                    return res.json();
                }
            })
            .then(function(value) {
 
                currentImage = value['image_url'];
                title = value['title'];
                genre = value['genres'];
                date_published = value['date_published'];
                rated = value['avg_vote'];  
                imdb_score = value['imdb_score'];
                directors = value['directors'];
                actors = value['actors'];
                duration = value['duration'];
                country = value['countries'];
                box_office = value['rated'];
                resume = value['description'];
        
                window.imageData["best"] = [currentImage,title,genre,date_published,rated,imdb_score,directors,actors,duration,country,box_office,resume];
                
          



                bestMovie[0].attributes[0].textContent = currentImage;
            }) 
        
        
        
        
    })
    .catch(function(err) {
        // Une erreur est survenue
    });
    async function bestMovies() {

        const response = await fetch("http://localhost:8000/api/v1/titles/?page=1&sort_by=-imdb_score&page_size=8");
        const value = await response.json();
        currentImage = [];
        for (let i = 1; i < 8 ; i++) {  
            currentImage.push(value['results'][i]['image_url']);
        }
        return await currentImage;
    }
    bestMovies().then(function(currentImage) {
        for(j=0; j<7; j++) {
            myBoxImage[j].attributes[0].textContent = currentImage[j];
        }
    })
    async function Animation() {

        const response = await fetch("http://localhost:8000/api/v1/titles/?page=1&sort_by=-imdb_score&page_size=7&genre=Animation");
        const value = await response.json();
        currentImage = [];
        for(j=0; j<7; j++){
            currentImage.push(value['results'][j]['image_url']);
        }
        return await currentImage;
    }
    Animation().then(function(currentImage) {
        for(j=0; j<7; j++) {
            myBoxImage[7+j].attributes[0].textContent = currentImage[j];
        }
    })
    async function Action() {

        const response = await fetch("http://localhost:8000/api/v1/titles/?page=1&sort_by=-imdb_score&page_size=7&genre=Action");
        const value = await response.json();
        currentImage = [];
        for(j=0; j<7; j++){
            currentImage.push(value['results'][j]['image_url']);
        }
        return await currentImage;
    }
    Action().then(function(currentImage) {
        for(j=0; j<7; j++) {
            myBoxImage[14+j].attributes[0].textContent = currentImage[j];
        }
    })
    async function Adventure() {

        const response = await fetch("http://localhost:8000/api/v1/titles/?page=1&sort_by=-imdb_score&page_size=7&genre=Adventure");
        const value = await response.json();
        currentImage = [];
        for(j=0; j<7; j++){
            currentImage.push(value['results'][j]['image_url']);
        }
        return await currentImage;
    }
    Adventure().then(function(currentImage) {
        for(j=0; j<7; j++) {
            myBoxImage[21+j].attributes[0].textContent = currentImage[j];
        }
    })

}
   

function changeImagesRight() {
    page = page + 1;
    if (page === 10733) {
        page = 1;
    }
    console.log("page ",page)


   async function myfetch() {
       let response = await fetch("http://localhost:8000/api/v1/titles/?page="+page+"&sort_by=-imdb_score&page_size=7")
       if (response.ok) {
                    
        return await response.json();
       }
       
   }
   myfetch_next = myfetch().then(async function (value) {
       urls = [];
    for (let j=0; j < 8; j++){

            urls.push(value['results'][j]['url']);
            console.log(urls);
            
        
    }
    return await urls;
    })
    u = [];
    for (let j=0; j < 7; j++) {

        myfetch_next.then(async function (urls) {
    
        
            if (page === 1) { 
            let response = await fetch(urls[j-1])
            if (response.ok) {
                console.log(urls[j-1])
                return await response.json();
                }
            }else {

                let response = await fetch(urls[j-1])
            if (response.ok) {
                console.log(urls[j-1])
                return await response.json();
                }
            }
            
        
        })
        .then(async function (value) {
            currentImage = value['image_url'];
            title = value['title'];
            genre = value['genres'];
            date_published = value['date_published'];
            rated = value['avg_vote'];  
            imdb_score = value['imdb_score'];
            directors = value['directors'];
            actors = value['actors'];
            duration = value['duration'];
            country = value['countries'];
            box_office = value['rated'];
            resume = value['description'];

            myBoxImage[j-1].attributes[0].textContent = currentImage;
        })
    }

        
            
                 
                /*for (let j=size-7; j < size; j++) {
                    console.log(size)
                    url = value['results'][k]['url'];
                    window.imageData["bestS"] = [];
                    fetch(url)
                        .then(function(res) {
                            if (res.ok) {
                                
                                return res.json();
                            }
                        })
                        .then(function(value) {
                                console.log(url);
                                
                                currentImage = value['image_url'];
                                title = value['title'];
                                genre = value['genres'];
                                date_published = value['date_published'];
                                rated = value['avg_vote'];  
                                imdb_score = value['imdb_score'];
                                directors = value['directors'];
                                actors = value['actors'];
                                duration = value['duration'];
                                country = value['countries'];
                                box_office = value['rated'];
                                resume = value['description'];
                                
                                window.imageData["bestS"].push([currentImage,title,genre,date_published,rated,imdb_score,directors,actors,duration,country,box_office,resume]);
                                
                                myBoxImage[k].attributes[0].textContent = currentImage;
                        })
                        .catch(function(err) {
                            // Une erreur est survenue
                        });
                        

                        k = k + 1;
                    
                }*/
                        
            
            


        
            
}  
function changeImagesLeft() {

    page = page - 1;   
    if (page === 0) {
        page = 10732;
    }
    console.log(page);

    
    fetch("http://localhost:8000/api/v1/titles/?page="+page+"&sort_by=-imdb_score&page_size=8")
            .then(function(res) {
                if (res.ok) {
                    
                    return res.json();
                }
            })
            .then(function(value) {
                for (let i = 1; i < 8 ; i++) {   
                currentImage = value['results'][i]['image_url'];
                myBoxImage[i-1].attributes[0].textContent = currentImage;
                }
            })
            .catch(function(err) {
                // Une erreur est survenue
            });
}  
function changeImagesRightAnimation() {
    pageAnimation = pageAnimation + 1;
    if (pageAnimation === 307) {
        pageAnimation = 1;
    }
    console.log(pageAnimation);

    fetch("http://localhost:8000/api/v1/titles/?page="+pageAnimation+"&sort_by=-imdb_score&page_size=7&genre=Animation")
        .then(function(res) {
            if (res.ok) {
                
                return res.json();
            }
        })
        .then(function(value) {
            currentImage = value['results'][0]['image_url'];
            
            for (let i = 0; i < 7 ; i++) {
            
            currentImage = value['results'][i]['image_url'];
            myBoxImage[7+i].attributes[0].textContent = currentImage;
                

            }
           
        })
        .catch(function(err) {
            // Une erreur est survenue
        });
}
function changeImagesLefttAnimation() {
    pageAnimation = pageAnimation - 1;
    if (pageAnimation === 0) {
        pageAnimation = 306;
    }
    console.log(pageAnimation);

    fetch("http://localhost:8000/api/v1/titles/?page="+pageAnimation+"&sort_by=-imdb_score&page_size=7&genre=Animation")
        .then(function(res) {
            if (res.ok) {
                
                return res.json();
            }
        })
        .then(function(value) {
            currentImage = value['results'][0]['image_url'];
            for (let i = 0; i < 7 ; i++) {
            
            currentImage = value['results'][i]['image_url'];
            myBoxImage[7+i].attributes[0].textContent = currentImage;
        

            }
            
        })
        .catch(function(err) {
            // Une erreur est survenue
        });
}
function changeImagesRightAction() {
    pageAction = pageAction + 1;
    if (pageAction === 1851) {
        pageAction = 1;
    }
    console.log(pageAction);

    fetch("http://localhost:8000/api/v1/titles/?page="+pageAction+"&sort_by=-imdb_score&page_size=7&genre=Action")
        .then(function(res) {
            if (res.ok) {
                
                return res.json();
            }
        })
        .then(function(value) {
            currentImage = value['results'][0]['image_url'];
            
            for (let i = 0; i < 7 ; i++) {
            
            currentImage = value['results'][i]['image_url'];
            myBoxImage[14+i].attributes[0].textContent = currentImage;
                

            }
            
        })
        .catch(function(err) {
            // Une erreur est survenue
        });
}
function changeImagesLefttAction() {
    pageAction = pageAction - 1;
    if (pageAction === 0) {
        pageAction = 1850;
    }
    console.log(pageAction);

    fetch("http://localhost:8000/api/v1/titles/?page="+pageAction+"&sort_by=-imdb_score&page_size=7&genre=Action")
        .then(function(res) {
            if (res.ok) {
                
                return res.json();
            }
        })
        .then(function(value) {
            currentImage = value['results'][0]['image_url'];
            for (let i = 0; i < 7 ; i++) {
            
            currentImage = value['results'][i]['image_url'];
            myBoxImage[14+i].attributes[0].textContent = currentImage;
        

            }
            
        })
        .catch(function(err) {
            // Une erreur est survenue
        });
}
function changeImagesRightAdventure() {
    pageAdventure = pageAdventure + 1;
    if (pageAdventure === 1086) {
        pageAdventure = 1;
    }
    console.log(pageAdventure);

    fetch("http://localhost:8000/api/v1/titles/?page="+pageAdventure+"&sort_by=-imdb_score&page_size=7&genre=Adventure")
        .then(function(res) {
            if (res.ok) {
                
                return res.json();
            }
        })
        .then(function(value) {
            currentImage = value['results'][0]['image_url'];
            
            for (let i = 0; i < 7 ; i++) {
            
            currentImage = value['results'][i]['image_url'];
            myBoxImage[21+i].attributes[0].textContent = currentImage;
                

            }
            
        })
        .catch(function(err) {
            // Une erreur est survenue
        });
}
function changeImagesLefttAdventure() {
    pageAdventure = pageAdventure - 1;
    if (pageAdventure === 0) {
        pageAdventure = 1085;
    }
    console.log(pageAdventure);

    fetch("http://localhost:8000/api/v1/titles/?page="+pageAdventure+"&sort_by=-imdb_score&page_size=7&genre=Adventure")
        .then(function(res) {
            if (res.ok) {
                
                return res.json();
            }
        })
        .then(function(value) {
            currentImage = value['results'][0]['image_url'];
            for (let i = 0; i < 7 ; i++) {
            
            currentImage = value['results'][i]['image_url'];
            myBoxImage[21+i].attributes[0].textContent = currentImage;
        

            }
            
        })
        .catch(function(err) {
            // Une erreur est survenue
        });
}

