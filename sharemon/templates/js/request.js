function generateCards()
{ 
    const loopCount = 30;
    const row = '<div class="d-flex justify-content-center card-deck text-center">'
    const card = '<div class="card shadow bg-white rounded" style="width: 18rem;"><img class="card-img-top" data-src="holder.js/100px180/?text=Image cap" alt="Image cap [100%x180]" style="height: 180px; width: 100%; display: block;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_169f17b151e%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_169f17b151e%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.38333511352539%22%20y%3D%2296.23999977111816%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"><div class="card-body"><h4 class="card-title">Card title</h4><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p></div><div class="card-footer"><small class="text-muted">Last updated 3 mins ago</small></div></div>'
    let g; 
    g= document.createElement('div');
    g.id = 0;
    document.getElementsByClassName('request-container')[0].appendChild(g);
    document.getElementById(g.id).innerHTML=row;  
    
    for(let i=0;i<loopCount;i++)
    { 
        g= document.createElement('div');
        g.id = i+1;
        document.getElementsByClassName('card-deck')[0].appendChild(g);
        document.getElementById(g.id).innerHTML=card;         
    }
}
window.onload = generateCards();