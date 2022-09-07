from gensim.models import KeyedVectors

def txt_to_set(path):
    txt_file = open(path, 'r', encoding="utf-8")
    txt = txt_file.readlines()
    txt = [x.strip() for x in txt]
    return set(txt)
    
def txt_to_list(path):
    txt_file = open(path, 'r', encoding="utf-8")
    txt = txt_file.readlines()
    txt = [x.strip() for x in txt]
    return txt

def txt_to_dict(path):
    pre = txt_to_list(path)
    pre = [rawlist.split(",") for rawlist in pre]
    return {wordlist[0]: wordlist[1:] for wordlist in pre}

def similarity(w1,w2, wv):
    return wv.similarity(w1=w1, w2=w2)

def get_prompts(l):
    p = [w.split(',') for w in l]
    return p

WV = KeyedVectors.load('application/models/word2vec_2.3.kv')
PRECOMPUTED = txt_to_dict("application/precalculated/word2vec_2.3_200.txt")
PROMPTS = get_prompts(txt_to_list("application/static/text/prompts.txt"))

def get_curve(word, target):
    results = PRECOMPUTED[word]
    def similarity_to_target(x): 
        return similarity(x, target, WV)
    results.sort(key=similarity_to_target, reverse=True)
    results__biased = results[0:27]
    results__biased.sort()
    results__biased.insert(0,word)
    return results__biased


