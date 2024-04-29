const API_URI = "https://api.artic.edu/api/v1"
const ids = []

function createDivs(title, description) {
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    h2.innerText = title
    div.append(h2)
    const p = document.createElement("p")
    p.innerHTML = description ?? "description not found..."
    div.append(p)
    return div
}

async function getArtists(artist) {
    const data = await fetch(`${API_URI}/artists/search?q=${artist}`)
    .then(data => data.json())
    return data.data
}

async function getArtistDetails(id) {
    const details = await fetch(`${API_URI}/artists/${id}`)
    .then(detail => detail.json())
    return details.data
}

async function renderArtists(event) {
    if (document.getElementsByTagName("div").length != 0) {
        location.reload()
        return false
    }
    event.preventDefault()
    const artistQuery = document.querySelector("#search").value.replace(" ", "_")
    console.log(artistQuery)
    const data = await getArtists(artistQuery)
    console.log(data)
    data.forEach(artist => ids.push(artist.id))
    console.log(ids)
    for (id of ids) {
        const details = await getArtistDetails(id)
        console.log(details)
        const section = document.querySelector("section")
        section.appendChild(createDivs(details.title, details.description))
    }
}
