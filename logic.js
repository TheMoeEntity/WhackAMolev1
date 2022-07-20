// let rand = document.querySelector("#randNum");
let rnd = 0
let hit = 0
let miss = 0
let index = []
let isvisible = false
for (var i = 0; i < 9; i++) {
	index.push(i)
}
let whenst = [330,2000,850,100,1000,500]
let howfast = 0
let items = document.querySelectorAll(".hide")
let flex = document.querySelector("#flex")

for (var i = 0; i < items.length; i++) {

  items[i].style.visibility  = 'hidden'

}

let setIndex = setInterval(()=>{
	
	rnd = index[Math.floor(Math.random()*9)]
	howfast = whenst[Math.floor(Math.random()*6)]

		setTimeout(()=>{

			for (var i = 0; i < items.length; i++) {

				if (i==rnd) {
					continue;
				}
				items[i].style.visibility = 'hidden'
			}
			items[rnd].style.visibility  = 'visible'	
				setTimeout(()=>{
					items[rnd].style.visibility  = 'hidden'	
				}
		,600)
		}
	,howfast)


},3000)



for (var i = 0; i < items.length; i++) {
  items[i].onclick = function() {
  	if (items[rnd].style.visibility  = 'visible') {
  		let currIndex = 0
  		currIndex = rnd
  		items[rnd].style.visibility  = 'hidden'
  		hit++
  		document.getElementById("hit").textContent = hit
  		index.splice(currIndex,1)
  		setTimeout(index.push(currIndex),1000)
  	} else if (items[rnd].style.visibility  = 'hidden') {
  		miss++
  		document.getElementById("missed").textContent = miss
  	}

  	
  }
}