//тут заменть на нужный id
book_id = 000000
//заменить на число страниц
pages_count = 500

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function printstores(){
pagearr=[]
for (let i = 1; i <= pages_count; i++) {
	console.log(i + " out of " + pages_count)
	await sleep(2)
  var omega = reader2cache.databases["reader2viewer"].transaction("page", 'readonly').objectStore("page").get(book_id.toString() + ":" + i +":0")
	omega.onsuccess = function()pagearr.push(omega.result.slices.join())}
	}
console.log(pagearr.join()) 
}
printstores()
