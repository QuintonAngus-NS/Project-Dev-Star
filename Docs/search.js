let docs = []
let fuse = null   // global Fuse instance

const searchBar = document.getElementById('searchBar')

fetch('/Docs/docs.json')
    .then(res => res.json())
    .then(data => {
        docs = data

        // Create Fuse instance (IMPORTANT: lowercase fuse)
        fuse = new Fuse(docs, {
            keys: ['title', 'tags', 'category', 'description'],
            threshold: 0.4
        })

        searchDetect()
    })

function renderResults(resultData) {

    const resultsContainer = document.getElementById('resultsContainer')

    resultsContainer.innerHTML = ''

    resultData.forEach(data => {
        const resultCard = document.createElement('a')
        const topic = document.createElement('div')
        const text = document.createElement('div')
        resultCard.classList.add('result')
        text.innerHTML = data.title
        topic.innerHTML = data.topic
        topic.classList.add('topic')
        topic.classList.add(data.topic)
        text.classList.add('resultText')
        const textClass = 'topic' + data.topic
        text.classList.add(textClass)

        const url = data.url

        resultCard.href = url
        resultCard.append(topic)
        resultCard.append(text)
        resultsContainer.append(resultCard)
    })
}

function queryData(query) {
    if (!query) return

    const results = fuse.search(query)
    return results.map(r => r.item)
}

function searchDetect() {
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase().trim()
        const resultData = queryData(query)


        renderResults(resultData)
    })
}
