class Blog{

    constructor(title, content, id){
        this.title = title;
        this.content = content;
        this.id = id;  //something uniu
    }

    UpdateTitle(newTitle){
        this.title = newTitle;
        console.log("Title has been updated!\n", "The new title is: \n", this.title);
        
    }


    UpdateContent(newContent){
        this.content = newContent;
        console.log("Content has been updated!\n", "The new content is: \n", this.content);
    }

    Show(){
        console.log(this.title, " \n", this.content); 
    }

    
}



b1 = new Blog("This is my first Blog!", "The date was Jan. 26 2024");
b1.Show(); 

b1.UpdateTitle("I edited my Title");
b1.UpdateContent("I was hit by a car today");
b1.Show();




class Board{
    // Access to all blogs that are assigned to this board --> Array of blogs --> find more effective storing device
    //Users that can update the board --> Add blog to the data structure
    //Update the board with new blogs --> Update blog based on index/hash of blog
    //delete blogs from the board --> delete blog based on index/hash. ?? Should it leave the index empty or move all other blogs?

    constructor(){
        this.listOfBlogs = [];
        this.creators = [];
    }

    AddBlog(newestBlog){
        this.listOfBlogs.append(newestBlog);
    }


    //CRUD Create - Read - Update - Delete //

    //CreateBoard()
        //not relevent
    //ReadBoard()
        //Index through blogs and read out titles and content in order
    //UpdateBoard()
        //AddBlogPost() --> Appends list to add newest Blog
        //UpdateBlogPost() --> Search through index, do blog function 
    //DeleteBoard()

        //DeleteBlogPost()



}