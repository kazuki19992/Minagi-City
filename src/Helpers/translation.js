const dataset = {
    'emergency': 'もしもの場合',
    'move': '引っ越し',
    'garbage': 'ゴミ',
    'problem': 'なやみごと',
    'Minagi online': 'みなぎオンライン支所',
    'child': '子育て支援',
    'wedding': '結婚・離婚',
    'obituary': 'お悔やみ',
    'jobs': '就職・退職',
    'welfare': '介護・福祉'
}

export default function translation(word, lang) {
    if(lang === 'ja'){
        return dataset[word]
    }else{
        for(const [key, value] of Object.entries(dataset)){
            if(word === value){
                return key
            }
        }
    }
}