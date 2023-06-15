# word.golf-2
This is a revised implementation of word golf with XMLHttpRequest(). By sending and receiving JSON, we're able to dynamically render screens without having to reload the page.

### What is word golf?
Word golf is a language sport played by moving between static embeddings of words. Given a start word and a grid of its semantic neighbors, your goal is to reach a target word in as few jumps as possible. 
It is built on a modified set of Word2Vec embeddings, efficiently stored as a gensim KeyedVector. 
Other optimizations include storing the static embeddings as text. 

### Tech
The frontend uses Jinja templating, and the Tachyons CSS framework. The backend is Flask and Gensim.
