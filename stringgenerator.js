book_id = 394226
async function printstores(){
pagearr=[]
for (let i = 1; i <= 438; i++) {
	console.log(book_id.toString() + ":" + i +":0")
	await sleep(2)
  var omega = reader2cache.databases["reader2viewer"].transaction("page", 'readonly').objectStore("page").get(book_id.toString() + ":" + i +":0")
	omega.onsuccess = function(){console.log(omega.result.slices.join()); pagearr.push(omega.result.slices.join())}
	}
console.log(pagearr) 
}
printstores()