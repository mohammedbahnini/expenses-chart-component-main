window.addEventListener('load',async ()=>{
    
    const res = await fetch('data.json');
    const data = await res.json();

    const chart = document.querySelector('.card__body-chart');

    addItems = async ()=>{
        data.forEach( (item , index)=>{
            chart.innerHTML += 
            `
                <div class="chart-item ${index == 2 ? "active" : ""}" >
                    <div class="chart-item__bar">
                        <div class="inner-bar" 
                            data-chart=${item.amount} 
                            style="transition-delay: ${index*0.02}s;">
    
                            <div class="amount">
                            $${item.amount}
                            </div>
    
                        </div>
                        
                    </div>
                    <p class="day-name">${item.day}</p>
                </div>
            `;
        })
    };

    await addItems();

    setTimeout( ()=>{
        const chartItems = document.querySelectorAll('.chart-item .inner-bar');
    chartItems.forEach( (item , index ) =>{
        item.style.height = `${item.dataset.chart/5}rem`;
        //item.style.transitionDelay = `${index*0.02}s`;
    });
    } ,150);
});