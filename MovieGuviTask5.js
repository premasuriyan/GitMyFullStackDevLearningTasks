class Movie{
    constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(moviename)
    {
        let movie = [];
        for(let i=0;i<moviename.length;i++)
        {
            if(moviename[i] == this.title)
            {
                if(this.rating == "PG")
                movie.push(this.title)
            }
        }   
        return movie;    
    }
}

let movie1 = new Movie("Casino Royale","Eon Productions","PG13");
let movie2 = new Movie("96","VJ Productions");
let result = movie2.getPG(["96","Casino Royale"]);
console.log(result);
