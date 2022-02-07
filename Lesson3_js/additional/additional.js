let arr = []
let block = {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'est rerum tempore vitae nsequi sint nihil reprehenderit dolor beatae ea dolores neque nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendi nqui aperiam non debitis possimus qui neque nisi nulla',
}
document.write(`<div style="display: flex;
    flex-wrap: wrap; min-width: 100%; column-gap: 1%; row-gap: 10px;" >`)
for (let i = 0; i <= 99; i++){
     arr [i] = block
     arr[i].id = arr.length
    document.write(`<div style="max-width: 19%; overflow: hidden; border: black solid 1px; display: flex; flex-direction: column;text-align: center;">
<h3> userId: ${arr[i].userId} <br> id: ${arr[i].id} <br> title: ${arr[i].title}</h3>
<p>${arr[i].body} </p>
</div>`)
}
document.write(`</div>`)
