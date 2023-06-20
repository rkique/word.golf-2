# word.golf-2
This is a revised implementation of word golf with `XMLHttpRequest()`. By sending and receiving JSON, the app dynamically renders screens without having to reload the page.

### What is word golf?
Word golf (word.golf) is a language sport played by moving between static embeddings of words. Given a start word and a grid of its neighbors, your goal is to reach a target word in as few jumps as possible. Every prompt given can be completed in two jumps!

Neighbors are determined by cosine similarity to the target vector, biased towards the start vector. This makes jumping feel more intuitive and ensures that players do not get too far off track.

<img width="1414" alt="Screenshot 2023-06-15 at 10 11 44 AM" src="https://github.com/rkique/word.golf-2/assets/46641307/c9d9081c-c41b-43db-bf5b-027c3dc9025e">

It is built on a modified set of Word2Vec embeddings, efficiently stored as a gensim KeyedVector. 

### Tech
The frontend uses Jinja templating, and the Tachyons CSS framework. The backend is Flask and Gensim.
