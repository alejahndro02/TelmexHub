// VARIABLE GLOBAL
let map
let pointsArray

// DOM READY
document.addEventListener("DOMContentLoaded", function () {
    map = L.map("mapid").setView([19.127024777381703, -98.7653946876526], 12)
    
    // Tiles de open street maps
    //L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
    }).addTo(map);
    let barrioRosario = L.polygon([[19.127024777381703, -98.7653946876526],
                            [19.124733902339464, -98.76648902893066],
                            [19.122442995534243, -98.7615966796875],
                            [19.125017729289837, -98.76043796539308],
                            [19.127045050470365, -98.7654161453247]],
                        ).addTo(map)
        // let markerTelmexHub = L.marker([19.431326, -99.136773]).addTo(map)
    barrioRosario.bindTooltip("barrio del Rosario")
    // marker2.bindTooltip("bario del Rosario")
    // marker3.bindTooltip("bario del Rosario")
    // marker4.bindTooltip("bario del Rosario")
    // marker5.bindTooltip("bario del Rosario")
    // markerTelmexHub.bindTooltip("TelmexHub")
})

var latlngs = [
                [19.430278, -99.1175]
                [19.429406, -99.119891]
                [19.425481, -99.125048]
                [19.424861, -99.132949]
                [19.426374, -99.137789]
    
];
var polyline = L.polyline(latlngs, {color: 'pink'}).addTo(map);
// zoom the map to the polyline
map.fitBounds(polyline.getBounds());

// function onMapClick(e) {
//     pointsArray.push([e.latlng.lat, e.latlng.lng])
//     console.log(pointsArray)
// }

// function startPolygon() {
//     pointsArray = []
//     document.getElementById("start-polygon").setAttribute("disabled", true)
//     document.getElementById("draw-polygon").removeAttribute("disabled")
//     map.on('click', onMapClick)
// }

// function finishPolygon() {
//     document.getElementById("draw-polygon").setAttribute("disabled", true)
//     document.getElementById("start-polygon").removeAttribute("disabled")
//     map.off('click', onMapClick)
//     // let coords = "<ul>" + pointsArray.map(p => `<li>${p}</li>`).join('') + "</ul>"
//     // L.polygon(pointsArray,{}).bindPopup(coords).addTo(map)
//     L.polygon(pointsArray,{}).addTo(map)
// }

// function showLocation () {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(moveToLocation)
//     } else {
//         console.log("No tienes acceso a GPS")
//     }
// }

// function moveToLocation (position) {
//     console.log(position)
//     map.flyTo([position.coords.latitude, position.coords.longitude], 16)
// }
