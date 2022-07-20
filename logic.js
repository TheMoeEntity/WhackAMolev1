
let rnd = 0
let hit = 0
let miss = 0
let index = []
let isvisible = false
let splatt = new Audio('splatt.mp3');
let whack = new Audio('whack.mp3');
for (var i = 0; i < 9; i++) {
	index.push(i)
}
let whenToAppear = [330,2000,850,100,1000,500]
let howfast = 0
let whenToHide = [660,400,450,850]
let items = document.querySelectorAll(".hide")
let holes = document.querySelectorAll(".item")
let flex = document.querySelector("#flex")
let mallet = document.querySelectorAll(".mallet")
for (var i = 0; i < mallet.length; i++) {
	mallet[i].style.display = "none"
}
let didMiss = true
for (var i = 0; i < items.length; i++) {

  items[i].style.visibility  = 'hidden'
  holes[i].setAttribute("id", i)

}

let setIndex = setInterval(()=>{
	
	rnd = index[Math.floor(Math.random()*9)]
	howfast = whenToAppear[Math.floor(Math.random()*6)]

		setTimeout(()=>{

			for (var i = 0; i < items.length; i++) {

				if (i==rnd) {
					continue;
				}
				items[i].style.visibility = 'hidden'
			}
			didMiss = false
			items[rnd].style.visibility  = 'visible'	
				setTimeout(()=>{
					items[rnd].style.visibility  = 'hidden'	
					didMiss = true
				}
		,whenToHide[Math.floor(Math.random()*4)])
		}
	,howfast)


},3000)



for (var i = 0; i < holes.length; i++) {
	holes[i].onclick = function() {

				const audioContext = window.AudioContext || window.webkitAudioContext;
				const audioCtx = new AudioContext()
				mallet[this.id].style.display = "block"
				setTimeout(()=>{mallet[this.id].style.display = "none"},250)
				whack.play()

			if (didMiss) {
	  		miss++
  			document.getElementById("missed").textContent = miss
			}
	}
}



for (var i = 0; i < items.length; i++) {
  items[i].onclick = function() {

  	if (items[rnd].style.visibility  = 'visible') {
			
			const audioContext = window.AudioContext || window.webkitAudioContext;
			const audioCtx = new AudioContext()
			splatt.play();
  		let currIndex = 0
  		currIndex = rnd
  		items[rnd].style.visibility  = 'hidden'
  		hit++
  		document.getElementById("hit").textContent = hit
  		index.splice(currIndex,1)
  		setTimeout(index.push(currIndex),1000)

  	}

  	
  }
}