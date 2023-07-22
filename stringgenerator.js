//тут заменть на нужный id
book_id = 000000

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function printstores(){
pagearr=[]
for (let i = 1; i <= 438; i++) {
	console.log(book_id.toString() + ":" + i +":0")
	await sleep(2)
  var omega = reader2cache.databases["reader2viewer"].transaction("page", 'readonly').objectStore("page").get(book_id.toString() + ":" + i +":0")
	omega.onsuccess = function(){console.log(omega.result.slices.join()); pagearr.push(omega.result.slices.join())}
	}
console.log(pagearr.join()) 
}
printstores()
