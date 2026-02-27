const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop());
    const response = await fetch('/gifts');
    const data = await response.json();

    const giftContent = document.getElementById('gift-content');
    let gift;

    if (data){
        gift = data.find(gift => gift.id === requestedID);
        if (gift){
            const image = document.getElementById('img');
            image.src = `url(${gift.image})`;

            const giftName = document.getElementById('name');
            giftName.textContent = gift.name;

            const submittedBy = document.getElementById('submittedBy');
            submittedBy.textContent = `Submitted by: ${gift.submittedBy}`;

            const price = document.getElementById('pricePoint');
            price.textContent = `Price: ${gift.pricePoint}`;

            const audience = document.getElementById('audience');
            audience.textContent = `Great for: ${audience}`;

            const description = document.getElementById('description');
            description.textContent = gift.description;

            document.title = `UnEarthed - ${gift.name}`;

        }else{
            const message = document.createElement('h2');
            message.textContent = 'No Gifts Available :c';
            giftContent.appendChild(message);
        }
    }else{
        const message = document.createElement('h2');
        message.textContent = 'No Gifts Available :c';
        giftContent.appendChild(message);
    }
}

renderGift();