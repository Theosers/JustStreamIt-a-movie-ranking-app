var bestMovie = document.getElementsByClassName('best-movie');
var myBoxImage = document.getElementsByClassName('box');
var bestMovieResume = document.getElementsByClassName('bestMovieResume');
var imageData = {best:[],bestS:[[],[],[],[],[],[],[],[]],animation:[[],[],[],[],[],[],[]],action: [[],[],[],[],[],[],[]], adventure:[[],[],[],[],[],[],[]]};
var page = 1;
var pageAnimation = 1;
var pageAction = 1;
var pageAdventure = 1;



var onClickRight = document.querySelectorAll(".Best-movies-onClick-right");
var onClickLeft = document.querySelectorAll(".Best-movies-onClick-left");
allImagesLoaded(page);


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
    modal_func(imageData['bestS'][0][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-two").onclick = function() {
    modal_func(imageData['bestS'][1][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-three").onclick = function() {
    modal_func(imageData['bestS'][2][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-four").onclick = function() {
    modal_func(imageData['bestS'][3][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-five").onclick = function() {
    modal_func(imageData['bestS'][4][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-six").onclick = function() {
    modal_func(imageData['bestS'][5][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-seven").onclick = function() {
    modal_func(imageData['bestS'][6][0]);
    modal.style.display = "block";
  }




  document.getElementById("new-realeases-modal-height").onclick = function() {
    modal_func(imageData['animation'][0][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-nine").onclick = function() {
    modal_func(imageData['animation'][1][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-ten").onclick = function() {
    modal_func(imageData['animation'][2][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-eleven").onclick = function() {
    modal_func(imageData['animation'][3][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-twelve").onclick = function() {
    modal_func(imageData['animation'][4][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-thirteen").onclick = function() {
    modal_func(imageData['animation'][5][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-fourteen").onclick = function() {
    modal_func(imageData['animation'][6][0]);
    modal.style.display = "block";
  }



  document.getElementById("new-realeases-modal-fiveteen").onclick = function() {
     
    modal_func(imageData['action'][0][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-sixteen").onclick = function() {
    modal_func(imageData['action'][1][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-seventeen").onclick = function() {
    modal_func(imageData['action'][2][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-heighteen").onclick = function() {
    modal_func(imageData['action'][3][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-nineteen").onclick = function() {
    modal_func(imageData['action'][4][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-twenty").onclick = function() {
    modal_func(imageData['action'][5][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-twentyone").onclick = function() {
    modal_func(imageData['action'][6][0]);
    modal.style.display = "block";
  }



  document.getElementById("new-realeases-modal-twentytwo").onclick = function() {
     
    modal_func(imageData['adventure'][0][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-twentythree").onclick = function() {
    modal_func(imageData['adventure'][1][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-twentyfour").onclick = function() {
    modal_func(imageData['adventure'][2][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-twentyfive").onclick = function() {
    modal_func(imageData['adventure'][3][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-twentysix").onclick = function() {
    modal_func(imageData['adventure'][4][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-twentyseven").onclick = function() {
    modal_func(imageData['adventure'][5][0]);
    modal.style.display = "block";
  }
  document.getElementById("new-realeases-modal-twentyheight").onclick = function() {
    modal_func(imageData['adventure'][6][0]);
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

function allImagesLoaded(page) {
    
    bestMovieDisplay();
    
    bestMovies(page);
    Animation(pageAnimation);
    Action(pageAction);
    Adventure(pageAdventure);
}
   
function bestMovieDisplay() {
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
                bestMovieResume[0].textContent = resume;
        

                bestMovie[0].attributes[0].textContent = currentImage;
            }) 
        
        
        
        
    })
    .catch(function(err) {
        // Une erreur est survenue
    });



}


function bestMovies(page) {
    async function bestMovies(page) {
        if (page === 1) {
      
            response = await fetch("http://localhost:8000/api/v1/titles/?page="+page+"&sort_by=-imdb_score&page_size=8");
        }else {
            
            response = await fetch("http://localhost:8000/api/v1/titles/?page="+page+"&sort_by=-imdb_score&page_size=7");
        }
        
    
    if (response.ok) {
        return await response.json();
    }
    
}

myfetch_next = bestMovies(page).then(async function (value) {

    
    let urls = [];
    for (let j=0; j < value['results'].length; j++){
            urls.push(value['results'][j]['url']);       
    }
    if (urls.length < 7) {

        moreMovies(urls.length);
    
        
    }

    return await urls;
    })
    
    let r2 = [];
    async function moreMovies(length) {
        response = await fetch("http://localhost:8000/api/v1/titles/?page=1&sort_by=-imdb_score&page_size="+(8-length));
        value = response.json();
        let moreUrls = [];
        value.then(async function (value) {
            for (let j=0; j < value['results'].length; j++){
                moreUrls.push(value['results'][j]['url']); 
            }
    
            return await moreUrls;
            

        })
        .then(async function (moreUrls) {
           
            for (let j=8-moreUrls.length; j < 8 ; j++) {
                
                let response = await fetch(moreUrls[j-(8-moreUrls.length)]);
                    
                if (response.ok) {
                    
                r2.push(response.json());
                    }
            }
           
            return await r2;
        })
        .then(async function (moreUrls) {

            for (let j=8-r2.length; j < 7 ; j++) {
                moreUrls[j-(7-r2.length)].then(async function (value) {
     
    
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
                
                window.imageData["bestS"][j].push([currentImage,title,genre,date_published,rated,imdb_score,directors,actors,duration,country,box_office,resume]);
                myBoxImage[j].attributes[0].textContent = currentImage;
                    
                })
                
                }  


        }) 

            
    }
        let r = [];

        myfetch_next.then(async function (urls) {
            if (page === 1){
                for (let j=1; j < urls.length ; j++) {
                    
                    let response = await fetch(urls[j]);
    
                if (response.ok) {
                    r.push(response.json());
                    }
                }
                return await r;
        }else {
            for (let j=0; j < urls.length ; j++) {
                
                let response = await fetch(urls[j]);

            if (response.ok) {
                r.push(response.json());
                }
            }
            return await r;
        }
        })
        .then(async function (urls) {
            for (let j=0; j < urls.length ; j++) {

            urls[j].then(async function (value) {
 

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
            
            window.imageData["bestS"][j].push([currentImage,title,genre,date_published,rated,imdb_score,directors,actors,duration,country,box_office,resume]);
            myBoxImage[j].attributes[0].textContent = currentImage;
                
            })
            
            }    
        })
    



}
function Animation(pageAnimation) {
    async function animation(pageAnimation) {
            response = await fetch("http://localhost:8000/api/v1/titles/?page="+pageAnimation+"&sort_by=-imdb_score&page_size=7&genre=Animation")        
    
    if (response.ok) {
        return await response.json();
    }
    
}
anim = animation(pageAnimation).then(async function (value) {
    
    let urls = [];
   
    for (let j=0; j < value['results'].length; j++){
   
            urls.push(value['results'][j]['url']);       
    }
    if (urls.length < 7) {

        moreMovies(urls.length);
    
        
    }   
    return await urls;
    })
    let r2 = [];
    async function moreMovies(length) {
        response = await fetch("http://localhost:8000/api/v1/titles/?page=1&sort_by=-imdb_score&page_size="+(7-length)+"&genre=Animation");
        value = response.json();
        let moreUrls = [];
        value.then(async function (value) {
            for (let j=0; j < value['results'].length; j++){
                moreUrls.push(value['results'][j]['url']); 
            }
    
            return await moreUrls;
            

        })
        .then(async function (moreUrls) {
            
            for (let j=7-moreUrls.length; j < 7 ; j++) {
                
                let response = await fetch(moreUrls[j-(7-moreUrls.length)]);
                    
                if (response.ok) {
                    
                r2.push(response.json());
                    }
            }
           
            return await r2;
        })
        .then(async function (moreUrls) {

            for (let j=7-r2.length; j < 7 ; j++) {
                moreUrls[j-(7-r2.length)].then(async function (value) {
     
    
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
                
                window.imageData["animation"][j].push([currentImage,title,genre,date_published,rated,imdb_score,directors,actors,duration,country,box_office,resume]);
                myBoxImage[j+7].attributes[0].textContent = currentImage;
                    
                })
                
                }  


        }) 

            
    }
    
        let r = [];

        anim.then(async function (urls) {

            for (let j=0; j < urls.length ; j++) {

                let response = await fetch(urls[j]);

            if (response.ok) {
                r.push(response.json());
                }
            }
            return await r;
        
        })
        .then(async function (urls) {
            for (let j=0; j < urls.length ; j++) {

            urls[j].then(async function (value) {

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
            
            window.imageData["animation"][j].push([currentImage,title,genre,date_published,rated,imdb_score,directors,actors,duration,country,box_office,resume]);
            myBoxImage[j+7].attributes[0].textContent = currentImage;
                
            })
            
            }    
        })
    


}
function Action(pageAction) {
   
    async function action(pageAction) {
            response = await fetch("http://localhost:8000/api/v1/titles/?page="+pageAction+"&sort_by=-imdb_score&page_size=7&genre=Action")        

    if (response.ok) {
        return await response.json();
    }

    }
    act = action(pageAction).then(async function (value) {
        

    let urls = [];

    for (let j=0; j < value['results'].length; j++){
          
            urls.push(value['results'][j]['url']);       
    }
    if (urls.length < 7) {
        moreMovies(urls.length);

        
    }   
    return await urls;
    })
    let r2 = [];
    async function moreMovies(length) {
        response = await fetch("http://localhost:8000/api/v1/titles/?page=1&sort_by=-imdb_score&page_size="+(7-length)+"&genre=Action");
        value = response.json();
        let moreUrls = [];
        value.then(async function (value) {
            for (let j=0; j < value['results'].length; j++){
                moreUrls.push(value['results'][j]['url']); 
            }

            return await moreUrls;
            

        })
        .then(async function (moreUrls) {

            for (let j=7-moreUrls.length; j < 7 ; j++) {
                
                let response = await fetch(moreUrls[j-(7-moreUrls.length)]);
                    
                if (response.ok) {
                    
                r2.push(response.json());
                    }
            }
          
            return await r2;
        })
        .then(async function (moreUrls) {

            for (let j=7-r2.length; j < 7 ; j++) {
                moreUrls[j-(7-r2.length)].then(async function (value) {
    

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
                
                window.imageData["action"][j].push([currentImage,title,genre,date_published,rated,imdb_score,directors,actors,duration,country,box_office,resume]);
                myBoxImage[j+14].attributes[0].textContent = currentImage;
           
                })
                
                
                } 


        }) 

            
    }

        let r = [];

        act.then(async function (urls) {

            for (let j=0; j < urls.length ; j++) {

                let response = await fetch(urls[j]);

            if (response.ok) {
                r.push(response.json());
                }
            }
            return await r;
        
        })
        .then(async function (urls) {
            for (let j=0; j < urls.length ; j++) {

            urls[j].then(async function (value) {

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
            
            window.imageData["action"][j].push([currentImage,title,genre,date_published,rated,imdb_score,directors,actors,duration,country,box_office,resume]);
            myBoxImage[j+14].attributes[0].textContent = currentImage;
                
            })
            
            }

        })

}
function Adventure(pageAdventure) {
    
    async function adventure(pageAdventure) {
    
    response = await fetch("http://localhost:8000/api/v1/titles/?page="+pageAdventure+"&sort_by=-imdb_score&page_size=7&genre=Adventure");

    if (response.ok) {
        return await response.json();
    }

    }
    adv = adventure(pageAdventure).then(async function (value) {
        

    let urls = [];

    for (let j=0; j < value['results'].length; j++){
         
            urls.push(value['results'][j]['url']);       
    }
    if (urls.length < 7) {
        moreMovies(urls.length);

        
    }   
    return await urls;
    })
    let r2 = [];
    async function moreMovies(length) {
        response = await fetch("http://localhost:8000/api/v1/titles/?page=1&sort_by=-imdb_score&page_size="+(7-length)+"&genre=Adventure");
        
        value = response.json();
        let moreUrls = [];
        value.then(async function (value) {
            for (let j=0; j < value['results'].length; j++){
                moreUrls.push(value['results'][j]['url']); 
            }

            return await moreUrls;
            

        })
        .then(async function (moreUrls) {
        
            for (let j=7-moreUrls.length; j < 7 ; j++) {
                
                let response = await fetch(moreUrls[j-(7-moreUrls.length)]);
                    
                if (response.ok) {
                    
                r2.push(response.json());
                    }
            }
        
            return await r2;
        })
        .then(async function (moreUrls) {

            for (let j=7-r2.length; j < 7 ; j++) {
                moreUrls[j-(7-r2.length)].then(async function (value) {
    

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
                
                window.imageData["adventure"][j].push([currentImage,title,genre,date_published,rated,imdb_score,directors,actors,duration,country,box_office,resume]);
                myBoxImage[j+21].attributes[0].textContent = currentImage;
                
                })
               
                
                } 


        }) 

            
    }

        let r = [];

        adv.then(async function (urls) {

            for (let j=0; j < urls.length ; j++) {

                let response = await fetch(urls[j]);

            if (response.ok) {
                r.push(response.json());
                }
            }
            return await r;
        
        })
        .then(async function (urls) {
            for (let j=0; j < urls.length ; j++) {

            urls[j].then(async function (value) {

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
            
            window.imageData["adventure"][j].push([currentImage,title,genre,date_published,rated,imdb_score,directors,actors,duration,country,box_office,resume]);
            myBoxImage[j+21].attributes[0].textContent = currentImage;
                
            })
            
            }
           

        })
    
}
function changeImagesRight() {
    page = page + 1;
 
    if (page === 12266) {
        page = 1;
    }
    imageData["bestS"] = [[],[],[],[],[],[],[],[]];
    bestMovies(page);
            
}  
function changeImagesLeft() {
     page = page - 1;
    if (page === 0) {
        page = 12265;
    }
    imageData["bestS"] = [[],[],[],[],[],[],[],[]];
    bestMovies(page);

} 

function changeImagesRightAnimation() {
    pageAnimation = pageAnimation + 1;
    if (pageAnimation === 307) {
        pageAnimation = 1;
    }
    imageData["animation"] = [[],[],[],[],[],[],[]];
    Animation(pageAnimation);
 
}
function changeImagesLefttAnimation() {
    pageAnimation = pageAnimation - 1;
    if (pageAnimation === 0) {
        pageAnimation = 306;
    }
    imageData["animation"] = [[],[],[],[],[],[],[]];
    Animation(pageAnimation);
    
   
}
function changeImagesRightAction() {
    pageAction = pageAction + 1;
    if (pageAction === 1851) {
        pageAction = 1;
    }
    imageData["action"] = [[],[],[],[],[],[],[]];
    Action(pageAction);
}
function changeImagesLefttAction() {
    pageAction = pageAction - 1;
    if (pageAction === 0) {
        pageAction = 1850;
    }
    imageData["action"] = [[],[],[],[],[],[],[]];
    Action(pageAction);
    
   
}
function changeImagesRightAdventure() {
    pageAdventure = pageAdventure + 1;
    if (pageAdventure === 1086) {
        pageAdventure = 1;
    }
    imageData["adventure"] = [[],[],[],[],[],[],[]];
    Adventure(pageAdventure);
}
function changeImagesLefttAdventure() {
    pageAdventure = pageAdventure - 1;
    if (pageAdventure === 0) {
        pageAdventure = 1085;
    }
    imageData["adventure"] = [[],[],[],[],[],[],[]];
    Adventure(pageAdventure);
    
}

