let numberOfIterations = 0;
const maxIterations = 10; // Change this to the desired number of iterations


const button_like = document.evaluate(
    '/html/body/div[1]/div/div[1]/div/main/div[1]/div/div/div[1]/div[1]/div/div[3]/div/div[4]/button',
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
).singleNodeValue;


const button_dislike = document.evaluate(
    '/html/body/div[1]/div/div[1]/div/main/div[1]/div/div/div[1]/div[1]/div/div[3]/div/div[2]/button',
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
    ).singleNodeValue;


function clickArrowRightButton() {
    if (button_like) {
        button_like.click();
    }
}

function clickArrowLeftButton() {

    if (button_dislike) {
        button_dislike.click();
    }
}

function simulateRandomButton() {
    const randomValue = Math.random();
    
    if (randomValue < 0.5) {
        clickArrowRightButton();
    } else {
        clickArrowLeftButton();
    }
    
    numberOfIterations++;
    console.log("one number " +  numberOfIterations) 
    
    if (numberOfIterations >= maxIterations) {
        clearInterval(interval);
    }
}

// Call simulateRandomButton initially to start the loop
simulateRandomButton();

const interval = setInterval(simulateRandomButton, 5000);

