    function FormatBlog() {
            var feed = document.getElementById("feed");
        
            var newBlogDiv = document.createElement('div');
            var newHDiv = document.createElement('div');
            var newCDiv = document.createElement('div');
            var newHead = document.createElement('h1');
            var newContent = document.createElement('body');
            
            newBlogDiv.id = "Blog"; // gives id a headDiv element name
            newHead.id = "Head"; // gives id to head element
            newCDiv.id = "ContentContainer";
            newContent.id = "ContentBody";

            let head = prompt("Give title");  // changes the text to the Blog.title
            newHead.textContent = head
            let content = prompt("Give Content"); // changes the text to Blog.content
            newContent.textContent = content


            feed.appendChild(newBlogDiv);
            newBlogDiv.appendChild(newHDiv);
            newBlogDiv.appendChild(newCDiv);

            newHDiv.appendChild(newHead);
            newCDiv.appendChild(newContent);
            

            let temp = new Blog(head, content) // creates the new content into a blog;

            return temp
    }










